let charsArr = [];

window.addEventListener("load", async () => {
  try {
    let data = await axios.get("https://rickandmortyapi.com/api/character");
    charsArr = data.data.results;
    displayCards();
  } catch (error) {
    console.log(error);
  }
});

const displayCards = () => {
  let containerStr = "";
  for (let item of charsArr) {
    containerStr += `
      <div class="col">
        <div class="card">
          <img src="${item.image}" class="card-img-top" alt="..." style="width: 200px">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.location.name}</p>
            <button type="button" class="btn btn-danger" onclick="handleDelete(${item.id})" >delete Me</button>
          </div>
        </div>
      </div>
      `;
  }
  document.getElementById("card_Container").innerHTML = containerStr;
};

const handleDelete = (id) => {
  charsArr = charsArr.filter((item) => item.id !== id);
  displayCards();
};
