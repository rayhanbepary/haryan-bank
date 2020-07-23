//Login Button handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction");
    transactionArea.style.display = "block";
})

//Deposit Button handler
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click",function(){

    const depositNumber = getInputNumber("deposit-amount");
    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalance",depositNumber);
    document.getElementById("deposit-amount").value = "";
})
//withdraw button handler
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click",function(){

    const withdrawNumber = getInputNumber("withdraw-amount"); 
    updateSpanText("currentWithdraw",withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdraw-amount").value = "";
})


function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}
function updateSpanText(id,addedNumber){
    const currentAmount = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentAmount);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerHTML=totalAmount;
}
