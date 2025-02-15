(function(global) {

var dc = {};

// The home HTML snippet file path
var homeHtml = "snippets/home-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function(selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function(selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function(string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  var newString =
    string.replace(new RegExp(propToReplace, "g"), propValue);
  return newString;
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

  // On first load, show home view
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText) {

      // TODO: STEP 1: In script.js, we pick a random short_name (like 'L', 'D', 'S', etc.)
      // We'll store it in a variable: e.g. dc.randomCategoryShortName = "'L'";
      // Then we insert it below.

      // STEP 2: Insert the randomCategoryShortName into home-snippet
      // Replace {{randomCategoryShortName}} in the snippet
      responseText =
        insertProperty(responseText,
                       "randomCategoryShortName",
                       dc.randomCategoryShortName);

      // Load the snippet into #main-content
      insertHtml("#main-content", responseText);
    },
    false); // false -> get snippet as plain text
});

// Load the menu categories view
dc.loadMenuCategories = function() {
  alert("You clicked Menu (demo). Normally loads categories-snippet.");
};

// Load a single category's menu items
dc.loadMenuItems = function(categoryShortName) {
  alert("You clicked category: " + categoryShortName +
        "\n(Normally, I'd load that category's items here.)");
};

// Expose 'dc' to the global scope
global.$dc = dc;

})(window);

