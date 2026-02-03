/**
 * Tau (τ) Time-to-Contact Demo
 * Shows side view and first-person perspective of approaching ball
 */

const canvas = document.getElementById('tauCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let ballSpeed = 200; // pixels per second
let ballX = 0;
let ballY = 0;
let ballRadius = 18;
let isLaunched = false;
let startTime = 0;
let lastTime = 0;
let previousTau = null;
let tauDot = 0;
let safeMode = false;
let currentSpeed = 200; // Track actual speed during flight

// Figure position (moved further right for longer approach)
const FIGURE_X = 900;
const FIGURE_Y = 500;
const FIGURE_HEIGHT = 80;

// Ball starting position
const BALL_START_X = 80;
const BALL_START_Y = FIGURE_Y - FIGURE_HEIGHT + 15; // At head level

// Inset dimensions
const INSET_WIDTH = 320;
const INSET_HEIGHT = 280;
const INSET_MARGIN = 25;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.min(width - 40, 1400);
    canvas.height = Math.min(height - 200, 700);
}

function reset() {
    ballX = BALL_START_X;
    ballY = BALL_START_Y;
    isLaunched = false;
    startTime = 0;
    previousTau = null;
    tauDot = 0;
    currentSpeed = ballSpeed; // Reset current speed
}

function drawSky() {
    const gradient = ctx.createLinearGradient(0, 0, 0, FIGURE_Y);
    gradient.addColorStop(0, '#87CEEB');
    gradient.addColorStop(0.5, '#B0E2FF');
    gradient.addColorStop(1, '#E8F4F8');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, FIGURE_Y + 20);
}

function drawGround() {
    // Grass
    const grassGradient = ctx.createLinearGradient(0, FIGURE_Y + 20, 0, canvas.height);
    grassGradient.addColorStop(0, '#7CB342');
    grassGradient.addColorStop(0.3, '#689F38');
    grassGradient.addColorStop(1, '#558B2F');
    ctx.fillStyle = grassGradient;
    ctx.fillRect(0, FIGURE_Y + 20, canvas.width, canvas.height - (FIGURE_Y + 20));

    // Ground line
    ctx.strokeStyle = '#5D9930';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, FIGURE_Y + 20);
    ctx.lineTo(canvas.width, FIGURE_Y + 20);
    ctx.stroke();
}

function drawStickFigure(x, y) {
    ctx.strokeStyle = '#2C3E50';
    ctx.fillStyle = '#2C3E50';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const headRadius = 18;
    const neckLength = 12;
    const bodyLength = 40;
    const armLength = 25;
    const legLength = 35;

    const headY = y - FIGURE_HEIGHT;
    const neckBottomY = headY + headRadius + neckLength;
    const shoulderY = neckBottomY + 5;
    const hipY = shoulderY + bodyLength;

    // Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.beginPath();
    ctx.ellipse(x, y + 22, 25, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    // Legs
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x, hipY);
    ctx.lineTo(x - 18, y + 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, hipY);
    ctx.lineTo(x + 18, y + 20);
    ctx.stroke();

    // Feet
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x - 18, y + 20);
    ctx.lineTo(x - 28, y + 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x + 18, y + 20);
    ctx.lineTo(x + 28, y + 20);
    ctx.stroke();

    // Body
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x, neckBottomY);
    ctx.lineTo(x, hipY);
    ctx.stroke();

    // Neck
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x, headY + headRadius);
    ctx.lineTo(x, neckBottomY);
    ctx.stroke();

    // Shoulders
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(x - armLength, shoulderY + 5);
    ctx.lineTo(x + armLength, shoulderY + 5);
    ctx.stroke();

    // Arms (slightly bent, natural pose)
    ctx.lineWidth = 4;
    // Left arm
    ctx.beginPath();
    ctx.moveTo(x - armLength, shoulderY + 5);
    ctx.lineTo(x - armLength - 5, hipY - 10);
    ctx.stroke();

    // Right arm
    ctx.beginPath();
    ctx.moveTo(x + armLength, shoulderY + 5);
    ctx.lineTo(x + armLength + 5, hipY - 10);
    ctx.stroke();

    // Head
    ctx.fillStyle = '#FDD9B5';
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, headY, headRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Eyes (looking left toward ball)
    ctx.fillStyle = '#2C3E50';
    ctx.beginPath();
    ctx.arc(x - 6, headY - 3, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 4, headY - 3, 3, 0, Math.PI * 2);
    ctx.fill();
}

