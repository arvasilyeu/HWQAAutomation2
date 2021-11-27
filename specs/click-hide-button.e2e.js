describe('Check app', function () {
    before('log in', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut')
        await $('#login').setValue('walker@jw.com')
        await $('#password').setValue('password')
        await $('button').click()
        await $('#spinner').waitForDisplayed({ reverse: true, timeout: 15000 })
    })
    context('click hide button', async function () {
        it('remove element and accept assert', async function () {
            await browser.execute( function (el) {
                el.remove()
            }, await $('header'))
            await $('//*[text()="alert"]').click()
            await browser.acceptAlert()
        })
    })
});