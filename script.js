/* Define a variable to store our API data into */
let data;

/* Fetch Request */

fetch('https://randomuser.me/api')
  .then(function (response) {
    console.log(response);

    // .json() parses a JSON file so it's usable by JavaScript
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);

    /* Now that we have the data as a huge JSON blob, let's parse it out! */

    // get references
    let body = document.querySelector('body');

    // get email from JSON data
    let email = myJson.results[0].email;
    console.log(email);

    // output email to the webpage
    let newElement = document.createElement('p');
    newElement.innerHTML = email;
    body.appendChild(newElement);

    // get gender from the JSON data
    let gender = myJson.results[0].gender;
    console.log(gender);

    // change the background color based on gender
    if (gender == 'male') {
      body.style.backgroundColor = 'lightblue';
    } else {
      body.style.backgroundColor = 'pink';
    }

    // get name from JSON data
    let title = myJson.results[0].name.title;
    let firstName = myJson.results[0].name.first;
    let lastName = myJson.results[0].name.last;
    let fullName = title + ' ' + firstName + ' ' + lastName;
    console.log(fullName);

    // output fullName to the webpage
    let newElement2 = document.createElement('h1');
    newElement2.innerHTML = 'Welcome, ' + fullName;
    body.appendChild(newElement2);

    // get picture from JSON data
    let pictureLink = myJson.results[0].picture.large;
    console.log(pictureLink);

    // output picture to the webpage
    let newElement3 = document.createElement('img');
    newElement3.src = pictureLink;
    body.appendChild(newElement3);

    // JavaScript reads code asynchronously
    data = myJson.results[0].email;
  });

// print data to the console
console.log(data);
