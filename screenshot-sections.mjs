import { chromium } from 'playwright';

const sections = [
  { name: 'hero', selector: 'section:first-of-type' },
  { name: 'services', selector: '#services' },
  { name: 'cases', selector: '#cases' },
  { name: 'testimonials', selector: '#testimonials' },
  { name: 'process', selector: '#process' },
  { name: 'contact', selector: '#contact' },
];

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  
  await page.goto('http://localhost:3003', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  // Scroll through entire page first to trigger all animations
  await page.evaluate(async () => {
    const scrollStep = 300;
    const delay = ms => new Promise(r => setTimeout(r, ms));
    for (let y = 0; y < document.body.scrollHeight; y += scrollStep) {
      window.scrollTo(0, y);
      await delay(100);
    }
    window.scrollTo(0, 0);
    await delay(500);
  });
  
  // Screenshot each section
  for (const { name, selector } of sections) {
    try {
      const element = await page.$(selector);
      if (element) {
        await element.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await page.screenshot({ path: `/tmp/section-${name}.png` });
        console.log(`✅ ${name}`);
      }
    } catch (e) {
      console.log(`❌ ${name}: ${e.message}`);
    }
  }
  
  // Full page after all animations triggered
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/full-animated.png', fullPage: true });
  console.log('✅ full-page');
  
  await browser.close();
}

main().catch(console.error);
