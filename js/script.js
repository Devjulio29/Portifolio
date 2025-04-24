function menuShow(){
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")){
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "assets/img/icons/img/icons/menu-4-512.png"; 
    } else{
        menuMobile.classList.add("open");
        document.querySelector(".icon").scr ="assets/img/icons/img/icons/menu-4-512.png"
    }
}