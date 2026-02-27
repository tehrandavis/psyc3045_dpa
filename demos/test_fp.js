const PHI_DOMAIN = [-Math.PI, Math.PI];
let a = 1, b = 1;
function dV(phi) { return  a * Math.sin(phi) + 2 * b * Math.sin(2 * phi); }

function findFixedPoints() {
  const candidates = [];
  const N = 2000;
  const step = (PHI_DOMAIN[1] - PHI_DOMAIN[0]) / N;
  let prevVal = dV(PHI_DOMAIN[0]);
  for (let i = 1; i <= N; i++) {
    const phi = PHI_DOMAIN[0] + i * step;
    const val = dV(phi);
    if (prevVal * val < 0) {
      let lo = phi - step, hi = phi;
      for (let j = 0; j < 40; j++) {
        const mid = (lo + hi) / 2;
        if (dV(lo) * dV(mid) < 0) hi = mid; else lo = mid;
      }
      const fp = (lo + hi) / 2;
      const d2 = (dV(fp + 1e-5) - dV(fp - 1e-5)) / (2e-5);
      candidates.push({ phi: fp, stable: d2 > 0 });
    }
    prevVal = val;
  }
  return candidates;
}

console.log(findFixedPoints());
