const firebaseConfig = {
      apiKey: "AIzaSyCJRNVFURS6k4j7hvcz4s46IIPSZfyCAas",
      authDomain: "kwitter-b4ed0.firebaseapp.com",
      databaseURL: "https://kwitter-b4ed0-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4ed0",
      storageBucket: "kwitter-b4ed0.appspot.com",
      messagingSenderId: "590185587201",
      appId: "1:590185587201:web:b595d84134d59157175600"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      //End code
      });});}
getData();

function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
