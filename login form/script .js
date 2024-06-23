let btn1 = document.querySelector(".btn2")
let another = document.querySelector(".another")
let create2 = document.querySelector(".btn3")
let sign2 = document.querySelector(".btn4")
let oneside = document.querySelector(".oneside")

another.style.visibility="hidden"
btn1.addEventListener("click",()=>{
    press = 1
    if(press ==1){
        oneside.style.animation="gero 2s ease 1"
        oneside.style.visibility="hidden"
        
     
        another.style.animation="zero 2s ease 1"
        another.style.visibility="visible"



        create2.addEventListener("click",()=>{
            
        })
        sign2.addEventListener("click",()=>{
            ci=2
            if(ci==2){
                another.style.animation="tero 2s ease 1"
                another.style.visibility="hidden"
                
                oneside.style.animation="uero 2s ease 1"

                oneside.style.visibility="visible"
             
                
              
        
            }
            
           
        })
       


    }
})


let names = document.querySelector(".input").value

let btn3 = document.querySelector(".btn3")
btn3.addEventListener("click",()=>{
    let names = document.querySelector(".input").value
    
   let phono =document.querySelector("#cu2").value
   let email=document.querySelector("#cu3").value
   let newpass=document.querySelector("#cu4").value
   let confpass=document.querySelector("#cu5").value




   if(phono.length==10){
         phono=phono.value
   }else{
    phono=0
    alert("noode phone number check kar")
   }
   if(email.length<=8){
    alert("please re enter  your email id ")
    email=""
   }else{
    email=email.value
   }

   if(newpass.length<=8){
    alert("password should be more than 8 characters")
    
   }else{
    if(newpass==confpass){
        finalpass = newpass
      
           name2=names+"-ur32"

        alert("Your User Id is "+name2 +"\n"+"password is "+newpass);
    }
   }


})


mainsign=document.querySelector(".btn1")
mainsign.addEventListener("click",()=>{

let userid = document.querySelector(".in1").value
let paswword = document.querySelector(".in2").value

if(userid==name2 && paswword==newpass){

 alert("incorrect password")
 
}else{
    alert("there ias no user on this ID")
}







})