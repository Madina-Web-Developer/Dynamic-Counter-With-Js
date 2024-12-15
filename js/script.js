
// ======== Dom Past Start =============== //
let result     = document.querySelectorAll('.result')
let input      = document.querySelectorAll('input')
let button1    = document.querySelector('.button1')
let button2    = document.querySelector('.button2')
let button3    = document.querySelector('.button3')

// =========== Dom Part End =================== // 

// ============= Functional Part Start ========== //



let addCounter = (item)=>{
    result[item].innerHTML = input[item].value
    result[item].dataset.numb = input[item].value
     
   
}


button2.addEventListener('click', ()=>{

   
    
    result.forEach((item)=>{

        
  
        let number = 0
       
        let countNumber = ()=>{
       
           number++
           item.innerHTML = number
           if(number == item.dataset.numb){
               clearInterval(numb)
           }
        }
       
        let numb =setInterval(()=>{
       
           countNumber()
       
        }  , 200)
       
       
       })
       
  

})

button3.addEventListener('click', ()=>{


  result.forEach((item)=>{
   
   item.innerHTML = ''
  })

  input.forEach((now)=>{

    now.value = ''
    
  })


})










