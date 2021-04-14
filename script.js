var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var rateoutput = document.getElementById("rateoutput").value;
var years = document.getElementById("years").value;
var interest = (principal * years * rate) /100;
var yeartobe = (new Date().getFullYear()) + years;
var computeresult = document.getElementById("result");

function slider(intratevalue){
    rateoutput = intratevalue;
    document.getElementById("rateoutput").innerText = rateoutput;
    

}

function compute()
{
    principal = document.getElementById("principal").value;
    if (principal <= 0){
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
    }else{
    rate = document.getElementById("rateoutput").innerText;
    years = document.getElementById("years").value;
    interest = (Number(principal) * Number(years) * Number(rate)) /100;
    yeartobe = (new Date().getFullYear()) + Number(years);
    computeresult = document.getElementById("result");
    var text = 'If you deposit $'+principal+',\n'+
               'at an interest rate of '+rate+'%,\n'+
               'you will receive an amount of $'+interest+'\n'+
               'in the year '+yeartobe.toString()
    computeresult.innerText = text
    }
}
        
