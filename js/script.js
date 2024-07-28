// =========================== For Generate Area Document
// ----- for generate email
let emailGenerate        = document.querySelector(".emailGenerate")
let generateEmailbtn     = document.querySelector(".generateEmailbtn")
let saveEmail            = document.querySelector(".saveEmail")
// ----- for generate password
let passwordGenerate     = document.querySelector(".passwordGenerate")
let generatePassbtn      = document.querySelector(".generatePassbtn")
let savePass             = document.querySelector(".savePass")
// =========================== For Values Document
let capital              = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let smaller              = "abcdefghijklmnopqrstuvwxyz"
let numbers              = "0123456789"
let symbols              = "@#&"
let forPass              = capital + smaller + numbers + symbols
let foremail             = capital + smaller + numbers 
// =========================== For Button Tooltips Document
let tooltips             = document.querySelector(".tooltips")
tooltips.innerHTML       = ""
// =========================== For Input Value Readonly
passwordGenerate         .setAttribute("readonly", "readonly")
emailGenerate            .setAttribute("readonly", "readonly")

// =========================== Generate Email Part Start

// ------------ generate emaiL button event
generateEmailbtn.addEventListener("click", ()=>{

    let email = "" 

    for (let i = 1; i <= 8; i++) {

        let output      = Math.floor(Math.random() * foremail.length)
        email          += foremail.charAt(output) 
    }

    emailGenerate.value = email + "@gmail.com"
})

// generate email button hover event
generateEmailbtn.addEventListener("mouseover", ()=>{
    generateEmailbtn      .style = "background-color: #8785d6; cursor: pointer; color : #fff"
    tooltips              .innerHTML = "Generate"
    tooltips              .style = "display: block; display: flex; width: 80px; transform: translate(200px, -48px)"
})

generateEmailbtn.addEventListener("mouseout", ()=>{
    generateEmailbtn      .style = "background-color: #aeacff"
    tooltips              .innerHTML = ""
    tooltips              .style = "display: none"
})

// ------------ save email button event 
saveEmail.addEventListener("click", ()=>{

    emailGenerate           .select()
    navigator.clipboard     .writeText(emailGenerate.value)

    if(emailGenerate.value == ""){
        tooltips            .innerHTML = "Please Generate First"
        tooltips            .style = "display:block; display: flex; width: 140px; transform: translate(240px, -48px)"
    }else{
        tooltips            .innerHTML = "Saved"
        tooltips            .style = "display:block; display: flex; transform: translate(240px, -48px)"
    }
})

// save email button hover event
saveEmail.addEventListener("mouseover", ()=>{
    saveEmail               .style = "background-color: #8785d6; cursor: pointer; color : #fff"
    tooltips                .innerHTML = "Save"
    tooltips                .style = "display: block; display: flex; transform: translate(240px, -48px)"
})

saveEmail.addEventListener("mouseout", ()=>{
    saveEmail               .style = "background-color: #aeacff"
    tooltips                .innerHTML = ""
    tooltips                .style = "display: none"
})

// =========================== Generate Email Part End

// =========================== Generate Password Part Start

// ------------ generate password button event
generatePassbtn.addEventListener("click", () => {

    let password = ""

    for (let i = 1; i <= 8; i++) {

        let output         = Math.floor(Math.random() * forPass.length)
        password          += forPass.charAt(output) 
    }
    
    passwordGenerate.value = password
})

// generate password button hover event
generatePassbtn.addEventListener("mouseover", ()=>{
    generatePassbtn      .style = "background-color: #8785d6; cursor: pointer; color : #fff"
    tooltips             .innerHTML = "Generate"
    tooltips             .style = "display: block; display: flex; width: 80px; transform: translate(200px, 60px)"
})

generatePassbtn.addEventListener("mouseout", ()=>{
    generatePassbtn      .style = "background-color: #aeacff"
    tooltips             .innerHTML = ""
    tooltips             .style = "display: none"
})

// ------------ save password button event
savePass.addEventListener("click", ()=>{

    passwordGenerate       .select()
    navigator.clipboard    .writeText(passwordGenerate.value)

    if(passwordGenerate.value == ""){
        tooltips           .innerHTML = "Please Generate First"
        tooltips           .style = "display:block; display: flex; width: 140px; transform: translate(240px, 60px)"
    }else{
        tooltips           .innerHTML = "Saved"
        tooltips           .style = "display:block; display: flex; transform: translate(240px, 60px)"
    }
})

// save password button hover event
savePass.addEventListener("mouseover", ()=>{
    savePass               .style = "background-color: #8785d6; cursor: pointer; color : #fff"
    tooltips               .innerHTML = "Save"
    tooltips               .style = "display: block; display: flex; transform: translate(240px, 60px)"
})

savePass.addEventListener("mouseout", ()=>{
    savePass               .style = "background-color: #aeacff"
    tooltips               .innerHTML = ""
    tooltips               .style = "display: none"
})

// =========================== Generate Password Part End
