var Qunit = window.QUnit;
var test = QUnit.test.bind(Qunit);

var testHelpers = (function () {
    function isInteger(value) {
        return typeof value === 'number'
            && Math.floor(value) === value;
    }
    
    function returnsRandomValue(functionUnderTest) {
        var firstValue = functionUnderTest();
        var secondValue = functionUnderTest();
        var maxAttempts = 20;
    
        while (maxAttempts > 0 && firstValue === secondValue) {
            secondValue = functionUnderTest();
            maxAttempts --;
        }

        return firstValue !== secondValue;
    }
    
    return {
        isInteger: isInteger,
        returnsRandomValue: returnsRandomValue
    };    
})();