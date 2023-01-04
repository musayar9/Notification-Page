const count = document.querySelector(".notice");
const countMessage = document.querySelectorAll(".message-color")


$(document).ready(function(){
    $(".read").click(function(){
        $("#personOne, #personTwo, #personThree").toggleClass("message-color")
        const  newMessage = document.querySelectorAll(".message-color")
        count.innerText=newMessage.length
        $(".fa-solid").toggle()

       

    })
})
$(document).ready(function(){
    $("#personOne").click(function(){
        $("#iconOne").toggle()
    })

    $("#personTwo").click(function(){
        $("#iconTwo").toggle()
    })

    $("#personThree").click(function(){
        $("#iconThree").toggle()
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
