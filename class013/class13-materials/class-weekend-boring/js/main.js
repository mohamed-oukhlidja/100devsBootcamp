//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)
let dayHolder = document.querySelector('#placeToSee');

function check() {

  const day = document.querySelector('#day').value.toUpperCase()


  if(day === "TUESDAY" || day === "THURSDAY"){
    dayHolder.innerText = "it is class day"
  }else if( day === "SATURDAY" || day === "SUNDAY"){
    dayHolder.innerText = "it is weekend "
  }else{
    dayHolder.innerText = "Boooooooooring "
    
  }

}
