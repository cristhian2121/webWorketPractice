onmessage = function (event) {
  console.log("Mensaje que recibe el worket", event.data);
  var response = parseInt(event.data) * 2;
  postMessage(response);
};
