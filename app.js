var btnRead = document.getElementById("markRead");
var counter = document.getElementById("counter");
var statusMarkers = document.getElementsByClassName("status");
var newNotifications = document.getElementsByClassName("new-notification");

btnRead.addEventListener("click", function(ev){
    try{
    for (const s of statusMarkers) {
        if(s.classList.contains("unread")) s.classList.toggle("unread");
    }
    for (const n of newNotifications) {
        n.classList.remove("new-notification");
    }
    counter.innerHTML="0";
}
catch(ex){
    console.log("error toggling new status off: " + ex);
}
})