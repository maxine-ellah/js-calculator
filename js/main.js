//write event listeners for when each button is clicked, 
//an action is performed;
//when numbers are clicked, they are displayed
//when symbols are clicked they are displayed
//when = is clicked after an equation, a function is called
//when AC is clicked display area becomes empty (an empty string?)

//Event listener for All Clear button

//get all the keys from the calculator

document.getElementById("CE").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "";
});

      // *referencing above * this may be better for the CE function as it will delete the last entry*

//Event listener for Clear Entry button (erases last number or operation entered)
document.getElementById("AC").addEventListener("click", function(){
  document.getElementById("total").innerHTML = ""; //Working on function
});

    // * referencing above * AC function to be defined.


//Event listener for % button
document.getElementById("%").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "%";
});

//Event listener for / button
document.getElementById("/").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "/";
});

//Event listener for 7 button
document.getElementById("7").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "7";
});

//Event listener for 8 button
document.getElementById("8").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "8";
});

//Event listener for 9 button
document.getElementById("9").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "9";
});

//Event listener for * button
document.getElementById("*").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "*";
});

//Event listener for 4 button
document.getElementById("4").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "4";
});

//Event listener for 5 button
document.getElementById("5").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "5";
});

//Event listener for 6 button
document.getElementById("6").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "6";
});

//Event listener for - button
document.getElementById("-").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "-";
});

//Event listener for 1 button
document.getElementById("1").addEventListener("click", 
  displayValue);

  function displayValue(){ 
    document.getElementById("total").innerHTML = "1";
};

//Event listener for 2 button
document.getElementById("2").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "2";
});

//Event listener for 3 button
document.getElementById("3").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "3";
});

//Event listener for + button
document.getElementById("+").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "+";
});

//Event listener for * button
document.getElementById("*").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "*";
});

//Event listener for . button
document.getElementById(".").addEventListener("click", function(){
  document.getElementById("total").innerHTML = ".";
});

//Event listener for 0 button
document.getElementById("0").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "0";
});

//Event listener for Ans button
document.getElementById("Ans").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "Ans";
});

//Event listener for = button
document.getElementById("=").addEventListener("click", function(){
  document.getElementById("total").innerHTML = "=";
});
