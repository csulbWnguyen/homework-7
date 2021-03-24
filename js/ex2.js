// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];

iSuggestion = document.getElementById("suggestions");
cUserInput = document.getElementById("country");

const suggestInput = country =>{
  const division = document.createElement("div");
  division.classList.add("suggestion");
  division.addEventListener("click",e=> {
    cUserInput.value = e.target.textContent;
    cUserInput.innerHTML="";
  })
  return division;
};

