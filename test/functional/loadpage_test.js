Feature('Example test');

Scenario('User can view the main page', (I) => {
    I.amOnPage('/');
    I.wait(2);
    I.seeElement('#output');
    I.seeElement('#username');
    I.fillField('#username', 'abigail.beets@workiva.com');
});
