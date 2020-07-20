onmessage = function (event) {
  console.log("Mensaje que recibe el worket", event.data);
  postMessage(`¿Como estas?`);
};
