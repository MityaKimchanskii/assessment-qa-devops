
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1000)
})

test(`Check that clicking the Draw button displays the div with id = “choices”`, async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    const displayed = await driver.findElement(By.id('choices')).isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test(`Check that clicking the Draw button displays the div with id = “player-id”`, async () => {
    await driver.findElement(By.className('draw')).click()
    await driver.sleep(1000)
    await driver.findElement(By.id('bot-btn')).click()
    await driver.sleep(1000)
    const displayed2 = await driver.findElement(By.id('player-id')).isDisplayed()
    expect(displayed2).toBe(true)
    await driver.sleep(2000)
})

