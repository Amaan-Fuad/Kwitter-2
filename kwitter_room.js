var firebaseConfig = {
      apiKey: "AIzaSyBYm4vWRqPc6lussewh5i5mAXRYN_qLvHQ",
      authDomain: "kwitter-project-11c60.firebaseapp.com",
      databaseURL: "https://kwitter-project-11c60-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-11c60",
      storageBucket: "kwitter-project-11c60.appspot.com",
      messagingSenderId: "659556352297",
      appId: "1:659556352297:web:1210c76639722c9b2cf738",
      measurementId: "G-7M42TJQ366"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);0

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

username=localStorage.getItem("Users_name");
console.log(username);
document.getElementById("username").innerHTML="Welcome "+username+"!";
function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"Adding a room"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names+" is the room name");
                  row="<div class='Room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row;
                  
                  //End code
            });
      });
}
function redirect(name){
      console.log(name);
      localStorage.setItem("name",name);
      window.location="kwitter_page.html";}
getData();
function logout(){
localStorage.removeItem("Users_name");
localStorage.removeItem("roomname");
window.location="index.html";
}