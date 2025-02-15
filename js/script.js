(function () {
  // STEP 0: Define an array of category objects.
  // In a real application, these might come from the server.
  var categories = [
    { short_name: 'L' },  // e.g., Lunch
    { short_name: 'D' },  // e.g., Dinner
    { short_name: 'S' },  // e.g., Sushi
    { short_name: 'SP' }, // e.g., Specials (you can include it too)
    { short_name: 'BR' }  // e.g., Breakfast
  ];

  // STEP 1: Function to pick a random element from the array.
  function getRandomCategory(categoriesArray) {
    var randomIndex = Math.floor(Math.random() * categoriesArray.length);
    return categoriesArray[randomIndex];
  }

  // STEP 2: Get the random category's short_name.
  var randomCategory = getRandomCategory(categories);
  var selectedShortName = randomCategory.short_name;

  // STEP 3: Set the global property that will be used in the home snippet.
  // The value must be a string literal (including quotes) so that when the template is rendered,
  // it appears as, for example, 'L' inside the function call.
  window.randomCategoryShortName = "'" + selectedShortName + "'";

  // STEP 4: Optionally, log the chosen value for debugging.
  console.log("Random category selected:", selectedShortName);
})();
