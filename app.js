let form = renderElement("form")
let inputs = renderElementAll("input")
let text = renderElement(".name_text")
let last_text = renderElement(".last_text")
let last_code = renderElement(".last_code")
let last_email = renderElement(".last_email")

const handleBlur = (event) => {
    const email_regex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    switch(event.target.name){
        case "name" :{
            if(event.target.value.trim().length > 2){
                text.classList.remove("active")
                console.log("ishladi");
            } else {
                text.classList.add("active")
            }
        }break;
        case "last_name" :{
            if(event.target.value.trim().length > 3){
                last_text.classList.remove("active")
                console.log("ishladi");
            } else {
                last_text.classList.add("active")
            }
    }break;
    case "email" :{
        if(email_regex.test(event.target.value.trim())){
            last_email.classList.remove("active")
            console.log("ok");
        }else if(event.target.value.length === 0){
            last_email.textContent = "Email majburiy"
        }else {
            last_email.classList.add("active")
            last_email.textContent = "Email xato"
        }
    }break;
    case "password" :{
        if(event.target.value.trim().length > 5){
            last_code.classList.remove("active")
            console.log("ishladi");
        } else {
            last_code.classList.add("active")
        }
}
}
}
inputs.forEach((item) => {
    item.addEventListener("keyup" , handleBlur)
})


const handleSub = (event) => {
    // event.preventDefault()
    // let data = new FormData(event.target)
    // let json = await fetch("http://localhost:3000/register" , {
    //     method : "POST",
    //     headers : {
    //         "Content-Type" : "application/json"
    //     },
    //     body : JSON.stringify({name: data.get("name") , last_name : data.get("last_name") , email : data.get("email") , password : data.get("password") })
    // }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error)).finally(() => console.log("Loading"))
    event.preventDefault()
    let data = new FormData(event.target)
    let natija = []
    let user = {
        name : data.get("name"),
        last_name : data.get("last_name"),
        email : data.get("email"),
        password : data.get("password")
    }
    natija.push(user)
     window.localStorage.setItem("user" , JSON.stringify(natija))
     if(natija !== null || natija !== undefined){
        window.location.replace("http://127.0.0.1:5500/dark.html")
     }
}
form.addEventListener("submit" , handleSub)
