function colorChange(event){
    let color=event.target.value
    let current=document.querySelector('#item')
    current.removeAttribute("class")
    current.setAttribute("class",`bg-${color}`)
}