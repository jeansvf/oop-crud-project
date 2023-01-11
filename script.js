class Client {
    constructor() {
        this.users = [];
        this.clickedUserId;
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

            client.clientId = Math.floor(Math.random()*1000000);
            tr.setAttribute("client-id", client.clientId);
            
            tdName.textContent = client.clientName;
            tdEmail.textContent = client.clientEmail;
            tdNumber.textContent = client.clientNumber;
            tdCity.textContent = client.clientCity;
            btnEdit.textContent = "edit";
            btnRemove.textContent = "remove";
            
            btnRemove.addEventListener("click", (e) => this.removeClient(e));
            btnEdit.addEventListener("click", (e) => {
                this.showEditMenu(e)
                this.clickedUserId = e.target.parentNode.getAttribute("client-id");
            });
            
            tr.appendChild(tdName);
            tr.appendChild(tdEmail);
            tr.appendChild(tdNumber);
            tr.appendChild(tdCity);
            
            tr.appendChild(btnEdit);
            tr.appendChild(btnRemove);
            
            tableBody.appendChild(tr);
        })
    }

    showEditMenu(e) {
        document.querySelector(".e-modal").classList.add("active"); 
        let nodeClientId = e.target.parentNode.getAttribute("client-id");
        
        for (let i=0; i < this.users.length; i++) {
            if (this.users[i].clientId == nodeClientId) {
                document.querySelector(".e-name-input").value = this.users[i].clientName;
                document.querySelector(".e-email-input").value = this.users[i].clientEmail;
                document.querySelector(".e-number-input").value = this.users[i].clientNumber;
                document.querySelector(".e-city-input").value = this.users[i].clientCity;
            }
        }
    }

    saveEditMenu() {
        for (let i=0; i < this.users.length; i++) {
            if (this.users[i].clientId == this.clickedUserId) {
                this.users[i].clientName = document.querySelector(".e-name-input").value;
                this.users[i].clientEmail = document.querySelector(".e-email-input").value;
                this.users[i].clientNumber = document.querySelector(".e-number-input").value;
                this.users[i].clientCity = document.querySelector(".e-city-input").value;
                document.querySelector(".table-body").innerText = '';
                this.render();
            }
        }
    }

    removeClient(e) {
        let nodeClientId = e.target.parentNode.getAttribute("client-id");
        for (let i=0; i < this.users.length; i++){
            if (this.users[i].clientId == nodeClientId) {
                this.users.splice([i], 1);
            }
        }
        document.querySelector(".table-body").innerText = '';
        this.render();
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

const ebtnSave = document.querySelector(".e-btn-save");
ebtnSave.addEventListener("click", () => {
    client.saveEditMenu();
    eModal.classList.remove("active")});

const eBtnCancel = document.querySelector(".e-btn-cancel");
eBtnCancel.addEventListener("click", () => eModal.classList.remove("active"))

const btnCancel = document.querySelector(".btn-cancel");
btnCancel.addEventListener("click", () => modal.classList.remove("active"));



