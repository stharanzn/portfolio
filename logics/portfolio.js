const proj = document.getElementsByClassName("projectsHolder");

function sneakCard(i){
    proj.children[i].classList.add("sneakPeek")
    proj.children[i].classList.remove("expand")
}

function expandCard(i){
    proj.children[i].classList.add("expand")
    proj.children[i].classList.remove("sneakPeek")
}

function defaultCard(i){
    proj.children[i].classList.remove("sneakPeek")
    proj.children[i].classList.remove("expand")
}


// proj.addEventListener('mouseover', sneakCard(ii))
// proj.addEventListener('mousedown', expandCard(ii))
// proj.addEventListener('mouseout', defaultCard(ii))

