let nota=[...document.querySelectorAll('.nota')]

function music(click){
  let audio=new Audio(`../nota/${click}.wav`)
  audio.play()
}

nota.forEach((elemento)=>{
  elemento.addEventListener('click',(evt)=>{
    music(evt.target.id)
    console.log(evt.target.id)
  })
})
