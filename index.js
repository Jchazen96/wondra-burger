let burgers = document.getElementById("burgers")

let request = async () => {
    let req = await fetch('http://localhost:3000/burgers')
    let res = await req.json()
    console.log(res)
     res.forEach((element) => {
         let image = document.createElement('img')
         image.setAttribute('src', element.image)
         burgers.appendChild(image)
     })
}


request()



