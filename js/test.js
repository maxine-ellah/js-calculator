
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