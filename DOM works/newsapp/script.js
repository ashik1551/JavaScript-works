const key = "bafb48fab36041da803f20afd507926b"
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`

getData(url)
async function getData(url) {
    let response = await fetch(url)
    let data = await response.json()
    displayNews(data)
}


const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
displayCategory(categories)

function displayCategory(categories) {
    categorydata = ``
    document.querySelector("drop")

    for (let c of categories) {
        categorydata += `
            <button class="btn btn-outline-info rounded" value="${c}" onclick="categoryNews(event)">${c.toUpperCase()}</button>
        `
    }
    document.querySelector("#drop").innerHTML = categorydata
}

function displayNews(news) {
    let htmldata = ``
    for (let n of news.articles) {
        htmldata += `<div class="col-6 my-3">
                <div class="card text-bg-dark">
                    <img src="${n.urlToImage}" class="card-img" alt="...">
                    <div class="card bg-dark text-light">
                        <h5 class="card-title">${n.title}</h5>
                        <p class="card-text">${n.author}</p>
                        <p class="card-text"><small>${n.publishedAt}</small></p>
                    </div>
                </div>
            </div>`
    }

    document.querySelector("#root").innerHTML = htmldata
}

function categoryNews(event) {
    let categoryname = event.target.value
    let cat = `&category=${categoryname}`
    getData((url + cat))
}