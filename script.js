// variable declaration

var saveButton = document.querySelector(".btn-save");
var nameInput = document.querySelector(".name");
var emailInput = document.querySelector(".email");
var numberInput = document.querySelector(".number");
var cityInput = document.querySelector(".city");
var tableBody = document.querySelector(".table-body");
var warnSpan = document.querySelector(".warn");

var nameValue = "";
var emailValue = "";
var numberValue = "";
var cityValue = "";

// functions

saveButton.addEventListener("click", () => {
    nameValue = nameInput.value;
    emailValue = emailInput.value;
    numberValue = numberInput.value;
    cityValue = cityInput.value;

    if (nameValue !== "" && emailValue !== "" && numberValue !== "" && cityValue !== "") {
    document.querySelector(".modal").classList.remove("active");
    document.querySelector(".dark-background").classList.remove("activebackground");
    createClient();
    } else {
        warnSpan.innerText = "Please make sure all the camps are filled!";
    }
});

function createClient() {
    var clientElement = document.createElement("tr");
    tableBody.appendChild(clientElement);

    var clientName = document.createElement("td");
    clientName.innerText = nameValue;
    clientElement.appendChild(clientName);
    
    var clientEmail = document.createElement("td");
    clientEmail.innerText = emailValue;
    clientElement.appendChild(clientEmail);

    var clientNumber = document.createElement("td");
    clientNumber.innerText = numberValue;
    clientElement.appendChild(clientNumber);

    var clientCity = document.createElement("td");
    clientCity.innerText = cityValue;
    clientElement.appendChild(clientCity);

    var buttonWrapper = document.createElement("td");
    clientElement.appendChild(buttonWrapper);

    var editButton = document.createElement("button");
    editButton.classList.add("btn-edit");
    editButton.innerText = "Edit";
    buttonWrapper.appendChild(editButton);

    var removeButton = document.createElement("button");
    removeButton.classList.add("btn-remove");
    removeButton.innerText = "Remove";
    buttonWrapper.appendChild(removeButton);
}

//basic modal showing function

document.querySelector(".btn-register").addEventListener("click", (_ => {
    document.querySelector(".modal").classList.add("active");
    document.querySelector(".dark-background").classList.add("activebackground");
    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    cityInput.value = "";
    warnSpan.innerText = "";
}));

document.querySelector(".btn-cancel").addEventListener("click", (_ => {
    document.querySelector(".modal").classList.remove("active");
    document.querySelector(".dark-background").classList.remove("activebackground");
}));