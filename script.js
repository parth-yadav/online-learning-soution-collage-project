const login_btn = document.querySelector(".Loginbtn");
const login_page = document.querySelector(".loginpage");
const phone_number = document.querySelector(".phonenumber")

login_btn.addEventListener("click",()=>{login_page.style.display = "none"})
phone_number.addEventListener("input",()=>{
    if(!isNaN(phone_number.value)){
        if(phone_number.value.length >=10){
            login_btn.style.backgroundColor="#5a4bda";
        }
        else{
            login_btn.style.backgroundColor= "#dcdcdc";
        }
    }  
})