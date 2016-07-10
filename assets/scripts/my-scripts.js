// initialize order count (Worksheet Part 1: Step 9a)
var orderCount = 0;
/* array of drink objects (Worksheet Part 2: Step 1)
   each object has a value key with a camelCase drink name value 
   and a label key with the display text for the drink */

// loadMenu function to add the drinks from the array to the page (Worksheet Part 2: Step 2)


/* submitOrder function that increments orderCount, gathers and displays order details.
   (Worksheet Part 1: Step 3) */
var submitOrder = function () {
    var orderName = "Tonya"//$("#order-form-input").val();
    console.log(orderName);
    var drinkName = $("input[type='radio']:checked").val();
  // only add orders if there is room left on the order queue (Worksheet Part 1: Step 9g)

  // add order display (Worksheet Part 1: Step 7)
$("#order-details").append("<h1>" + orderName +"would like a"+ drinkName+ "</h1>");
}
  // call funciton to update drink order count (Worksheet Part 1: Step 9e)


// updateOrderCount function with a parameter passed to it (Worksheet Part 1: Step 9c)


$(document).ready(function() {
  // call loadMenu function (Worksheet Part 2: Step 2d)

  $('#order-btn').click(function() {
      submitOrder();
    // call submitOrder function when order button is clicked (Worksheet Part 1: Step 5b)
  });
});