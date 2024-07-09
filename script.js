
var settingsmenu=document.querySelector(".settings-menu");
var darkbtn=document.querySelector("#dark-btn");


function settingsMenuToggle(){
settingsmenu.classList.toggle("settings-menu-height");   
}

darkbtn.addEventListener("click",()=>{
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light")
    {
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");   
    }
})



if(localStorage.getItem("theme")=="light")
    {
        darkbtn.classList.remove("dark-btn-on");
        document.body.classList.remove("dark-theme");
    }
else if(localStorage.getItem("theme")=="dark"){
    darkbtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    
    localStorage.setItem("theme","light");
}
 