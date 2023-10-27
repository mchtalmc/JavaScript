

const getLastPrice = (price, tax , discount) => {
    price ??= 0;
    tax ??= 0;
    discount ??= 0;


    if(discount<=0){
        tax =0;
    }
    if(price>1500){
        discount+=10;
    }
    
    const totalTax= price * tax /100;
    const totalDiscount= price * discount /100;

    const result = price + totalTax - totalDiscount; 

    return result;
}

const onGetLastPriceClick = () =>{
    const txtPrice= document.querySelector("#txtPrice");
    const price= Number(txtPrice.value);
    const txtTax= document.querySelector("#txtTax");
    const tax= Number(txtTax.value);
    const txtDiscount= document.querySelector("#txtDiscount");
    const discount= Number(txtDiscount.value);

    getLastPrice(price,tax,discount);
}