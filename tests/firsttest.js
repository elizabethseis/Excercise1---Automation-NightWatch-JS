module.exports={
    'Excercise 1'(browser){
        const joinButton= '.nav__button-tertiary[href="https://www.linkedin.com/start/join?trk=guest_homepage-basic_nav-header-join"]'
        const text1='h2.title'
        const joinButton1='.fill-v2[id="submit-join-form-text"]'
        const name= '#first-name'
        const lastName= '#last-name'
        browser
        .url('https://www.linkedin.com/?originalSubdomain=mx')
        .waitForElementVisible('.nav__button-secondary')
        .click(joinButton)
        .waitForElementVisible('.fill-v2')
        browser.assert.containsText(text1,'Make the most of your professional life')
        .click(joinButton1)
        browser.assert.containsText('p:nth-child(1) > strong:nth-child(1)','Please enter your first name','Name required validation is displayed')
        .setValue(name, 'ELIZABETH')
        .click(joinButton1)
        browser.assert.containsText('p:nth-child(1) > strong:nth-child(1)','Please enter your last name', 'Last name required validation is displayed')
        .setValue(lastName, 'PEREZ')
        .click(joinButton1)
        browser.assert.containsText('p:nth-child(1) > strong:nth-child(1)','Please enter your email address', 'Email required validation is displayed')
        
    }
}