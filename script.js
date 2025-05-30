var btn1 = document.getElementById('feat');
var btn2 = document.getElementById('comp');

var dd1 = document.getElementsByClassName('dropdown-menu1')[0];
var dd2 = document.getElementsByClassName('dropdown-menu2')[0];

btn1.addEventListener('mouseenter', function(){
    dd1.style.display = 'block';
});
btn2.addEventListener('mouseenter', function(){
    dd2.style.display = 'block';
});

var prvidd = document.getElementsByClassName('dropdown')[0];
var drugidd = document.getElementsByClassName('dropdown')[1];

prvidd.addEventListener('mouseout', function(){
    dd1.style.display = 'none';
});

drugidd.addEventListener('mouseout', function(){
    dd2.style.display = 'none';
});

var btnMenu = document.getElementById('menu');
var desnoMenu = document.getElementsByClassName('desnoMenu')[0];
var btnClose = document.getElementById('close');
var btnCareers = document.getElementById('care');
var btnAbout = document.getElementById('abou');
var btnLogin = document.getElementById('login');
var btnRegister = document.getElementById('register');
btnMenu.addEventListener('click', function(){
    desnoMenu.style.display = 'block';
    desnoMenu.appendChild(prvidd);
    desnoMenu.appendChild(dd1);
    desnoMenu.appendChild(drugidd);
    desnoMenu.appendChild(dd2);
    desnoMenu.appendChild(btnCareers);
    desnoMenu.appendChild(btnAbout);
    desnoMenu.appendChild(btnLogin);
    desnoMenu.appendChild(btnRegister);

    prvidd.style.display = 'block';
    drugidd.style.display = 'block';
    btnCareers.style.display = 'block';
    btnAbout.style.display = 'block';
    btnLogin.style.display = 'block';
    btnRegister.style.display = 'block';
    btn1.style.display = 'block';
    btn2.style.display ='block';
    dd1.style.display = 'block';
    dd2.style.display ='block';
});
btnClose.addEventListener('click', function(){
    desnoMenu.style.display = 'none';
});