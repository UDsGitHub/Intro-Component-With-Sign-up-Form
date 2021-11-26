const form = document.querySelector('form');
const fname = document.querySelector('.first-name');
const lname = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailVal = email.value.trim();
    var passwordVal = password.value.trim();

    // first name check
    if (firstName == ''){
        errorFunc(fname, 'First Name cannot be empty');
    }else{
        successFunc(fname);
    }
    // last name check
    if (lastName == ''){
        errorFunc(lname, 'Last Name cannot be empty');
    }else{
        successFunc(lname);
    }
    // email check
    if (!validateEmail(emailVal)){
        errorFunc(email, 'Looks Like this is not an email');
    }else{
        successFunc(email);
    }
    // first name check
    if (passwordVal == '') {
      errorFunc(password, "Password cannot be empty");
    } else {
      successFunc(password);
    }
})

function errorFunc(elem, message){
    elem.classList.add('error');
    elem.nextElementSibling.className += 'error-text';
    elem.nextElementSibling.innerText = message;
}

function successFunc(elem){
    elem.classList.remove('error');
    elem.nextElementSibling.className = '';
    elem.nextElementSibling.innerText = '';
}

function validateEmail(e) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(e).toLowerCase());
}

function validatePassword(p){
    const re =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return re.test(String(e).toLowerCase());
}