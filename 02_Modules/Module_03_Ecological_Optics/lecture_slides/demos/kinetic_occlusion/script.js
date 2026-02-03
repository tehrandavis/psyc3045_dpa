/**
 * Kinetic Occlusion (Kaplan Effect)
 * Objects defined purely by accretion/deletion of texture at edges.
 * Mode: Radial Zoom (Simulating approach/retreat through a window)
 */

const canvas = document.getElementById('warpCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let isMoving = true;
let zoomSpeed = 1.01;
let currentScale = 1.0;

// Config
const DOOR_RADIUS = 250;
const DOT_DENSITY = 0.7; // Higher density
const PIXEL_SCALE = 2; // Sharper pixels

// We need two noise textures:
// 1. Foreground (The Wall) - Static
// 2. Background (The World) - Zooms
let fgCanvas, bgCanvas;

function createNoiseCanvas(w, h) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const cCtx = c.getContext('2d');

    // Fill with black
    cCtx.fillStyle = '#000';
    cCtx.fillRect(0, 0, w, h);

    // Draw random white pixels
    const idata = cCtx.createImageData(w, h);
    const data = idata.data;

    for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() > DOT_DENSITY ? 255 : 0;
        data[i] = val;     // R
        data[i + 1] = val;   // G
        data[i + 2] = val;   // B
        data[i + 3] = 255;   // A
    }

    cCtx.putImageData(idata, 0, 0);
    return c;
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
    ctx.imageSmoothingEnabled = false;

    // Create base textures
    // FG must cover screen
    fgCanvas = createNoiseCanvas(width / PIXEL_SCALE, height / PIXEL_SCALE);
    // BG must be large enough to handle some zoom out before tiling
    bgCanvas = createNoiseCanvas(width / PIXEL_SCALE, height / PIXEL_SCALE);
}

// Mouse tracking for circle position
let mouseX = 0;
let mouseY = 0;

function draw() {
    // Clear
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);

    // Circle follows mouse (or center if no mouse movement yet)
    const cx = mouseX || width / 2;
    const cy = mouseY || height / 2;

    // 1. Update zoom
    if (isMoving) {
        currentScale *= zoomSpeed;
        if (currentScale > 4.0) currentScale /= 2.0;
        if (currentScale < 0.5) currentScale *= 2.0;
    }

    // 2. Draw ZOOMING Background (The Wall) - everything except the circle
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    // Cut out the circle (counter-clockwise)
    ctx.arc(cx, cy, DOOR_RADIUS, 0, Math.PI * 2, true);
    ctx.clip();

    // Apply zoom to the wall texture
    ctx.translate(width / 2, height / 2);
    ctx.scale(currentScale * PIXEL_SCALE, currentScale * PIXEL_SCALE);
    ctx.drawImage(fgCanvas, -fgCanvas.width / 2, -fgCanvas.height / 2);
    ctx.restore();

    // 3. Draw STATIC Circle content (doorway/window)
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, DOOR_RADIUS, 0, Math.PI * 2);
    ctx.clip();

    // Static texture (no zoom) - centered on circle
    ctx.scale(PIXEL_SCALE, PIXEL_SCALE);
    ctx.drawImage(bgCanvas, 0, 0);
    ctx.restore();

    // 4. UI
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(20, height - 60, 380, 40);
    ctx.fillStyle = '#fff';
    ctx.font = '16px Satoshi, sans-serif';
    ctx.fillText("Space: Pause | I / K: Zoom In/Out | Move mouse", 40, height - 35);

    requestAnimationFrame(draw);
}

// Mouse tracking
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Interaction
window.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key === ' ') {
        isMoving = !isMoving;
    } else if (key === 'i') {
        zoomSpeed = 1.02; // Zoom In
    } else if (key === 'k') {
        zoomSpeed = 0.98; // Zoom Out
    }
});

window.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    if (key === 'i' || key === 'k') {
        zoomSpeed = 1.0; // Stop zooming when key released
    }
});

window.addEventListener('resize', resize);

// Init
resize();
draw();