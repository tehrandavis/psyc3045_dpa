/**
 * Optic Flow: Warp Speed Demo
 * Implements a 3D starfield with radial expansion from a Focus of Expansion.
 * Includes an interactive 3D doorway with independent speed control.
 */

const canvas = document.getElementById('warpCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];
const STAR_COUNT = 4000;
let speed = 0.02;
let doorwaySpeed = 0.02; // Independent speed for the doorway
const DEPTH = 5000;

let targetFoE = { x: 0, y: 0 };
let currentFoE = { x: 0, y: 0 };
const FOE_SMOOTHING = 0.05;

class Doorway {
    constructor() {
        this.reset();
    }

    reset() {
        this.z = DEPTH;
        this.width = width * 0.4;
        this.height = height * 0.6;
    }

    update() {
        this.z -= doorwaySpeed * DEPTH;
        if (this.z <= 0) {
            this.reset();
        }
    }

    draw() {
        const focalLength = width / 2;
        const scale = focalLength / this.z;

        const dw = this.width * scale;
        const dh = this.height * scale;

        const x = width / 2 + currentFoE.x - dw / 2;
        const y = height / 2 + currentFoE.y - dh / 2;

        const opacity = Math.min(1, 1 - (this.z / DEPTH));

        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.8})`;
        ctx.lineWidth = Math.max(2, 5 * scale);
        ctx.setLineDash([]);

        ctx.strokeRect(x, y, dw, dh);

        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(0, 212, 255, 0.5)';
        ctx.strokeRect(x, y, dw, dh);
        ctx.shadowBlur = 0;
    }
}

let doorway = new Doorway();

class Star {
    constructor() {
        this.init();
    }

    init() {
        this.x = (Math.random() - 0.5) * width * 8;
        this.y = (Math.random() - 0.5) * height * 8;
        this.z = Math.random() * DEPTH;
        this.pz = this.z;

        const hue = Math.random() > 0.8 ? 200 + Math.random() * 40 : 180;
        this.color = `hsla(${hue}, 80%, 80%, `;
    }

    update() {
        this.pz = this.z;
        this.z -= speed * DEPTH;

        if (this.z <= 0) {
            this.init();
            this.z = DEPTH;
            this.pz = this.z;
        }
    }

    draw() {
        const focalLength = width / 2;

        const sx = (this.x / this.z) * focalLength + width / 2 + currentFoE.x;
        const sy = (this.y / this.z) * focalLength + height / 2 + currentFoE.y;

        const px = (this.x / this.pz) * focalLength + width / 2 + currentFoE.x;
        const py = (this.y / this.pz) * focalLength + height / 2 + currentFoE.y;

        const opacity = Math.min(1, 1 - (this.z / DEPTH));
        const lineWidth = Math.max(0.5, (1 - (this.z / DEPTH)) * 4);

        ctx.strokeStyle = this.color + opacity + ')';
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
    }
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
    }
    doorway.reset();
}

function animate() {
    currentFoE.x += (targetFoE.x - currentFoE.x) * FOE_SMOOTHING;
    currentFoE.y += (targetFoE.y - currentFoE.y) * FOE_SMOOTHING;

    ctx.fillStyle = 'rgba(5, 5, 5, 0.2)';
    ctx.fillRect(0, 0, width, height);

    for (let star of stars) {
        star.update();
        star.draw();
    }

    doorway.update();
    doorway.draw();

    requestAnimationFrame(animate);
}

window.addEventListener('mousemove', (e) => {
    targetFoE.x = (e.clientX - width / 2) * 0.5;
    targetFoE.y = (e.clientY - height / 2) * 0.5;
});

window.addEventListener('keydown', (e) => {
    // Star Speed Controls
    if (e.key === 'ArrowUp') speed = Math.min(0.2, speed + 0.005);
    if (e.key === 'ArrowDown') speed = Math.max(0, speed - 0.005);
    if (e.key === ' ') speed = 0.15; // Space for boost

    // Doorway Speed Controls (F: increase, J: decrease, R: reset)
    if (e.key.toLowerCase() === 'f') doorwaySpeed = Math.min(0.2, doorwaySpeed + 0.005);
    if (e.key.toLowerCase() === 'j') doorwaySpeed = Math.max(0, doorwaySpeed - 0.005);
    if (e.key.toLowerCase() === 'r') doorwaySpeed = speed;
});

window.addEventListener('keyup', (e) => {
    if (e.key === ' ') speed = 0.02;
});

window.addEventListener('wheel', (e) => {
    speed = Math.max(0, Math.min(0.2, speed - e.deltaY * 0.0001));
});

window.addEventListener('resize', resize);
resize();
animate();
