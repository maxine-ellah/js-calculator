var display = "0"; //value of display
var displayLength = 8;  //maximum number of decimals before digit

function run1() 
{document.frm.total.value += "1";}

function run2() 
{document.frm.total.value += "2";}

function run3() 
{document.frm.total.value += "3";}

function run4() 
{document.frm.total.value += "4";}

function run5() 
{document.frm.total.value += "5";}

function run6() 
{document.frm.total.value += "6";}

function run7() 
{document.frm.total.value += "7";}

function run8() 
{document.frm.total.value += "8";}

function run9() 
{document.frm.total.value += "9";}

function run0() 
{document.frm.total.value += "0";}

function runDec()     //decimal, used runDec instead of .
{document.frm.total.value += ".";}  

function runplus() 
{document.frm.total.value += "+";}

function runminus() 
{document.frm.total.value += "-";}

function rundivide() 
{document.frm.total.value += "/";}

function runmult() 
{document.frm.total.value += "*";}


//to clear we need to turn the string value into
//an array, pop off the last number, then re-join it.
function runclear() 
{var splitStr = document.frm.total.value.split('')
  splitStr.pop() 
  newStr = splitStr.join('')
  document.frm.total.value = newStr;}

function runclearall() 
{document.frm.total.value = "";}

//The eval() function evaluates or executes an argument. 
//by making a var equal to the evaluation of the string in 
//document.frm.total.value, it makes it equal to the result 
//of the operation.
//the result (evalo) is then assigned as the new value
//stored in evalo.

function evalu()
{
  var evalo = eval(document.frm.total.value) 
  document.frm.total.value = evalo;
}


//HEIDI
//if current length is greater than 8... error message
if(total.length > displayLength){
    document.frm.total.value = "Too Long";
    console.log(toolong);
  }


// One decimal place only
function runDec(){
if (current.length == 0){
  total = "0."};
};

