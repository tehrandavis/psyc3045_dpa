/**
 * Optical Flow Specificity Demo
 * Compares observer motion vs. object motion.
 */

const canvas = document.getElementById('flowCanvas');
const ctx = canvas.getContext('2d');
const playPauseBtn = document.getElementById('playPauseBtn');
const resetBtn = document.getElementById('resetBtn');

let width, height;
let animationProgress = 0;
let isPlaying = true;
let animationSpeed = 0.004;

let speedRatio = 0.5;
const PERFECT_RATIO = 2.0;

// Fixed object parameters
const NEAR_OBJ = { pos: 400, height: 50, color: 'rgba(0, 136, 204, 1)' };
const FAR_OBJ = { pos: 800, height: 100, color: 'rgba(204, 0, 102, 1)' };

const scenarios = [
    {
        name: 'Observer Motion: Eye Approaches Stationary Objects',
        subtitle: 'Eye moves at constant speed → angles ALWAYS diverge',
        observerMoves: true
    },
    {
        name: 'Object Motion: Adjust Far Object Speed',
        subtitle: 'Use ↑↓ to find ratio that keeps angles constant',
        objectsMove: true
    }
];

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.min(width - 40, 1200);
    canvas.height = Math.min(height - 180, 700);
}

function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function drawEye(x, y, radius) {
    ctx.fillStyle = '#333333';
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.arc(x, y, radius, -Math.PI / 2, Math.PI / 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#0088cc';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
}

function drawOpticalAxis(eyeX, eyeY, length) {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(eyeX, eyeY);
    ctx.lineTo(eyeX + length, eyeY);
    ctx.stroke();
    ctx.setLineDash([]);
}

function drawTree(x, y, height, color) {
    // Trunk
    const trunkWidth = height * 0.15;
    const trunkHeight = height * 0.4;
    ctx.fillStyle = '#6B4423';
    ctx.fillRect(x - trunkWidth / 2, y, trunkWidth, trunkHeight);

    // Canopy (triangle)
    const canopyWidth = height * 0.6;
    const canopyHeight = height * 0.6;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y - canopyHeight);
    ctx.lineTo(x - canopyWidth / 2, y + trunkHeight * 0.3);
    ctx.lineTo(x + canopyWidth / 2, y + trunkHeight * 0.3);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = color.replace('1)', '0.9)');
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawRectangle(x, y, height, color) {
    const width = height * 0.15;

    ctx.fillStyle = color;
    ctx.fillRect(x - width / 2, y - height / 2, width, height);

    ctx.strokeStyle = color.replace('1)', '0.9)');
    ctx.lineWidth = 2;
    ctx.strokeRect(x - width / 2, y - height / 2, width, height);
}

function drawProjectionRays(eyeX, eyeY, objX, objTop, objBottom, color) {
    const rayColor = color.replace('1)', '0.25)');
    const fillColor = color.replace('1)', '0.05)');

    ctx.strokeStyle = rayColor;
    ctx.fillStyle = fillColor;
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(eyeX, eyeY);
    ctx.lineTo(objX, objTop);
    ctx.lineTo(objX, objBottom);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(eyeX, eyeY);
    ctx.lineTo(objX, objTop);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(eyeX, eyeY);
    ctx.lineTo(objX, objBottom);
    ctx.stroke();
}

function drawInterObjectDistance(x1, y, x2, label) {
    const separation = x2 - x1;
    const bracketY = y + 80;
    const bracketHeight = 12;

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(x1, bracketY - bracketHeight / 2);
    ctx.lineTo(x1, bracketY + bracketHeight / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x1, bracketY);
    ctx.lineTo(x2, bracketY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x2, bracketY - bracketHeight / 2);
    ctx.lineTo(x2, bracketY + bracketHeight / 2);
    ctx.stroke();

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.font = '13px Outfit';
    ctx.textAlign = 'center';
    ctx.fillText(`Δd = ${separation.toFixed(0)}${label}`, (x1 + x2) / 2, bracketY + 20);
}

function drawTimeLabel(x, y, label) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.font = '16px Outfit';
    ctx.textAlign = 'center';
    ctx.fillText(label, x, y - 10);
}

function drawAngleIndicator(eyeX, eyeY, objX, objTop, objBottom, color, labelOffsetY = 0) {
    const topAngle = Math.atan2(objTop - eyeY, objX - eyeX);
    const bottomAngle = Math.atan2(objBottom - eyeY, objX - eyeX);
    const visualAngle = Math.abs(topAngle - bottomAngle);
    const visualAngleDeg = (visualAngle * 180 / Math.PI).toFixed(1);

    const arcRadius = 40;
    ctx.strokeStyle = color.replace('1)', '0.6)');
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, arcRadius, bottomAngle, topAngle);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.font = '13px Outfit';
    ctx.textAlign = 'left';
    const midAngle = (topAngle + bottomAngle) / 2;
    const labelX = eyeX + Math.cos(midAngle) * (arcRadius + 20);
    const labelY = eyeY + Math.sin(midAngle) * (arcRadius + 20) + labelOffsetY;
    ctx.fillText(`θ = ${visualAngleDeg}°`, labelX, labelY);

    return parseFloat(visualAngleDeg);
}

