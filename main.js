// Q1
function myfunction(){
    console.log("Hello Rushikesh!!!");
}
myfunction();
// Q2
function sum(a, b){
    console.log(a+b);
}
sum(3,4);
// Q3
const arrow=()=>{
    console.log("Arrow funtion!!!!!")
}
arrow();

//Q4
// "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

// Q5
 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

// Q6


var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};

//Q7

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    console.log("factorial",result);
  }
  
  factorial(5);
//   -------------------------------------------------------------------------------
// day 2

//Q1

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

//Q2
//  Abc();
    const Abc = function(){
    let value = 20;
    console.log(value);
}
//Q3
var a = 10;
(function (){
    console.log('Q3',a);
    var a = 20;
})();

//Q4
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes");
