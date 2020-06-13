const btnLow = document.querySelector('#btnLow')
const btnAdd = document.querySelector('#btnAdd')
let output = document.querySelector('.output')

btnAdd.addEventListener('click',add);
btnLow.addEventListener('click',lowernumb);


let count = 0 ;
output.innerHTML=count
function add(){
  count++;
  output.innerHTML=count
  if (output.innerHTML>'0'){
      output.style.color = '#008000'
  }else if (output.innerHTML=='0'){
    output.style.color = '#FFFFFF'
  }else{
    output.style.color = '#FF0000'
  }
  output.animate([{opacity:'.2'},{opacity:'1'}],{duration:500,fill:'forwards'})
}


function lowernumb(){
    count--;
    output.innerHTML=count
    if (output.innerHTML>'0'){
        output.style.color = '#008000'
    }else if (output.innerHTML=='0'){
      output.style.color = '#FFFFFF'
    }else{
      output.style.color = '#FF0000'
    }
    output.animate([{opacity:'.2'},{opacity:'1'}],{duration:500})
  }
