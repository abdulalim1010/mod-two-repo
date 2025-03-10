const posthandler = () => {

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
    displayPpst(data)
  })




}
const displayPpst = (posts) => {
  const postCon = document.getElementById("postContainer");
  for (const post of posts) {
    const div = document.createElement("div");
    div.innerHTML = `<h1>alim</h1>
    <p>post</p>
    <btn>read morae</btn>`;
    postCon.appendChild(div)


    }
  
}

posthandler()
