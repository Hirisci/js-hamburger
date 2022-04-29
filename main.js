const hamburgerMenu= document.getElementsByClassName("hamburger-menu")[0];

const btnOpen= document.getElementById("open-menu");
btnOpen.addEventListener("click", 
    function() {
        hamburgerMenu.style = "display: block";
    }
); 

const btnClose= document.getElementById("close-menu");
btnClose.addEventListener('click', 
    function(){
        hamburgerMenu.style = "display: none";
    }
);

