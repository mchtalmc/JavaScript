

document.getElementById("frmLogin").addEventListener("submit", (e)=>{
e.preventDefault(); // Default olan  SUBMIT eylemi engelliyor.


const txtEmail= document.getElementById("txtEmail");
const txtPassword= document.getElementById("txtPassword");


    try{
        const email= txtEmail.value;
        const password= txtPassword.value;

        if(!email || !isEmailValid(email)) throw new Error("Please enter a valid email");
        if(!password) throw new Error("Please enter your password");  

        e.target.submit();
    }
    catch(err){

    alert(err.message);
    }

});

