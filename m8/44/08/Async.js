async function getList(){
    return functionList()
    .then((list) => await functionDetails())
    .catch((err) => console.log(err))
}