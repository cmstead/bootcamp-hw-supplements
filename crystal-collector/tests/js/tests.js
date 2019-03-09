/*
The tests below are intended to help guide you toward a solution for the
Crystal Collector game. Read the description of the test to gain an understanding
of what each test is expecting from the described function. Your functions are working
correctly when all tests pass.
*/

// Function: getRandomCrystalValue

test('getRandomCrystalValue function returns a random value', function (assert) {
    assert.equal(testHelpers.returnsRandomValue(getRandomCrystalValue), true);
});

test('getRandomCrystalValue function returns an integer', function (assert) {
    var crystalValue = getRandomCrystalValue();

    assert.equal(testHelpers.isInteger(crystalValue), true);
});

// Function: getNewCrystalValues
// Hint: you can use getRandomCrystalValue to get a new value for each array element

test('getNewCrystalValues shoudl fill crystalValues array with new values', function (assert) {
    crystalValues = [-1, -1, -1, -1];

    getNewCrystalValues();

    assert.equal(crystalValues[0] > 0, true);
    assert.equal(crystalValues[1] > 0, true);
    assert.equal(crystalValues[2] > 0, true);
    assert.equal(crystalValues[3] > 0, true);
});

// Function: getRandomHiddenScore
// Idea: is there duplicated functionality between getRandomHiddenScore and getRandomCrystalValue?

test('getRandomHiddenScore function returns a random value', function (assert) {
    assert.equal(testHelpers.returnsRandomValue(getRandomHiddenScore), true);
});

test('getRandomHiddenScore function returns an integer', function (assert) {
    var hiddenScore = getRandomHiddenScore();

    assert.equal(testHelpers.isInteger(hiddenScore), true);
});

// Function: resetGame

test('resetGame function sets player score back to 0', function (assert) {
    playerScore = 5;

    resetGame();

    assert.equal(playerScore, 0);
});

// Hint: getRandomHiddenScore might help here

test('resetGame function chooses a new hidden score', function(assert) {
    hiddenScore = -1; // If a new score is chosen, it will always be positive

    resetGame();

    assert.equal(hiddenScore > 0, true);
});

// Function: addPointsToScore

test('addPointsToScore function adds a number to the existing playerScore', function (assert) {
    playerScore = 9;

    addPointsToScore(7);

    assert.equal(playerScore, 16);
});

// Function: scoresAreEqual

test('scoresAreEqual function compares playerScore and hiddenScore and returns true if they are equal', function (assert) {
    playerScore = 7;
    hiddenScore = 7;

    assert.equal(scoresAreEqual(), true);
});

test('scoresAreEqual function compares playerScore and hiddenScore and returns false if they are not equal', function (assert) {
    playerScore = 7;
    hiddenScore = 11;

    assert.equal(scoresAreEqual(), false);
});

// Function: playerScoreIsTooHigh

test('playerScoreIsTooHigh compares playerScore and hiddenScore and returns true if playerScore is greater than hiddenScore', function(assert) {
    playerScore = 10;
    hiddenScore = 9;

    assert.equal(playerScoreIsTooHigh(), true);
});

test('playerScoreIsTooHigh compares playerScore and hiddenScore and returns false if playerScore is not greater than hiddenScore', function(assert) {
    playerScore = 13;
    hiddenScore = 20;

    assert.equal(playerScoreIsTooHigh(), false);
});

// Function: checkScoreAndUpdateGameState

test('checkScoreAndUpdateGameState changes nothing if playerScore is less than hiddenScore', function (assert) {
    playerScore = 10;
    hiddenScore = 11;
    wins = 0;
    losses = 0;

    checkScoreAndUpdateGameState();

    assert.equal(playerScore, 10);
    assert.equal(hiddenScore, 11);
    assert.equal(wins, 0);
    assert.equal(losses, 0);
});

test('checkScoreAndUpdateGameState resets player score, updates hidden score and adds 1 to wins when player gets exact value', function (assert) {
    playerScore = 15;
    hiddenScore = 15;
    wins = 0;
    losses = 0;

    checkScoreAndUpdateGameState();

    assert.equal(playerScore, 0);
    assert.equal(hiddenScore !== 15, true);
    assert.equal(wins, 1);
    assert.equal(losses, 0);
});

test('checkScoreAndUpdateGameState resets player score, updates hidden score and adds 1 to losses when player exceeds hiddenScore', function (assert) {
    playerScore = 17;
    hiddenScore = 12;
    wins = 0;
    losses = 0;

    checkScoreAndUpdateGameState();

    assert.equal(playerScore, 0);
    assert.equal(hiddenScore !== 12, true);
    assert.equal(wins, 0);
    assert.equal(losses, 1);
});

