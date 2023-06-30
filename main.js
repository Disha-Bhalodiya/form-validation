//for remove error after validation
function clearErrors() {

    errors = document.getElementsByClassName('error');
    for (let item of errors) {
        item.innerHTML = "";
    }


}

//form validation

function validateform() {
    var returnval = true;
    clearErrors();

    var name = document.forms['myform']["fname"].value;
    if (name.length <= 5) {


        document.querySelector(".name-error").innerHTML = "*username should be 6 digit or more";
        document.getElementById("name-error").classList.add("fail");

        returnval = false;
    } else {
        document.getElementById("name-error").classList.add("success");

    }

    var pass = document.forms['myform']["fpass"].value;


    if (pass.match(/[!@#\$%\^&\*]/)) {
        document.getElementById("pass-error").classList.add("success");

    } else {

        document.querySelector(".pass-error").innerHTML = "*one special character required";
        returnval = false;
        document.getElementById("pass-error").classList.add("fail");
    }
    if (pass.match(/[0-9]/)) {
        document.getElementById("pass-error").classList.add("success");

    } else {

        document.querySelector(".pass-error").innerHTML = "*one digit  required";
        returnval = false;
        document.getElementById("pass-error").classList.add("fail");
    }
    var cpassword = document.forms['myform']["fcpass"].value;
    if (cpassword != pass) {

        document.querySelector(".cpass-error").innerHTML = "*Password and Confirm password should same";
        document.getElementById("cpass-error").classList.add("fail");
        returnval = false;
    } else {
        document.getElementById("cpass-error").classList.add("success");
    }
    var phone = document.forms['myform']["fphone"].value;

    if (isNaN(phone)) {

        document.querySelector(".phone-error").innerHTML = "*you can enter only digits";
        document.getElementById("phone-error").classList.add("fail");
        returnval = false;
    } else {
        document.getElementById("phone-error").classList.add("success");
    }

    return returnval;
}