function drawBall(x, y, radius) {
    // Ball shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.beginPath();
    ctx.ellipse(x, FIGURE_Y + 22, radius * 1.2, radius * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Ball main
    const gradient = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, 0, x, y, radius);
    gradient.addColorStop(0, '#FF8A80');
    gradient.addColorStop(0.5, '#FF5252');
    gradient.addColorStop(1, '#D32F2F');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    // Ball outline
    ctx.strokeStyle = '#B71C1C';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(x - radius * 0.35, y - radius * 0.35, radius * 0.35, 0, Math.PI * 2);
    ctx.fill();

    // Secondary highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.beginPath();
    ctx.arc(x - radius * 0.15, y - radius * 0.55, radius * 0.15, 0, Math.PI * 2);
    ctx.fill();
}

function drawInset() {
    const insetX = canvas.width - INSET_WIDTH - INSET_MARGIN;
    const insetY = INSET_MARGIN;

    // Inset shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(insetX + 5, insetY + 5, INSET_WIDTH, INSET_HEIGHT);

    // Inset background (sky gradient)
    const skyGradient = ctx.createRadialGradient(
        insetX + INSET_WIDTH / 2,
        insetY + INSET_HEIGHT / 2,
        0,
        insetX + INSET_WIDTH / 2,
        insetY + INSET_HEIGHT / 2,
        INSET_WIDTH
    );
    skyGradient.addColorStop(0, '#B3E5FC');
    skyGradient.addColorStop(1, '#81D4FA');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(insetX, insetY, INSET_WIDTH, INSET_HEIGHT);

    // Inset border
    ctx.strokeStyle = '#1565C0';
    ctx.lineWidth = 4;
    ctx.strokeRect(insetX, insetY, INSET_WIDTH, INSET_HEIGHT);

    // Calculate ball size in first-person view
    const distance = FIGURE_X - ballX;
    const maxDistance = FIGURE_X - BALL_START_X;

    if (distance > 0) {
        // Map distance to visual angle (closer = larger)
        const minSize = 15;
        const maxSize = 120;
        const visualRadius = minSize + (maxSize - minSize) * Math.pow(1 - distance / maxDistance, 0.8);

        // Draw ball in center of inset
        const centerX = insetX + INSET_WIDTH / 2;
        const centerY = insetY + INSET_HEIGHT / 2 - 10;

        // Ball shadow in inset
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + visualRadius * 0.8, visualRadius * 0.6, visualRadius * 0.15, 0, 0, Math.PI * 2);
        ctx.fill();

        // Ball gradient
        const ballGradient = ctx.createRadialGradient(
            centerX - visualRadius * 0.3,
            centerY - visualRadius * 0.3,
            0,
            centerX,
            centerY,
            visualRadius
        );
        ballGradient.addColorStop(0, '#FF8A80');
        ballGradient.addColorStop(0.5, '#FF5252');
        ballGradient.addColorStop(1, '#D32F2F');

        ctx.fillStyle = ballGradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, visualRadius, 0, Math.PI * 2);
        ctx.fill();

        // Ball outline
        ctx.strokeStyle = '#B71C1C';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Highlights
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(centerX - visualRadius * 0.35, centerY - visualRadius * 0.35, visualRadius * 0.3, 0, Math.PI * 2);
        ctx.fill();

        // Calculate optical tau (τ = θ / θ̇)
        // θ = angular size ≈ 2 * arctan(radius / distance)
        const theta = 2 * Math.atan(ballRadius / distance);

        // Calculate TTC (physical time-to-contact)
        const ttc = distance / ballSpeed;

        // Calculate θ̇ (expansion rate)
        // Use currentSpeed (not ballSpeed) to account for deceleration
        const thetaDot = (2 * ballRadius * currentSpeed) / (distance * distance);

        // Calculate tau
        const tau = theta / thetaDot;

        // Set τ̇ based on mode
        if (safeMode) {
            // Gradually decrease from -1 to -0.25 as ball approaches
            const initialDistance = FIGURE_X - BALL_START_X;
            const progress = 1 - (distance / initialDistance);
            tauDot = -1 + (0.75 * progress); // Goes from -1 to -0.25
        } else {
            // Constant velocity: τ̇ = -1
            tauDot = -1;
        }

        previousTau = tau;

        // Info box background (larger for three values)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(insetX + INSET_WIDTH / 2 - 90, insetY + INSET_HEIGHT - 75, 180, 65);
        ctx.strokeStyle = '#1565C0';
        ctx.lineWidth = 2;
        ctx.strokeRect(insetX + INSET_WIDTH / 2 - 90, insetY + INSET_HEIGHT - 75, 180, 65);

        // Display tau (optical variable)
        ctx.fillStyle = '#E65100';
        ctx.font = 'bold 17px Outfit';
        ctx.textAlign = 'center';
        ctx.fillText(`τ (optical) = ${tau.toFixed(2)}s`, centerX, insetY + INSET_HEIGHT - 53);

        // Display TTC (physical)
        ctx.fillStyle = '#1565C0';
        ctx.font = '15px Outfit';
        ctx.fillText(`TTC = ${ttc.toFixed(2)}s`, centerX, insetY + INSET_HEIGHT - 35);

        // Display tau-dot (red if < -0.5, green if > -0.5)
        ctx.font = 'bold 15px Outfit';
        const tauDotColor = tauDot > -0.5 ? '#4CAF50' : '#FF5722';
        ctx.fillStyle = tauDotColor;
        ctx.fillText(`τ̇ = ${tauDot.toFixed(2)}`, centerX, insetY + INSET_HEIGHT - 17);
    }

    // Label
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(insetX + 8, insetY + 8, 145, 28);
    ctx.fillStyle = '#1565C0';
    ctx.font = 'bold 16px Outfit';
    ctx.textAlign = 'left';
    ctx.fillText('First-Person View', insetX + 14, insetY + 27);
}

