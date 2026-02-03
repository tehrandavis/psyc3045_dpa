/**
 * Random-Dot Kinematogram (RDK) & Kinetic Occlusion
 * This demo illustrates how an object can be perceived purely through motion
 * via accretion and deletion of background texture.
 */

const canvas = document.getElementById('warpCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let dots = [];
let rect = { x: 0, y: 0, w: 300, h: 200, vx: 2, vy: 1 };
let noiseScale = 2; // Pixel size for noise
let dotDensity = 0.5; // Probability of a pixel being white

// This canvas stores the "global" noise field
const noiseCanvas = document.createElement('canvas');
const noiseCtx = noiseCanvas.getContext('2d');

function initNoise() {
    noiseCanvas.width = width * 2;
    noiseCanvas.height = height * 2;

    const idata = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
    const data = idata.data;

    for (let i = 0; i < data.length; i += 4) {
        const val = Math.random() > dotDensity ? 255 : 0;
        data[i] = val;     // R
        data[i + 1] = val;   // G
        data[i + 2] = val;   // B
        data[i + 3] = 255;   // A
    }
    noiseCtx.putImageData(idata, 0, 0);
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    rect.x = width / 2 - rect.w / 2;
    rect.y = height / 2 - rect.h / 2;

    initNoise();
}

let offset = { x: 0, y: 0 };

function animate() {
    // 1. Draw static background noise
    // We draw a portion of the infinite noise canvas
    ctx.drawImage(noiseCanvas, 0, 0, width, height, 0, 0, width, height);

    // 2. Clear/Update UI if needed (currently static)

    // 3. Draw moving rectangle
    // The "object" is just a different window into the SAME noise field, 
    // but moving at a different velocity (or shifting its texture).

    // Update rectangle position
    rect.x += rect.vx;
    rect.y += rect.vy;

    // Wrap around screen
    if (rect.x > width) rect.x = -rect.w;
    if (rect.x < -rect.w) rect.x = width;
    if (rect.y > height) rect.y = -rect.h;
    if (rect.y < -rect.h) rect.y = height;

    // To show accretion/deletion:
    // We clip a rectangle and draw the noise field shifted slightly INSIDE it.
    ctx.save();
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
    ctx.clip();

    // Shift the texture internally to define the object
    offset.x += rect.vx;
    offset.y += rect.vy;

    // Draw the same noise field but offset
    ctx.drawImage(noiseCanvas, 100 + offset.x % width, 100 + offset.y % height, width, height, 0, 0, width, height);

    ctx.restore();

    requestAnimationFrame(animate);
}

// Interactivity to manually move the object
window.addEventListener('mousemove', (e) => {
    // Optional: make the rect follow the mouse if a key is held
});

window.addEventListener('resize', resize);
resize();
animate();
