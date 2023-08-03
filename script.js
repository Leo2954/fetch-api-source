/* Define a variable to store our API data into */
let data;

/* Fetch Request */

fetch("https://randomuser.me/api/")
.then(function (response) {
    console.log(response);


    //.json() parses a JSON file so it's usuable by javascript
    return response.json();
}).then(function (myJson) {
    console.log(myJson);

    //data = myJson.results[0].email;
    /* Parse Out Email, Gender, Name, and Picture and Put It Onto Page */
    let body = document.querySelector("body");
    let email = myJson.results[0].email;
    console.log(email);
    let emailP = document.createElement("p");
    emailP.innerHTML = email;
    body.appendChild(emailP);

    let gender = myJson.results[0].gender;
    console.log(gender);
    if(gender=="male")
    {
        //background blue
        body.style.backgroundColor = "lightblue";
    }
    else{
        //background pink
        body.style.backgroundColor = "pink";
    }

    let title = myJson.results[0].name.title;
    let firstName = myJson.results[0].name.first;
    let lastName = myJson.results[0].name.last;
    let fullName = title + " " + firstName + " " + lastName;
    console.log(fullName);

    let nameHeading = document.createElement("h1");
    nameHeading.innerHTML = "Welcome " + fullName;
    body.appendChild(nameHeading);

    
});


console.log(data);