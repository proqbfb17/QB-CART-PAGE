function handleItemChangeFunction(item, isIncrease){
    const itemInput = document.getElementById(item + "-count");
    const itemCount = parseInt(itemInput.value);
    let newitemCount = itemCount;

    if (isIncrease == true){
        newitemCount =  itemCount + 1;
    }
    if (isIncrease == false && itemCount > 0){
        newitemCount  = itemCount - 1;
    }
    itemInput.value = newitemCount;
    let itemTotal;
    if(item == "laptop"){
        itemTotal = newitemCount * 800;
    }
    else if(item == "phone"){
        itemTotal = newitemCount * 900;
    }
    document.getElementById(item +'-total').innerText = itemTotal;
    handleFunctionCheckout();
}

function handleFunctionCheckout(){
    const laptopCount = document.getElementById('laptop-count').value;
    const phoneCount = document.getElementById('phone-count').value;

    const totalPrice = parseInt(laptopCount) * 800 + parseInt(phoneCount) * 900;

    document.getElementById('total-price').innerText = totalPrice;

    const tax = totalPrice * 0.1;
    document.getElementById('tax-total').innerText = tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;

}



































// function handleItemChangeFunction(parameterhandleItemChangeFunction, isIncrease){
//     const itemInput = document.getElementById(parameterhandleItemChangeFunction);
//     const itemCount = parseInt(itemInput.value);

//     if(isIncrease == true){
//         itemInput.value = itemCount + 1;
//     }
//     else if(isIncrease == false){
//         itemInput.value = itemCount - 1;
//     }
// }
