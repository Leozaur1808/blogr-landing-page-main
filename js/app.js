const dropdown = document.getElementsByClassName("dropdown");

const menubutton = document.getElementById("menubutton");
const menu = document.getElementById("menu");

function activateMobileMenu(){
    if(menu.classList.contains("hidden")){
        menubutton.src = "images/icon-close.svg";
        menu.classList.remove("hidden");
    } else {
        menubutton.src = "images/icon-hamburger.svg";
        menu.classList.add("hidden");
    }
}

menubutton.addEventListener("click", activateMobileMenu);

function disableOthers(){
    for (let index = 0; index < dropdown.length; index++) {
        const element = dropdown[index];
        var collapse =element.children[1];
        collapse.classList.add("hidden");
    }
}



for (let index = 0; index < dropdown.length; index++) {
    const element = dropdown[index];
    var btn = element.children[0];
    btn.addEventListener("click", function(event){
        var collapse = event.target.parentElement.children[1];
        if(collapse.classList.contains("hidden")){
            disableOthers();
            collapse.classList.remove("hidden");
        } else {
            disableOthers();
            collapse.classList.add("hidden");
        }
    })
}


