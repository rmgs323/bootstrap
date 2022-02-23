const links = document.getElementsByClassName("li");


for(let i= 0; i<links.length; i++){

    links[i].onclick = function(){

        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active","");
        this.className += " active";
    

    }

}