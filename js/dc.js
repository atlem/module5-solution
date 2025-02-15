(function(global) {

  var dc = {};

  // File paths
  var homeHtml = "snippets/home-snippet.html";

  // Convenience function to set innerHTML for a selector
  var insertHtml = function(selector, html) {
    document.querySelector(selector).innerHTML = html;
  };

  // Show a loading image (you can replace with your own if desired)
  var showLoading = function(selector) {
    var html = "<div class='text-center'><img src='images/ajax-loader.gif' alt='loading'></div>";
    insertHtml(selector, html);
  };

  // Replaces {{propName}} in 'string' with 'propValue'
  var insertProperty = function(string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    var newString = string.replace(new RegExp(propToReplace, "g"), propValue);
    return newString;
  };

  // Load the home view, replacing the placeholder with a random category short name.
  dc.loadHome = function() {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      homeHtml,
      function(responseText) {
        // Replace the placeholder with the actual random category short name.
        responseText = insertProperty(responseText, "randomCategoryShortName", dc.randomCategoryShortName);
        insertHtml("#main-content", responseText);
      },
      false);
  };

  // For demo: load menu categories
  dc.loadMenuCategories = function() {
    alert("You clicked Menu. (Demo function: would normally load categories view.)");
  };

  // Load a single category's menu items.
  dc.loadMenuItems = function(categoryShortName) {
    alert("Loading menu items for category: " + categoryShortName);
  };

  // Expose dc to the global scope.
  global.$dc = dc;

  // On initial page load, load the home view.
  document.addEventListener("DOMContentLoaded", function(event) {
    dc.loadHome();
  });

})(window);
