/*
what do i still wanna do here?

fix: when you click to remove a client it still doesnt remove from the array
so it will cause a bug where when you register another client the removed client will
return. im not 100% sure that the problem is that the user doesnt get removed from the
array but fix this anyway too

fix: when you edit a user the other created users get editted too

feature: make a nice transition for when you open/close modals

feature: better the message that informs you that you dont have users registered, make it
bigger and put it in the middle. a low opacity would be great

feature: better the color of the new client modal
*/

// variable declaration

var saveButton = document.querySelector(".btn-save");
var nameInput = document.querySelector(".name");
var emailInput = document.querySelector(".email");
var numberInput = document.querySelector(".number");
var cityInput = document.querySelector(".city");
var tableBody = document.querySelector(".table-body");
var modalWarn = document.querySelector(".modal-warn");

var eModalNameInput = document.querySelector(".e-name");
var eModalEmailInput = document.querySelector(".e-email");
var eModalNumberInput = document.querySelector(".e-number");
var eModalCityInput = document.querySelector(".e-city");
var eModalSaveButton = document.querySelector(".e-btn-save");
var eModalWarn = document.querySelector(".e-warn");
var tableBodyChildrenLenght;

var users = new Array;
class blueprint {
    constructor(userName, userEmail, userNumber, userCity) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userNumber = userNumber;
        this.userCity = userCity;
}
}

// functions

const tableBodyCount = () => {
    if(tableBodyChildrenLenght == undefined || tableBodyChildrenLenght == 0) {
        var RegisterWarn = document.createElement("p");
        RegisterWarn.innerText = "You dont have any registered users yet. Click on 'Register Client' to register one";
        tableBody.appendChild(RegisterWarn);
    }
}

const createTableElement = (name, email, number, city) => {
    var clientElement = document.createElement("tr");
    tableBody.appendChild(clientElement);
    
    var clientName = document.createElement("td");
    clientName.innerText = name;
    clientElement.appendChild(clientName);
    
    var clientEmail = document.createElement("td");
    clientEmail.innerText = email;
    clientElement.appendChild(clientEmail);
    
    var clientNumber = document.createElement("td");
    clientNumber.innerText = number;
    clientElement.appendChild(clientNumber);
    
    var clientCity = document.createElement("td");
    clientCity.innerText = city;
    clientElement.appendChild(clientCity);
    
    var buttonWrapper = document.createElement("td");
    clientElement.appendChild(buttonWrapper);

    var editButton = document.createElement("button");
    editButton.classList.add("btn-edit");
    editButton.innerText = "Edit";
    buttonWrapper.appendChild(editButton);
    editButton.addEventListener("click", () => {
        document.querySelector(".e-modal").classList.add("active");
        document.querySelector(".dark-background").classList.add("activebackground");
        eModalNameInput.value = clientName.innerText;
        eModalEmailInput.value = clientEmail.innerText;
        eModalNumberInput.value = clientNumber.innerText;
        eModalCityInput.value = clientCity.innerText;
        eModalWarn.innerText = "";
    })

    var removeButton = document.createElement("button");
    removeButton.classList.add("btn-remove");
    removeButton.innerText = "Remove";
    buttonWrapper.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
        clientElement.remove();
        tableBodyChildrenLenght = tableBody.children.length;
        tableBodyCount();
        // add: the element needs to get removed from the array too
    })

    eModalSaveButton.addEventListener("click", () => {
        if (eModalNameInput.value !== "" && eModalEmailInput.value !== "" && eModalNumberInput.value !== "" && eModalCityInput.value !== "") {
        clientName.innerText = eModalNameInput.value;
        clientEmail.innerText = eModalEmailInput.value;
        clientNumber.innerText = eModalNumberInput.value;
        clientCity.innerText = eModalCityInput.value;
        document.querySelector(".e-modal").classList.remove("active");
        document.querySelector(".dark-background").classList.remove("activebackground");
        } else {
            eModalWarn.innerText = "Please make sure all the camps are filled!"
        }
    })
}

saveButton.addEventListener("click", () => {
    if (nameInput.value !== "" && emailInput.value !== "" && numberInput.value !== "" && cityInput.value !== "") {
        document.querySelector(".modal").classList.remove("active");
        document.querySelector(".dark-background").classList.remove("activebackground");
        tableBody.innerHTML = "";
        users.push(new blueprint(nameInput.value, emailInput.value, numberInput.value, cityInput.value));
        users.forEach((e) => {
            createTableElement(e.userName, e.userEmail, e.userNumber, e.userCity);
        });
    } else{
        modalWarn.innerText = "Please make sure all the camps are filled!";
    }
});

tableBodyCount();

//registerModal showing functions

document.querySelector(".btn-register").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("active");
    document.querySelector(".dark-background").classList.add("activebackground");
    nameInput.value = "";
    emailInput.value = "";
    numberInput.value = "";
    cityInput.value = "";
    modalWarn.innerText = "";
})

document.querySelector(".btn-cancel").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("active");
    document.querySelector(".dark-background").classList.remove("activebackground");
})

//editModal disappearing functions

document.querySelector(".e-btn-cancel").addEventListener("click", () => {
    document.querySelector(".e-modal").classList.remove("active");
    document.querySelector(".dark-background").classList.remove("activebackground");
})