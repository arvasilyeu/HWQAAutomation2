describe('check UI behaviour', function () {
    before('log in', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut')
        await $('#login').setValue('walker@jw.com')
        await $('#password').setValue('password')
        await $('button').click()
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 15000 })
    })
    context('check sidebar items behaviour', async function () {
        it('check sidebar items background color', async function () {
            const sidebarItems = await $$('#first-nav-block > li')
            for (const item of sidebarItems) {
                await item.moveTo(5, 5)
                const itemColor = await item.getCSSProperty('background-color')
                if (itemColor.value == 'rgba(255,0,0,1)') {
                    throw new Error(`The menu Item "${await item.getText()}" has wrong color!`)
                }
            }
        })
    })
});