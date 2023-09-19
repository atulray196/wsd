// Get the button element
var button = document.getElementById("fetch-data");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Open the request
  xhr.open(
    "GET",
    "https://api.apilayer.com/exchangerates_data/latest?base=USD"
  );

  // Send the request
  xhr.send();

  // Handle the response
  xhr.onload = function () {
    if (xhr.status === 200) {
      // The request was successful
      console.log(xhr.responseText);
    } else {
      // The request failed
      console.error(xhr.status);
    }
  };
});
