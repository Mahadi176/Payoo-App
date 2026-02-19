document.getElementById('login-btn')
.addEventListener("click",function(){
    const numberInput = document.getElementById("number-input")
    const contactNumber = numberInput.value
    
    const pinInput = document.getElementById("pin-input")
    const pin = pinInput.value 

    if(contactNumber =="01234567890" && pin =="1234"){
        alert("Login Successful")
        window.location.assign("/home.html")
    }
    else{
        alert("Login Failed")
        return ;
    }
});