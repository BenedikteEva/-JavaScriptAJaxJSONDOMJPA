
import 'bootstrap/dist/css/bootstrap.css';



//list of all users and show singleuser
var submit = document.getElementById("btnsend");
var tblbody = document.getElementById("tblbody");
var showSingleUser = document.getElementById("showSingleUser");

//all users list
submit.addEventListener("click", function (url) {
    url = "http://localhost:3000/users";
    getUsersFromFetch(url);
});

// show a single user
showSingleUser.addEventListener("click", function (url) {
    let userId = document.getElementById("userId");
    url = "http://localhost:3000/users/" + userId.value;
    getUsersFromFetch(url);
});

// used for both all users and singleusers
function getUsersFromFetch(url) {
    let list = "";
    var myJSON = fetch(url)
    .then(function (response) {
        response.json()
    .then(function (myObj) {// vigtig
        
            if (myObj.length > 1) {
                for (var i = 0; i < myObj.length; i++) {
                    list += "<tr><td>" + myObj[i].name + "</td><td>" + myObj[i].age + "</td><td>" + myObj[i].gender + "</td></tr>";

                    // her skal jeg lige have klaret problemet med at jeg i getallusers får et array og i get singleuser får et objekt
                }
            }
            else {
                list = "<tr><td>" + myObj.name + "</td><td>" + myObj.age + "</td><td>" + myObj.gender + "</td></tr>";

            } tblbody.innerHTML = list;
        });
    })




// adduser
var age = document.getElementById("fage");
var name = document.getElementById("fname");
var gender = document.getElementById("fgender");
var email = document.getElementById("femail");
var adduser = document.getElementById("addUser");

adduser.addEventListener("click", function () {
    addUser();
});



var myObj2;
function addUser() {
    myObj2 = { "age": age.value, "name": name.value, "gender": name.value, "email": email.value };
    var url = "http://localhost:3000/users";


    fetch(url, {
        method: 'POST',
        body: JSON.stringify(myObj2),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
}
//update user
var userIdUpdate = document.getElementById("userIdUpdate");
var updateUserId = document.getElementById("updateUser");
updateUserId.addEventListener("click", function () {
    updateUser();
});

function updateUser() {
    var myObj3 = { "id": userIdUpdate.value, "age": age.value, "name": name.value, "gender": gender.value, "email": email.value };
    var url = "http://localhost:3000/users/" + userIdUpdate.value;


    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(myObj3),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
}

//update user
var userIdUpdate = document.getElementById("userIdUpdate");
var updateUserId = document.getElementById("updateUser");
updateUserId.addEventListener("click", function () {
    updateUser();
});

//delete user
var userDelete = document.getElementById("userDelete");
userDelete.addEventListener("click", function () {
    deleteUser();
});
function deleteUser() {

    var url = "http://localhost:3000/users/" + userId.value;


    fetch(url, {
        method: 'DELETE',

        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
}
};