//to take input from user
let input =document.getElementById('display');

//to select all the buttons
let buttons=document.querySelectorAll('button');

//an empty string in which we'll store the result
let string="";

//it'll give an array of buttons (Array name = arr) 
let arr=Array.from(buttons);

arr.forEach(buttons => {
   buttons.addEventListener('click',(e)=>{
      if(e.target.innerHTML=='ans'){
         string=eval(string);
         input.value=string;
      }
      else if(e.target.innerHTML=='C'){
         string=''
         input.value=string
      }
      else if(e.target.innerHTML=='DEL'){
         string=string.substring(0,string.length-1)
         input.value=string
      }
      else{
         string+=e.target.innerHTML;
         input.value=string
      }

      
   })
})


