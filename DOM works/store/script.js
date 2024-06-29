
// fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>displayProducts(data))

getData()
async function getData(){
    let response=await fetch("https://fakestoreapi.com/products")
    let data=await response.json()
    displayProducts(data)
}

function displayProducts(products){
    let htmldata=``

    for(let p of products){
        htmldata+=`<div class="col-4">
                        <div class="card" style="width: 18rem;">
                            <img src="${p.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${p.title}</h5>
                                <p class="card-text">${p.description}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>`
    }

    document.querySelector("#root").innerHTML=htmldata
}
