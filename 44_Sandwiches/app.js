"use strict";
// Sandwiches
function Sandwiches(item) {
    console.log("\nMaking your sandwich with: \n");
    item.forEach(element => console.log('-' + element));
}
Sandwiches(['Cheese', 'ketchup', 'Mayoneese']);
Sandwiches(['butter', 'bacon', 'chicken']);
Sandwiches(['ham', 'lattuce', 'cheese']);
