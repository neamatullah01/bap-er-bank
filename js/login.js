document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const pass = passwordField.value;
    console.log(pass);

    if(email === 'sontan@baap.com' && pass === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user')
    }
})