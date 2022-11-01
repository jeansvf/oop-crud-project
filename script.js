document.querySelector(".btn-register").addEventListener("click", (_ => {
    document.querySelector(".modal").classList.add("active");
    document.querySelector(".dark-background").classList.add("activebackground");
}));

document.querySelector(".btn-cancel").addEventListener("click", (_ => {
    document.querySelector(".modal").classList.remove("active");
    document.querySelector(".dark-background").classList.remove("activebackground");
}));
