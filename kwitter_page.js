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
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Users_name");
roomname = localStorage.getItem("roomname");
function send() {
    message = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: username, message: message, like: 0
    });
    document.getElementById("msg").value = "";
}
function getData() 
{ firebase.database().ref("/" + room_name).on('value', function (snapshot)
 { document.getElementById("output").innerHTML = ""; 
 snapshot.forEach(function (childSnapshot) 
 { childKey = childSnapshot.key; childData = childSnapshot.val();
     if (childKey != "purpose") { firebase_message_id = childKey; message_data = childData;}}}}
