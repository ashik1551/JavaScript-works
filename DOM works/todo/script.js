fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>displayTask(data))

function displayTask(data){
    let div=document.querySelector("#root")
    let htmldata=``
    for(let ch of data){
        let task
        if(ch.completed){
            task="Completed"
        }
        else{
            task="Not Completed"
        }
        htmldata+=`<div class="col-4 my-2">
                        <div class="card" style="width: 22rem;">
                            <div class="card-body">
                                <h6 class="card-subtitle mb-2 text-body-secondary">Title : ${ch.title}</h6>
                                <p class="card-text">Completed : ${task}</p>
                            </div>
                        </div>
                    </div>`
    }
    div.innerHTML=htmldata
}