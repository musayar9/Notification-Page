const count = document.querySelector(".notice");
const countMessage = document.querySelectorAll(".message-color")
const icon = document.querySelectorAll(".fa-solid")

$(document).ready(function(){
    $(".read").click(function(){
        $("#Mark, #Angela, #Jacop").toggleClass("message-color")
        const  newMessage = document.querySelectorAll(".message-color")
        count.innerText=newMessage.length
        $(".fa-solid").toggle()

       

    })
})
$(document).ready(function(){
    $("#Mark").click(function(){
        $(".mark").toggle()
    })

    $("#Angela").click(function(){
        $(".angela").toggle()
    })

    $("#Jacop").click(function(){
        $(".jacop").toggle()
    })
})



countMessage.forEach((message)=>{
    message.addEventListener("click", () =>{
        
        message.classList.toggle("message-color")
        const  newMessage = document.querySelectorAll(".message-color")
        count.innerText=newMessage.length
        icon.classList.toggleClass()


        
    }
    
    )
})
