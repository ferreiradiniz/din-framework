/**
 * @param {
     [type]
 }

 * @return {[type]}
 */
describe('dinFramework teste', function() {

    beforeAll(function() {
        browser.get('http://localhost:7203');
    });

    xit('Existe uma tag <din-framework>', function() {
        var dinframework_element = element(By.tagName('din-framework'));

        expect(dinframework_element.isPresent()).toBe(true);
    });

    xit('should be title "Whitewater Adventure"', function() {

        var title = element(by.css('.dinf-logo-title'));

        expect(title.getText()).toEqual('Whitewater Adventure');

    });

    it('testing', function() {
        // element.all(by.css('.dinf-title-bar')).then(function(elements) {
        //     console.log(elements[0]);
        // });
        var count = element.all(by.css('.dinf-title-bar'));
        console.log('count: ' + count.css('.dinf-logo-area'));
    });
});
