let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let email=document.getElementById("email")
let password=document.getElementById("password")
let rpassword=document.getElementById("rpassword")
let submit=document.getElementById("submit")

let errorname=document.getElementById("errorname")
let errorname2=document.getElementById("errorname2")
let erroremail=document.getElementById("erroremail")
let errorpassword=document.getElementById("errorpassword")
let errorrpassword=document.getElementById("errorrpassword")
let mismatch=document.getElementById("mismatch")
submit.addEventListener("click",handleSubmit)
function submitForm() {
    document.getElementById("form").submit(); // Replace "yourFormId" with the actual ID of your form
}
function handleSubmit(event){
   
    if (
        fname.value === "" ||
        lname.value === "" ||
        email.value === "" ||
        password.value === "" ||
        rpassword.value === "" ||
        password.value !== rpassword.value
    ) {
        event.preventDefault();
    }

   if(fname.value===""){
    errorname.textContent="Please enter first name"
    fname.style.border="red 2px solid"
    errorname.style.color="red"
    }else {
        fname.style.border="3px solid green"
        errorname.textContent=""
    }
    if(lname.value===""){
        errorname2.textContent="Please enter last name"
        errorname2.style.color="red"
        lname.style.border="red 2px solid"
        }else {
            lname.style.border="3px solid green"
            errorname2.textContent=""
        }
        if(email.value===""){
            erroremail.textContent="Please enter email id"
            erroremail.style.color="red"
            email.style.border="red 2px solid"
            }else {
                email.style.border="3px solid green"
                erroremail.textContent=""
            }
    if(password.value!=rpassword.value){
        mismatch.textContent="passwords do not match"
        mismatch.style.color="red"
    password.style.border="red 2px solid"
    rpassword.style.border="red 2px solid"
    }else{
        password.style.border="green 2px solid"
        rpassword.style.border="green 2px solid"
        mismatch.textContent=""
    }
   
    if(password.value===""){
        errorpassword.textContent="Please enter password"
        errorpassword.style.color="red"
        password.style.border="red 2px solid"
        rpassword.style.border="red 2px solid"
    }
    else{
        errorpassword.textContent=""
    }
    if(rpassword.value===""){
        errorrpassword.textContent="Please enter password"
        errorrpassword.style.color="red"
        rpassword.style.border="red 2px solid"
        rpassword.style.border="red 2px solid"
    }
    else{
        errorrpassword.textContent=""
    }
    
}