function drawSpeedIndicator() {
    // Background panel (taller for mode display)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(15, 15, 240, 90);
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 2;
    ctx.strokeRect(15, 15, 240, 90);

    // Mode display
    ctx.fillStyle = safeMode ? '#4CAF50' : '#FF5722';
    ctx.font = 'bold 18px Outfit';
    ctx.textAlign = 'left';
    ctx.fillText(`Mode: ${safeMode ? 'SAFE' : 'UNSAFE'}`, 25, 38);

    ctx.fillStyle = '#1565C0';
    ctx.font = 'bold 18px Outfit';
    ctx.fillText(`Speed: ${ballSpeed} px/s`, 25, 62);

    if (!isLaunched) {
        ctx.font = '13px Outfit';
        ctx.fillStyle = '#666';
        ctx.fillText('SPACE: launch | S: toggle mode', 25, 85);
    } else {
        ctx.font = '14px Outfit';
        ctx.fillStyle = safeMode ? '#4CAF50' : '#FF5722';
        const speedText = safeMode ? `Decelerating... ${Math.round(currentSpeed)} px/s` : 'Constant velocity';
        ctx.fillText(speedText, 25, 85);
    }
}

function drawDistanceMarker() {
    if (ballX < FIGURE_X - ballRadius) {
        const distance = FIGURE_X - ballX;

        // Distance line
        ctx.strokeStyle = 'rgba(33, 150, 243, 0.5)';
        ctx.lineWidth = 2;
        ctx.setLineDash([8, 4]);
        ctx.beginPath();
        ctx.moveTo(ballX, FIGURE_Y + 50);
        ctx.lineTo(FIGURE_X, FIGURE_Y + 50);
        ctx.stroke();
        ctx.setLineDash([]);

        // Distance label
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fillRect((ballX + FIGURE_X) / 2 - 50, FIGURE_Y + 55, 100, 25);
        ctx.fillStyle = '#1565C0';
        ctx.font = '14px Outfit';
        ctx.textAlign = 'center';
        ctx.fillText(`d = ${Math.round(distance)} px`, (ballX + FIGURE_X) / 2, FIGURE_Y + 72);
    }
}

function update(deltaTime) {
    if (isLaunched) {
        const distance = FIGURE_X - ballX;
        const initialDistance = FIGURE_X - BALL_START_X;

        // Safe mode: maintain τ̇ = -0.25 throughout flight
        // This requires: v = v₀ × (d/d₀)^0.75
        if (safeMode) {
            const distanceRatio = distance / initialDistance;
            currentSpeed = ballSpeed * Math.pow(distanceRatio, 0.75);
            currentSpeed = Math.max(10, currentSpeed); // Minimum speed
        } else {
            currentSpeed = ballSpeed; // Constant speed in unsafe mode
        }

        ballX += currentSpeed * deltaTime;

        // Check if ball reached figure
        if (ballX >= FIGURE_X - ballRadius - 20) {
            ballX = FIGURE_X - ballRadius - 20;
            isLaunched = false;
        }
    }
}

function draw(currentTime) {
    if (!lastTime) lastTime = currentTime;
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    // Update physics
    update(deltaTime);

    // Draw scene
    drawSky();
    drawGround();
    drawDistanceMarker();
    drawStickFigure(FIGURE_X, FIGURE_Y);
    drawBall(ballX, ballY, ballRadius);
    drawInset();
    drawSpeedIndicator();

    requestAnimationFrame(draw);
}

// Keyboard controls
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (!isLaunched && ballX < FIGURE_X - ballRadius - 20) {
            isLaunched = true;
            startTime = performance.now();
        }
    } else if (e.code === 'KeyF') {
        ballSpeed = Math.max(50, ballSpeed - 25);
    } else if (e.code === 'KeyJ') {
        ballSpeed = Math.min(500, ballSpeed + 25);
    } else if (e.code === 'KeyS') {
        safeMode = !safeMode;
    } else if (e.code === 'KeyR') {
        reset();
    }
});

window.addEventListener('resize', resize);

resize();
reset();
requestAnimationFrame(draw);
