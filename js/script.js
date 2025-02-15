(function(global) {

  // The 'dc' object we created in dc.js
  var dc = global.$dc || {};

  // STEP 0: List possible short_names
  var categories = [
    "L",   // Lunch
    "D",   // Dinner
    "S",   // Sushi
    "SP",  // Specials
    "BR"   // Breakfast
  ];

  // Helper: choose random element from an array
  function chooseRandom(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  // STEP 1: Pick a random short_name
  var randomShortName = chooseRandom(categories);

  // STEP 2: Must wrap it in quotes to produce a string literal, e.g. "'L'"
  // so that the snippet's onclick="$dc.loadMenuItems({{randomCategoryShortName}})"
  // becomes $dc.loadMenuItems('L');
  dc.randomCategoryShortName = "'" + randomShortName + "'";

  // For debugging:
  console.log("Chosen random category: " + randomShortName);

  // Expose updated 'dc' to the global scope
  global.$dc = dc;

})(window);
