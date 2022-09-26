const dateOfBirth = document.querySelector("#date-of-birth");
const outputText  = document.querySelector("#output-txt");
const luckyNumber = document.querySelector("#lucky-number");
const checkValue = document.querySelector("#check");
checkValue.addEventListener('click',birthdayIsLucky);



function birthdayIsLucky()
{
    var dob = dateOfBirth.value;
    var sum = calculateDofBirth(dob);
    compare(sum , luckyNumber.value);
}



function calculateDofBirth(dob)
{
    dob = dob.replaceAll("-","");
    var sum = 0;
    for(index = 0 ; index<dob.length ; index++)
    {
        sum = sum + Number(dob.charAt(index));
    }    
    return sum;
}


function compare( sum , luckyNumber)
{

    if(sum && luckyNumber)
    {
    if(sum % luckyNumber === 0)
    {
         outputText.innerText = "You are Lucky🚀"        
    } 
    else 
    {
        outputText.innerText = "You are not Lucky😔" 
    }
}else {

    outputText.innerText = "enter both the values !"
}

}

