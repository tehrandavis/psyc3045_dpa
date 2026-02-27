const DT = 0.02;
function dV(phi) { return Math.sin(phi) + 2 * Math.sin(2 * phi); }
let phi = 3.1;
for(let i=0; i<300; i++) {
  let vel = -dV(phi);
  phi = phi + vel * DT;
  while(phi > Math.PI) phi -= 2*Math.PI;
  while(phi < -Math.PI) phi += 2*Math.PI;
  if (Math.abs(vel) > 0.5) console.log(phi, vel);
}
console.log("final phi is ", phi);
console.log("final velocity is ", -dV(phi));
