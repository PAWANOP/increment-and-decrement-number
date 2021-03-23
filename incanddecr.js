const zero =document.getElementById('counter');
const increment =document.getElementById('increment');
const decrement = document.getElementById('decrement');

let number = 0;

const change=(number)=>{
   let color ="";

    if (number<0) {
        color = "red"
    }else if(number>0){
       color="green"
    }  
    else{
      color="white"
    }

    return color;
}


increment.addEventListener("click",()=>{
  number++;
  zero.innerHTML=number;
  zero.style.color=change(number);
});
decrement.addEventListener("click",()=>{
  number--;
  zero.innerHTML=number;
  zero.style.color=change(number);
});


change();