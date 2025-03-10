const handleLoadeMore= () => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
    .then(data => {
      console.log(data)
      displyuser(data)
  })
}
const displyuser = (users) => {
  console.log(users)
}
