function setMode(){
    const elBody= document.querySelector("body");
    const btn= document.querySelector("button");
    if(elBody.classList.contains("light")){
        elBody.classList.remove("light");
        elBody.classList.add("dark");
        btn.innerHTML("Light Mode")
    }
    else{
        elBody.classList.remove("dark");
        elBody.classList.add("light");
        btn.innerHTML("Dark Mode")

    }
}