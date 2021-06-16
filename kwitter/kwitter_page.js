user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name"); function send() { msg = document.getElementById("msg").value; firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 }); document.getElementById("msg").value = ""; }

function getData()
 { firebase.database().ref("/"+room_name).on ('value', function(snapshot)
  { document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
      childData = childSnapshot.val();
       if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



      } });  }); }
getData();

function updatelike(message_id)
{
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      likes_in_number = Number(likes) + 1;
      console.log(likes_in_number);

       firebase.database().ref(room_name).child(mesage_id).update({
             like : likes_in_number
       });
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}