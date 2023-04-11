var btnRead = document.getElementById("markRead");
var statusMarkers = document.getElementsByClassName("status");

btnRead.addEventListener("click", function(ev){
    for (const s of statusMarkers) {
        if(s.classList.contains("unread")) s.classList.toggle("unread");
    }
})