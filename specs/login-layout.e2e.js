describe('Check app', function () {
    it('should login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 15000 });
        const title = await browser.getTitle();
        if (title !== 'Report portal') {
            throw new Error('You don`t login into system!!!')
        }
    });
    it('check items background color', async function () {
        const sidebarItems = await $$('#first-nav-block > li')
        for (const item of sidebarItems) {
            await item.moveTo(5, 5)
            const color = await item.getCSSProperty('background-color')
            if (color.value == 'rgba(255,0,0,1)') {
                throw new Error(`The menu Item "${await item.getText()}" has wrong color!`)
            }
        }
    })    
});