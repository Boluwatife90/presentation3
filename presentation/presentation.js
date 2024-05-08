let Text_header = document.getElementById('header-text')
let text_header_btn = document.getElementById('text-header-btn')
let main_word  = document.getElementById('main-word')
let dis_text   = document.getElementById('dis-text')
let text_dis_btn = document.getElementById('text-dis-btn')
let subword  = document.getElementById('subword')
let subdis  = document.getElementById('subdis')
let subBtn  = document.getElementById('subBtn')
let aside_value = document.getElementById('aside-value')
let close_btn = document.getElementById('close-btn')
let aside = document.getElementById('aside')
let open_aside = document.getElementById('open-aside')
let input_file = document.getElementById('input-file')
let open_right = document.getElementById('open-right')
 let right_menu  = document.getElementById('right-menu')
 let middle_btn =  document.getElementById('middle-btn')
 let middle_wrapper = document.getElementById('middle-wrapper')
 let middle_header  = document.getElementById('middle-header')
 let middle_dis   = document.getElementById('middle-dis')




 let obj = []
//  let obj_setrialied  = JSON.stringify(obj)

// localStorage.setItem('obj', obj_setrialied)

// let obj_dseserilated = JSON.parse(localStorage.getItem('obj'))

 
function clear(){
  Text_header.value =''
  dis_text.value= ''
}
function clearaside(){
  subword.value=''
  subdis.value=''
}

let header_value = ''
Text_header.addEventListener('input',function(e){
  header_value =e.target.value
})
let dis_value = ''
dis_text.addEventListener('input',function(e){
  dis_value=e.target.value
})


function createheader(){
 let header = document.createElement('li')
 let text  = document.createTextNode(header_value)
 header.className= 'li'
 header.append(text)
 obj.push(text)
 main_word.appendChild(header)
}
createheader()
text_header_btn.addEventListener('click',function(){
  createheader()
  clear()
})



function createdis(){
  let text = document.createElement('li')
  let textnode  = document.createTextNode(dis_value)
  text.className= 'text'
  text.append(textnode)
  main_word.appendChild(text)
 }
text_dis_btn.addEventListener('click',function(){
  createdis()
clear()

 
})
let newarr = []



let newsubword;
subword.addEventListener('input',function(e){
  newsubword = e.target.value

})

let newsubdis ;

subdis.addEventListener('input',function(e){
  newsubdis= e.target.value
})
function newrar(){
  let arrvalue ;
  newarr.map((data)=>{
    arrvalue= data
  })

  let text = document.createElement('li')
 
  let textnode  = document.createTextNode(arrvalue.title)
  text.className= 'aside-name'
  text.append(textnode)
  text.addEventListener('click',function(){
    let idvalue = arrvalue.id
    console.log(arrvalue)
    middle_header.innerHTML = arrvalue.title
    middle_dis.innerHTML = arrvalue. dis
    middle_wrapper.className = 'show'
    
  })
  aside_value.appendChild(text)
  
}
function addarry (){
  let newid = 0
  newid+=1
  newarr.push({
    title : newsubword,
    dis :newsubdis,
    id : newarr.length+1
  })
  newrar()
 
}

subBtn.addEventListener('click',function(){
  addarry()
  clearaside()
  

})

close_btn.addEventListener('click',function(){

  if(aside.classList.contains('show')){
    aside.classList.remove('show')
    aside.classList.add('hide')
  }else{
    aside.classList.remove('hide')
    aside.classList.add('show')
  }
})

open_aside.addEventListener('click',function(){
  if(aside.classList.contains('hide')){
    aside.classList.remove('hide')
    aside.classList.add('show')
  }

})

let hidebtn = true
open_right.addEventListener('click',function(){
  hidebtn= !hidebtn
  if(hidebtn===true){
    right_menu.classList.remove('show')
    right_menu.classList.add('hide')
  }else{
    right_menu.classList.remove('hide')
    right_menu.classList.add('show')
  }
var value = hidebtn?'Open' : 'Close'
  open_right.innerText =  value

})

input_file.onchange = function(){
  let image = document.createElement('img')
  image.src = URL.createObjectURL(input_file.files[0])
  image.className = 'image'
  main_word.appendChild(image)
  console.log(image.src)

}

middle_btn.addEventListener('click',function(){
  middle_wrapper.className = 'hide'

})


