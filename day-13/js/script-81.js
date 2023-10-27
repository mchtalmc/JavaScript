

const hourEl= document.querySelector("#clock li:nth-child(1");
const secondEl= document.querySelector("#clock li:nth-child(2");
const minuteEl= document.querySelector("#clock li:nth-child(3");

const setClock = () => {  

    const dateTime= new Date();
    const hour= dateTime.getHours();
    const minutes= dateTime.getMinutes();
    const seconds= dateTime.getSeconds();

    hourEl.innerHTML= hour;
    minuteEl.innerHTML= String(minutes).length == 1 ? `0${minutes}` : minutes;

    secondEl.classList.toggle("hidden");

};

setInterval(setClock,1000);
