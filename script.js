const messageInput=document.getElementById("msg-input");
messageInput.addEventListener("keydown",function(event){
    if(event.key=="Enter"){
        showtext();
    }
})
function showtext(){
    document.getElementById("message-output").innerHTML=messageInput.value;
    messageInput.value="";
}