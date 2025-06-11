// guide--index.html

var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var email = document.getElementById("email")
var checks = document.getElementById("checks")


function validate() {
    var displaymsg = document.getElementById("display-msg")
    var res = true
    if (fname.value == "" || lname.value == "" || email.value == "") {
        alert("Must Fill All The Details...")
        res = false

    } else {
        res = true
    }

    if (checks.checked == false) {
        var error = document.getElementById("error")
        error.style.display = "block"
        res = false

    } else {
        res = true
    }


    if (res == true) {
        displaymsg.style.display = "block"
    }
}


// Contact page
function contact() {
    var cname = document.getElementById("c-name")
    var cemail = document.getElementById("c-email")
    var displaymsg = document.getElementById("display-msg")
    if (cname.value == "" || cemail.value == "") {
        alert("Must fill the required details")
    } else {
        displaymsg.style.display = "block"
    }
}



// Trip page
function load(){
    var loadmore=document.getElementById("load-more")
    loadmore.style.display="flex"
}