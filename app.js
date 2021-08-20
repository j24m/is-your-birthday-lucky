const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message")

checkButton.addEventListener("click", isBirthdateLucky);

function isBirthdateLucky (){
    const dob= dateOfBirth.value;
    const sum= calculateSum(dob);
    compareValues(sum,luckyNumber.value);
}

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        errorMessage.innerText="Yipiiee!! your birthday is lucky!!🤩"
    }
    else{
        errorMessage.innerText = "Ohh nooo!! your birthday is not lucky!!🙁"
    }
}

function calculateSum(dob){
  dob= dob.replaceAll("-","");
  let sum=0;
  for(let index=0; index<dob.length;index++){
      sum = sum+ Number(dob.charAt(index));
  }
  return sum;
}