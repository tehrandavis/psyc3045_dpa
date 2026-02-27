const PHI_DOMAIN = [-Math.PI, Math.PI];
let a = 1, b = 1;
function dV(phi) { return  a * Math.sin(phi) + 2 * b * Math.sin(2 * phi); }

function findFixedPoints() {
  const pts = [];
  const step = 0.01;
  for (let phi = PHI_DOMAIN[0] + step; phi <= PHI_DOMAIN[1] + 1e-5; phi += step) {
    const v0 = dV(phi - step);
    const v1 = dV(phi);
    if (v0 * v1 <= 0 && Math.abs(v0 - v1) > 1e-9) {
      let x = phi - step / 2;
      for (let iter = 0; iter < 20; iter++) {
        const fx = dV(x);
        const dfx = a * Math.cos(x) + 4 * b * Math.cos(2 * x);
        if (Math.abs(dfx) < 1e-12) break;
        const dx = -fx / dfx;
        x += dx;
        if (Math.abs(dx) < 1e-9) break;
      }
      const d2 = a * Math.cos(x) + 4 * b * Math.cos(2 * x);
      const isStable = d2 > 0;
      const dup = pts.some(p => Math.abs(p.phi - x) < 0.05);
      if (!dup) {
        pts.push({ phi: x, stable: isStable });
      }
    }
  }
  return pts;
}
console.log(findFixedPoints());
