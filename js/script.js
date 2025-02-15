(function(global) {

  // Access the dc object defined in dc.js (or create one if it doesn't exist)
  var dc = global.$dc || {};

  // STEP 0: Define an array of possible category short names.
  var categories = ["L", "D", "S", "SP", "BR"];

  // STEP 1: Helper function to choose a random element from an array.
  function chooseRandom(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  // STEP 2: Choose a random short name.
  var randomShortName = chooseRandom(categories);

  // STEP 3: Wrap the short name in quotes so that when inserted it becomes a string literal.
  dc.randomCategoryShortName = "'" + randomShortName + "'";

  // Debug: log the chosen category.
  console.log("Random category selected:", randomShortName);

  // Expose updated dc object to global scope.
  global.$dc = dc;

})(window);
