
// Deposit input add.
function getInput(inputId){
    const inputValue= document.getElementById(inputId)
    const inputValueText=inputValue.value;
     const inputAmount =parseFloat(inputValueText)

    //  clear input
     inputValue.value =''
     return inputAmount;


}

// deposit withdraw  addition

function getDepositWithdraw(inputId,depositAmount){
    const depositWithdraw=document.getElementById(inputId);
    const depositWithdrawText =depositWithdraw.innerText;
    const depositWithdrawAmount = parseFloat(depositWithdrawText);

    const depositWithdrawAmountTotal =depositWithdrawAmount + depositAmount ;
       depositWithdraw.innerText =depositWithdrawAmountTotal;
       return depositWithdraw

}

// for total balance validation

function getcurrentBalance(){
     const previousBal= document.getElementById('total-balance');
   const previousBalText=previousBal.innerText;
   const totalPreviousBal = parseFloat(previousBalText);
   return totalPreviousBal;
}



function updateBal(inputId,isAdd){
const previousBal= document.getElementById('total-balance');


 const totalPreviousBal =getcurrentBalance()

     if(isAdd ==true){
  const totalBal= totalPreviousBal +inputId 
     previousBal.innerText = totalBal
  
     }else{
         const totalBal= totalPreviousBal -inputId 
     previousBal.innerText = totalBal
  
     }
}




// for deposit btn

document.getElementById('deposit-btn').addEventListener('click',function(){
 const depositAmount=  getInput('deposit-input')
  if(depositAmount>0){
    getDepositWithdraw('deposit-total',depositAmount);
  }else{
    alert("Give positive number")
  }

    // update balance
    updateBal(depositAmount,true)
})

// withdraw btn
document.getElementById('withdraw-btn').addEventListener('click',function(){
    
  const withdrawAmount=  getInput('withdraw-input')
  
    const currentBalance = getcurrentBalance()
if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
   getDepositWithdraw('total-withdraw', withdrawAmount)
    updateBal(withdrawAmount ,false)
}


   
})