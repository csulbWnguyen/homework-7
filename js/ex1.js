const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  
  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };

  //test code to see if I can access the function. All values are accessed via codes.
console.log(houses.forEach(house =>{
  const x = getCharacters(house.code);
  console.log(`${house.name}: ${x}`);
}));

//get Elements
let houseID = document.getElementById("house");
const formElement = document.querySelector("form");
let option = document.createElement("option");


//For each house, attach an option value to the form.
// New note: appendChild can only do one at a time. cloneNode basically saves a copy of what the value was at it's iterating itself. 
//appendChild as normal, but values would NOT be replaced from normal.
houses.forEach(house =>{
  option.textContent = house.name;
  option.value = house.code;
  houseID.appendChild(option.cloneNode(true));
  formElement.appendChild(houseID);
});

const houseCharacters=text=> {
  document.createElement("li");
  element.textContent = text;
  return element;
};


//eventChange when ID of house is changing. 
formElement.addEventListener("change", e=>
{ //this should get the value of the option set from the prior. Example: targaryen = TA value.
  characters = getCharacters(e.target.value);
  lineItems = document.createElement("li");
  //for each character in the array, 
  characters.forEach(character =>{
    lineItems.textContent = character;
    formElement.appendChild(lineItems.cloneNode(true));
  });
});

//characters.forEach(character =>{
//  lineItems.appendChild(character);
//  formElement.appendChild(lineItems));
//});