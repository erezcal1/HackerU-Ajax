window.addEventListener("load", async () => {
  try {
    let data = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
});
