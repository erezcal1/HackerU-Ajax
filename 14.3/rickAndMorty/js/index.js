window.addEventListener("load", async () => {
  try {
    let data = await axios.get("https://rickandmortyapi.com/api/character");
    let containerStr = "";
    for (let item of data.data.results) {
      containerStr += `
      <div class="col">
        <div class="card">
          <img src="${item.image}" class="card-img-top" alt="..." style="width: 200px">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.location.name}</p>
          </div>
        </div>
      </div>
      `;
    }
    document.getElementById("card_Container").innerHTML = containerStr;
  } catch (error) {
    console.log(error);
  }
});
