window.addEventListener("load", async () => {
  try {
    let name = document.getElementById("name").value;
    let dataToSend = "https://api.agify.io/?name=" + name;
    let data = await axios.get(dataToSend);
    displayCards(data.data);
  } catch (error) {
    console.log(error);
  }
});

const displayCards = (data) => {
  let containerStr = "";
  containerStr += `
            <h1>Name: ${data.name}</h1>
            <h2>Age: ${data.age}</h2>
            <h3>Count: ${data.count}</h3>
      `;
  document.getElementById("card_Container").innerHTML = containerStr;
};
