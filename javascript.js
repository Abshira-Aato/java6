

// const element = document.getElementsByTagName("h1");

// element.innerHTML = "Hello World from javascript";

// console.log (element);


// let title = document.getElementsByClassName("title")

// console.log(title);



// const text = document.getElementById("myDiv");

// text.innerHTML = "This is from javascript.....";

// text.style.backgroundColor = "grey" ;
 
// text.style.fontSize = "20px" ;

// text.style.color = "white" ;

// text.style.height = "200px" ;

// text.style.width = "330px" ;

// text.style.backgroundImage = "url(love.jpg)";

// text.style.backgroundSize = " cover" ;

// const para = document.querySelector("p");

// para.innerHTML = "This is text from element.";



// const para = document.querySelector("p");

// const button = document.querySelector("button");

// button.addEventListener("click", () => {

//   para.style.color = "teal"

//   para.style.fontSize = "50px"
// })


let initailValue = 0;

let value = document.querySelector(".value");

let Increment = document.querySelector(".Increment");

let Decrement = document.querySelector(".Decrement");

let Reset = document.querySelector(".Reset");

let body = document.querySelector("body");


Increment.addEventListener("click", () => {

initailValue++;

value.innerHTML = initailValue;

Increment.style.backgroundColor = "brown";

Increment.style.color = "white";



// if (initailValue ==5){

//   Increment.style.backgroundColor = "blue";
// }
// else if (initailValue == 6){

//   Increment.style.backgroundColor = "blue";
// }
// else if (initailValue == 7){

//   Increment.style.backgroundColor = "blue";
// }
// else if (initailValue == 8){

//   Increment.style.backgroundColor = "blue";
// }
// else if (initailValue == 9){

//   Increment.style.backgroundColor = "blue";
// }
// else if (initailValue == 10){

//   Increment.style.backgroundColor = "blue";
// }
// else{
//   Increment.style.backgroundColor = "brown";
// }


// if(initailValue == 2)
// {
//     body.style.backgroundColor= "yellow";
// }


// else if( initailValue ==4){
//   body.style.backgroundColor= "black";
// }
// else if( initailValue ==5){
//   body.style.backgroundColor= "orange";
// }

// else{
//   body.style.background.linear.gradient=("yellow","black");
// }



if(initailValue == 10)
{
    value.style.color= "blue";
}

else{
  value.style.color= "black";
}


})












Decrement.addEventListener("click", () => {

if(initailValue >0){

  initailValue--;
  
  value.innerHTML = initailValue;
  
  Decrement.style.backgroundColor = "grey";
  
  Decrement.style.color = "white";

  if(initailValue == 0)
  {
      value.style.color= "red";
  }
  
  else{
    value.style.color= "black";
  }





}
  
  })

Reset.addEventListener("click", () => {

initailValue = 0 ;

value.innerHTML = initailValue;

Reset.style.backgroundColor = " crimson";

Reset.style.color = "white";

})



