let scoreUser = document.getElementById('score-user');
let formUser = document.getElementById('form-user');
let btnJogar = document.getElementById('btn-jogar');

let myChoice = "";

formUser.addEventListener('change', function(event) {
    myChoice = event.target.value;
});

btnJogar.addEventListener('click', function() {
    alert(myChoice)
});




