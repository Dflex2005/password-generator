const output = document.querySelector(".output");
const btn = document.querySelector(".gen");
const difpass = document.querySelector("#pass");
const copy = document.querySelector(".copy");
const cover = document.querySelector(".cover");

btn.addEventListener("click", generate)

function generate(){
    copy.style.opacity = 1;
    copy.textContent ="click to copy password"
    const selpass = difpass.options[difpass.selectedIndex].value;
    if(selpass === "weak"){
        let result = "";
    let password = "pqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmno"
    for(i=0; i<8; i++){
    result += password.charAt(Math.floor(Math.random()* password.length));
    }
    output.value = result;
    }else if(selpass === "strong"){

    let result = "";
    let password = "1234567890pqrstuvwxyzABCDEFGHIJKLMNOPQR124567890STUVWXYZabcdefghijklmno></?$#@!_-()^&*|"
    for(i=0; i<=12; i++){
    result += password.charAt(Math.floor(Math.random()* password.length));
    }
    output.value = result;
    }

}

cover.addEventListener("click", ()=>{
    copy.textContent = "Password copied"
   output.select();
   document.execCommand("copy")
})

