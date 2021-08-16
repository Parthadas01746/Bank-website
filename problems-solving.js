// got to another page by clicking the button
document.getElementById("sumbit-btn").addEventListener('click', function(){
    var emailfield = document.getElementById("email-field");
    var email = emailfield.value;
    var passwordofield = document.getElementById("passwordo-field");
    var password = passwordofield.value;
    if(email =="partha@gmail.com" && password ==12345){
        window.location.href = "bank.html";
    }
    else(alert("please enter valid email & password"));

    
})
