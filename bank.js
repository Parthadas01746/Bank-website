// set withdraw and total balance part
document.getElementById("deposite-btn").addEventListener("click", function(){
    
    var depositeField = document.getElementById("deposit-input");
    var depositeinput = parseFloat(depositeField.value);
    
    var pastDeposit = document.getElementById("deposit-output");
    var currentDipositAmount =parseFloat(pastDeposit.innerText);
    var newdipositTotal = currentDipositAmount + depositeinput;
    pastDeposit.innerText = newdipositTotal;
    depositeField.value = "";
    // total balace
    var balace = document.getElementById("balance-amount");
    var currentBalance =balace.innerText;
    
    
    var newcurrentbalanceAmount = parseFloat(currentBalance) + parseFloat(newdipositTotal);
    balace.innerText = newcurrentbalanceAmount;
    
    
})
// withdraw part calculation and update total balance
document.getElementById("withdraw-btn").addEventListener("click", function(){
   var withdrawInput = document.getElementById("withdraw-input");
   var withdrawInputValue = parseFloat(withdrawInput.value);
   var currentWithdraw = document.getElementById("current-withdraw");
   var currentWithdrawAmount = parseFloat(currentWithdraw.innerText);
   var updatedWithdraw = currentWithdrawAmount + withdrawInputValue;
   currentWithdraw.innerText = updatedWithdraw;
//    updated balance
    var currentBalance = document.getElementById("balance-amount");
    var currentBalanceAmount = parseFloat(currentBalance.innerText);
    var updatedBalance = currentBalanceAmount - updatedWithdraw;
    currentBalance.innerText = updatedBalance;
    withdrawInput.value = "";


})