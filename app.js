const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputDiv = document.querySelector("#output");

checkButton.addEventListener("click",checkBirthdateIsLucky);

function checkBirthdateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum,luckyNumber.value);
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum=0;
    for(index=0;index<dob.length;index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputDiv.innerText="Yay!! your birthday is lucky🥳"
    }
    else{
        outputDiv.innerText="Ohh no!! your birthday is not so lucky😒"
    }
}