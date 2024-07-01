const logdiv = document.getElementById("log");
const statediv = document.getElementById("state");
const start = document.getElementById("start");
const end = document.getElementById("end");

start.addEventListener("click", ()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup", handleUp);
    start.disabled = true;
    end.disabled = false;
})

end.addEventListener("click", ()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup", handleUp);
    logdiv.textContent = "";
    statediv.textContent = "";
    start.disabled = false;
    end.disabled = true;
})

function handleDown(e){
    logdiv.textContent = `key ${e.key} pressed down`
    statediv.textContent = "key is down"
}

function handleUp(e){
    logdiv.textContent = `key ${e.key} pressed Up`
    statediv.textContent = "key is Up"
}