class Client {
    constructor() {
        this.users = [];
    }

    render() {
        this.users.forEach((client) => {
            let tableBody = document.querySelector(".table-body");
            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdEmail = document.createElement("td");
            let tdNumber = document.createElement("td");
            let tdCity = document.createElement("td");
            let btnEdit = document.createElement("button");
            let btnRemove = document.createElement("button");
            btnEdit.classList.add("btn-edit");
            btnRemove.classList.add("btn-remove");
            
            tdName.textContent = client.clientName;
            tdEmail.textContent = client.clientEmail;
            tdNumber.textContent = client.clientNumber;
            tdCity.textContent = client.clientCity;
            btnEdit.textContent = "edit";
            btnRemove.textContent = "remove";
            
            btnRemove.addEventListener("click", (e) => e.target.parentNode.remove());
            btnEdit.addEventListener("click", () => this.editClient());
            
            tr.appendChild(tdName);
            tr.appendChild(tdEmail);
            tr.appendChild(tdNumber);
            tr.appendChild(tdCity);
            
            tr.appendChild(btnEdit);
            tr.appendChild(btnRemove);
            
            tableBody.appendChild(tr);
        })
    }

    editClient() {
        document.querySelector(".e-modal").classList.add("active");
        // ...
    }

    addClient() {
        let client = this.readData();

        if(this.checkFields(client)) {
        this.users.push(client);
        document.querySelector(".table-body").innerText = '';
        this.render();
        }
    }

    readData() {
        let client = {};

        client.clientName = document.querySelector(".name-input").value;
        client.clientEmail = document.querySelector(".email-input").value;
        client.clientNumber = document.querySelector(".number-input").value;
        client.clientCity = document.querySelector(".city-input").value;

        return client;
    }

    checkFields(client) {
        let msg = '';

        if(client.clientName == '') {
            msg += "type the user's name\n"
        }
        if(client.clientEmail == ''){
            msg += "type the user's email\n";
        }
        if(client.clientNumber == ''){
            msg += "type the user's number\n";
        }
        if(client.clientCity == ''){
            msg += "type the user's city";
        }

        if(msg != '') {
            console.log(msg);
            return false;
        }
        return true;
    }
}

var client = new Client;

// event listeners

const modal = document.querySelector(".modal");
const btnSave = document.querySelector(".btn-save");
btnSave.addEventListener("click", () => {
    client.addClient();
    modal.classList.remove("active");
})

const modalContent1 = document.querySelector(".modal-content-1");
const modalContent2 = document.querySelector(".modal-content-2");
const btnRegister = document.querySelector(".btn-register");
btnRegister.addEventListener("click", () => {
    modal.classList.add("active");
    modalContent1.childNodes.forEach(child => {
        child.value='';
    })
    modalContent2.childNodes.forEach(child => {
        child.value='';
    })
});

const eModal = document.querySelector(".e-modal");
const eBtnCancel = document.querySelector(".e-btn-cancel");
eBtnCancel.addEventListener("click", () => eModal.classList.remove("active"))

const btnCancel = document.querySelector(".btn-cancel");
btnCancel.addEventListener("click", () => modal.classList.remove("active"));



