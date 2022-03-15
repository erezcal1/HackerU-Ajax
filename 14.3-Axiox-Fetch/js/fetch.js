//try + catch = using async/await
window.addEventListener("load", async () => {
  try {
    let data_From_Server = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    ).then((res) => res.json());
    console.log(data_From_Server);
    //class work
    // document.querySelector("#card_Title").innerHTML = data_From_Server.title;
    // document.querySelector("#card_Id").innerHTML = data_From_Server.id;
    // document.querySelector("#card_Text").innerHTML = data_From_Server.body;
    //end of class work
  } catch (err) {
    console.error("error in fetching data", err);
  }
});
