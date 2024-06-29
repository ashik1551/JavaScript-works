// fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>displayUsers(data))

getData()
async function getData(){
    let response=await fetch("https://jsonplaceholder.typicode.com/users")
    let data=await response.json()
    displayUsers(data)
}

function displayUsers(data){
    let div=document.querySelector("#root")
    let htmldata=``
    for(let ch of data){
        htmldata+=`<div class="col-4 my-2">
                        <div class="card" style="width: 22rem;">
                            <div class="card-body">
                                <h5 class="card-title">${ch.name}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Email : ${ch.email}</h6>
                                <p class="card-text">Website : ${ch.website}</p>
                                <p class="card-text">Phone : ${ch.phone}</p>
                            </div>
                        </div>
                    </div>`
    }
    div.innerHTML=htmldata
}