function Login(){
username=document.getElementById("username").value;
localStorage.setItem("Users_name",username);
window.location="kwitter_room.html";
}