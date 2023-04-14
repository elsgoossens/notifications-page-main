var btnRead = document.getElementById("markRead");
var counter = document.getElementById("counter");
var statusMarkers = document.getElementsByClassName("status");
var newNotifications = document.getElementsByClassName("new-notification");

btnRead.addEventListener("click", function(ev){
    try{
        let time_out = 100;
    for (const s of statusMarkers) {
        if(s.classList.contains("unread")) s.classList.toggle("unread");
    }
    for (const n of newNotifications) {
        setTimeout(() => {
            n.classList.remove("new-notification"); 
        }, time_out);
        time_out+=100;
    }
    counter.innerHTML="0";
}
catch(ex){
    console.log("error toggling new status off: " + ex);
}
})