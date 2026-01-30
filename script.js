// .................Questions And Answers............
var ques = document.getElementsByClassName("question");
var i;

for (i = 0; i < ques.length; i++) {
    ques[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle
            ("active");


        var answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }

    });
}
// ..................ResponseNav...............

const responseNavBarIcon = document.querySelector(".responseNavBarIcon");
const responseNavBarIconx = document.querySelector(".responseNavBarIcon i");
const navsResponse = document.querySelector(".navsResponse");
responseNavBarIcon.addEventListener('click', function () {
    navsResponse.classList.toggle("navsResponseOpen");
    const navsResponseIsOpen = navsResponse.classList.contains("navsResponseOpen");
    responseNavBarIconx.classList = navsResponseIsOpen ? "fa-solid fa-x" : "fa-solid fa-bars";

})
//.................All button alert.....................

document.getElementById("homeBtn").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})

document.getElementById("aboutBtn").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})

document.getElementById("productBtn").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})

document.getElementById("collectionBtn").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})

document.getElementById("contactBtn").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})
document.getElementById("homeBtnResp").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})

document.getElementById("aboutBtnResp").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})

document.getElementById("productBtnResp").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})

document.getElementById("collectionBtnResp").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})

document.getElementById("contactBtnResp").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})

document.getElementById("loginBtn").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})
document.getElementById("shopNowBtn").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})
document.getElementById("contactBtn2").addEventListener('click', function () {
    alert("This Feature is not Available at the Moment.... ");
})

// .......................Animation........................

