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
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  //the request will be using JSON format
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  //send the request and convert the data to JSON format
  xhr.send(
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  );
});