function drawScenario(scenario, yOffset, progress) {
    const baseEyeX = 80;
    const eyeY = yOffset;
    const eyeRadius = 20;
    const axisLength = canvas.width - 120;

    const t = easeInOutCubic(progress);

    let eyeX, nearObjX, farObjX;
    let nearDist, farDist;

    if (scenario.observerMoves) {
        // SCENARIO 1: Observer moves toward stationary objects
        const maxEyeTravel = 300;
        eyeX = baseEyeX + (maxEyeTravel * t);

        // Objects stay at fixed positions
        nearObjX = baseEyeX + NEAR_OBJ.pos;
        farObjX = baseEyeX + FAR_OBJ.pos;

        nearDist = nearObjX - eyeX;
        farDist = farObjX - eyeX;

    } else {
        // SCENARIO 2: Objects move toward stationary observer
        eyeX = baseEyeX;

        // Near object moves at base speed
        const nearTravel = NEAR_OBJ.pos * 0.7 * t;
        nearDist = NEAR_OBJ.pos - nearTravel;
        nearObjX = eyeX + nearDist;

        // Far object moves at speedRatio × base speed
        const farTravel = FAR_OBJ.pos * 0.7 * speedRatio * t;
        farDist = FAR_OBJ.pos - farTravel;
        farObjX = eyeX + farDist;
    }

    drawOpticalAxis(eyeX, eyeY, axisLength);

    // Draw near tree
    const nearTop = eyeY - NEAR_OBJ.height / 2;
    const nearBottom = eyeY + NEAR_OBJ.height / 2;
    drawProjectionRays(eyeX, eyeY, nearObjX, nearTop, nearBottom, NEAR_OBJ.color);
    drawRectangle(nearObjX, eyeY, NEAR_OBJ.height, NEAR_OBJ.color);
    const nearAngle = drawAngleIndicator(eyeX, eyeY, nearObjX, nearTop, nearBottom, NEAR_OBJ.color, -15);

    // Draw far tree
    const farTop = eyeY - FAR_OBJ.height / 2;
    const farBottom = eyeY + FAR_OBJ.height / 2;
    drawProjectionRays(eyeX, eyeY, farObjX, farTop, farBottom, FAR_OBJ.color);
    drawRectangle(farObjX, eyeY, FAR_OBJ.height, FAR_OBJ.color);
    const farAngle = drawAngleIndicator(eyeX, eyeY, farObjX, farTop, farBottom, FAR_OBJ.color, 15);

    // Draw separation
    const label = scenario.observerMoves ? ' (constant)' : '';
    drawInterObjectDistance(nearObjX, eyeY, farObjX, label);

    // Time label only for observer motion (t₂ shows eye position)
    if (scenario.observerMoves) {
        drawTimeLabel(eyeX, eyeY + 35, 't₂');
    }

    drawEye(eyeX, eyeY, eyeRadius);

    // Labels - always on left

    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'bold 18px Outfit';
    ctx.textAlign = 'left';
    ctx.fillText(scenario.name, baseEyeX, yOffset - 105);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.font = '13px Outfit';
    ctx.fillText(scenario.subtitle, baseEyeX, yOffset - 85);

    // Feedback
    const angleDiff = Math.abs(nearAngle - farAngle);

    if (scenario.objectsMove) {
        const isPerfect = angleDiff < 0.3;

        ctx.font = '14px Outfit';
        ctx.fillStyle = isPerfect ? 'rgba(0, 153, 102, 0.9)' : 'rgba(0, 0, 0, 0.7)';

        const ratioText = `Speed Ratio (far:near) = ${speedRatio.toFixed(2)}:1`;
        const statusText = isPerfect
            ? '✓ Perfect! Angles constant → far tree covers more ground'
            : `Angle difference: ${angleDiff.toFixed(1)}° → depth revealed`;

        // Feedback on right side
        const feedbackX = canvas.width - 20;
        ctx.textAlign = 'right';
        ctx.fillText(ratioText, feedbackX, yOffset - 105);
        ctx.fillText(statusText, feedbackX, yOffset - 85);

        if (!isPerfect && progress < 0.1) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.font = '12px Outfit';
            ctx.fillText('Hint: Try ratio ≈ 2.0', feedbackX, yOffset - 20);
        }
    } else {
        if (progress < 0.05) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
            ctx.font = '14px Outfit';
            ctx.fillText('Static: Same visual angle → ambiguous', baseEyeX, yOffset - 60);
        } else if (progress > 0.2) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
            ctx.font = '14px Outfit';
            ctx.fillText(`Observer motion: Angles diverge (${angleDiff.toFixed(1)}°) → depth revealed`, baseEyeX, yOffset - 60);
        }
    }
}

function draw() {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const scenarioHeight = canvas.height / 2;

    drawScenario(scenarios[0], scenarioHeight / 2, animationProgress);
    drawScenario(scenarios[1], scenarioHeight + scenarioHeight / 2, animationProgress);

    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, scenarioHeight);
    ctx.lineTo(canvas.width, scenarioHeight);
    ctx.stroke();
}

function animate() {
    if (isPlaying) {
        animationProgress += animationSpeed;
        if (animationProgress >= 1) {
            animationProgress = 0;
        }
    }

    draw();
    requestAnimationFrame(animate);
}

// Keyboard controls
window.addEventListener('keydown', (e) => {
    switch (e.key.toLowerCase()) {
        case 'f':
            speedRatio = Math.min(speedRatio + 0.1, 4.0);
            break;
        case 'j':
            speedRatio = Math.max(speedRatio - 0.1, 0.1);
            break;
        case ' ':
            isPlaying = !isPlaying;
            break;
    }
});

resize();
animate();
