fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>displayPost(data))

function displayPost(data){
    let div=document.querySelector("#root")
    let htmldata=``
    for(let ch of data){
        htmldata+=`<div class="col-4 my-2">
                        <div class="card" style="width: 22rem;">
                            <div class="card-body">
                                <h6 class="card-subtitle mb-2 text-body-secondary">Title : ${ch.title}</h6>
                                <p class="card-text">Description : ${ch.body}</p>
                            </div>
                        </div>
                    </div>`
    }
    div.innerHTML=htmldata
}