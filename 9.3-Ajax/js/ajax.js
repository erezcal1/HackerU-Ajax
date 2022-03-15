window.addEventListener("load", () => {
  let xhr = new XMLHttpRequest();

  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status http status codes
  //wait for the response
  xhr.onreadystatechange = () => {
    //check if the request and response is successful
    if (xhr.readyState == XMLHttpRequest.DONE) {
      if (xhr.status == 200 || xhr.status == 201) {
        console.log("xhr.responseText", xhr.responseText);
        let obj = JSON.parse(xhr.responseText);
        console.log("obj", obj);
      }
    }
  };
  //choose where to send the request and what the method is
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  //send the request
  xhr.send();
});
