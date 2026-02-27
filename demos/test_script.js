const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('file:///Users/tehrandavis/maestral/_Workbench/demos/demo3_hkb_trajectories.html');
  await page.evaluate(() => {
    spawnBall(3.14); // Very close to pi (anti-phase basin)
  });
  await new Promise(r => setTimeout(r, 2000)); // wait for settling
  const scoreIn = await page.$eval('#score-in', el => el.textContent);
  const scoreAnti = await page.$eval('#score-anti', el => el.textContent);
  console.log(`In: ${scoreIn}, Anti: ${scoreAnti}`);
  await browser.close();
})();
