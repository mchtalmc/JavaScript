function showSalary(){
       let txtSalary= document.querySelector("#txtSalary");
       const elResult= document.querySelector("#result");     
       const elStatus= document.querySelector("input[name='status']:checked");

       let salary= Number(txtSalary.value);
       const status= elStatus.value;
       


       salary = status == "retired" ? salary *0.9 : salary *0.95;
       //Yukarida ki ternary ifadesi asagidaki gibi if ile de yapilabilir.
       /*
       if(status=="retired"){
           salary *0.9;
       }
       else{
           salary *0.95;
       }
       */

       elResult.innerHTML= `Your salary is <u>${salary}</u>`;
    
}