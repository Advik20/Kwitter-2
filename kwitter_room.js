//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyABr3NGESXkqft05vKJunnsEXy4XcC2P0E",
      authDomain: "kwitter-project-c0a1c.firebaseapp.com",
      projectId: "kwitter-project-c0a1c",
      storageBucket: "kwitter-project-c0a1c.appspot.com",
      messagingSenderId: "959435481598",
      appId: "1:959435481598:web:552d55ff1da75015fe20af"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
      }

      function add_Room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
