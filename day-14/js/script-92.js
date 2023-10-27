
import  showAlert, {showConfirm} from "./message.js";

document.getElementById("btnAlert").addEventListener("click", (e) => {

    showAlert("Hello Module")


});

document.getElementById("btnConfirm").addEventListener("click", (e) => {

    showConfirm("Hello Module")


})