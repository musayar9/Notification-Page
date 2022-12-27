const count = document.querySelector(".notice");
const countMessage = document.querySelectorAll(".message-color")


$(document).ready(function(){
    $(".read").click(function(){
        $("#Mark, #Angela, #Jacop").toggleClass("message-color")
        const  newMessage = document.querySelectorAll(".message-color")
        count.innerText=newMessage.length
    })
})



countMessage.forEach((message)=>{
    message.addEventListener("click", () =>{
        message.classList.toggle("message-color")
        const  newMessage = document.querySelectorAll(".message-color")
        count.innerText=newMessage.length
    }
    
    )
})
