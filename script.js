const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circle = document.querySelectorAll('.circle')

var currentactive=1;
next.addEventListener('click',() =>{
  currentactive++;
  if(currentactive>circle.length){
    currentactive=circle.length;
  }   
    update();
  
})
prev.addEventListener('click', ()=>{
  currentactive--;

if(currentactive<1){
    currentactive=1;
  }   update();
  
})

function update() {
          // active class
        circle.forEach((circle,index)=>{
          if(index<currentactive){
            circle.classList.add('active')
          }else{
            circle.classList.remove('active')
          }
          
        })

          //progress bar
          var activecircle = document.querySelectorAll('.active');
          progress.style.width=((activecircle.length-1)/(circle.length -1)) * 100 +"%";

          //btn state
          if(currentactive===1){
            prev.disabled=true;
          }else if(currentactive===circle.length){
            next.disabled=true;
          }
        else{
                      next.disabled=false;
                      prev.disabled=false;


        }
}