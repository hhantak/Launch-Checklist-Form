// Write your JavaScript code here!
//Mission Target Code

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {  
       const destination = document.getElementById("missionTarget");
           let index = Math.floor(Math.random()*json.length);
               destination.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[index].name}</li>
                  <li>Diameter: ${json[index].diameter}</li>
                  <li>Star: ${json[index].star}</li>
                  <li>Distance from Earth: ${json[index].distance}</li>
                  <li>Number of Moons: ${json[index].moons}</li>
               </ol>
               <img src="${json[index].image}">
               `;
                   });
           });

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
   //defining the variables of user input data in launch form  
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   //defining the variables for launch status check
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
      //if the user leaves any space blank alerts user
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         window.alert("All fields are required.");
         event.preventDefault();
      //if fuel level input !== number alerts user
      } else if (isNaN(Number(fuelLevel.value))) {
         window.alert("Fuel level must be a number");
         event.preventDefault();
      //if cargo mass input !== number alerts user
      } else if (isNaN(Number(cargoMass.value))){
         window.alert("Cargo mass must be a number");
         event.preventDefault();
      // ready for launch baby!!
      } else {
         fuelLevel = Number(fuelLevel.value);
         cargoMass = Number(cargoMass.value);
         // update the pilot status upon receiving correct input and hitting the button.
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         //triggers a warning Red text if fuel level input is < 10000
         if (fuelLevel < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            event.preventDefault();
         }
         //triggers a warning Red text if cargo mass input > 10000
         if (cargoMass > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass is too great for launch.";
            launchStatus.innerHTML = "Shuttle not ready for launch.";
            launchStatus.style.color = "red";
            event.preventDefault();
         } 
         //triggers ready for launch & changes text to lime green 
         if (fuelLevel >= 10000 && cargoMass <= 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch.";
            launchStatus.style.color = "limegreen";
            event.preventDefault();
         }

         event.preventDefault();
      }
      event.preventDefault();
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/