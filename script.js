const openbtn = document.querySelector("#openbtn");
const closebtn = document.querySelector("#closebtn");
const sidebar = document.querySelector(".sidebar");

openbtn.addEventListener("click",
    function () {
        sidebar.classList.add("show");
    }
);
closebtn.addEventListener("click",
    function () {
        sidebar.classList.remove("show");
    }
);