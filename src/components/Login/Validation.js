const maliZaEmail = document.getElementById('small-za-gresku-email');
const maliZaPassword = document.getElementById('small-za-gresku-password');

const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');

const regExMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const forma = document.getElementById('forma_login');
const submitDugme = document.getElementById('submit');

function daLiJeUnet(pomocna)
{
    if(pomocna.value === '')
    {
        return false;
    }
    else
    {
        return true;
    }
}

function daLiJeIspravanMejl()
{
    let ispravan;

    if(daLiJeUnet(inputEmail) === true)
    {
        ispravan = regExMail.test(inputEmail.value);

        if(ispravan === false)
        {
            maliZaEmail.innerHTML = 'Incorrect e-mail adress!';
            inputEmail.style.borderWidth = '3px';
            inputEmail.style.borderColor = 'red';

            return false;
        }
        else if(ispravan === true)
        {
            porukaZaIspravno(inputEmail);
            return true;
        }

    }
    else if(daLiJeUnet(inputEmail) === false)
    {
        porukaZaGresku(inputEmail);
        return false;
    }
}

function daLiJeIspravanPassword()
{
    let ispravan;

    if(daLiJeUnet(inputPassword) === true)
    {
        ispravan = regExPassword.test(inputPassword.value);

        if(ispravan === false)
        {
            maliZaPassword.innerHTML = 'Incorrect password';
            inputPassword.style.borderWidth = '3px';
            inputPassword.style.borderColor = 'red';

            return false;
        }
        else if(ispravan === true)
        {
            porukaZaIspravno(inputPassword);
            return true;
        }

    }
    else if(daLiJeUnet(inputPassword) === false)
    {
        porukaZaGresku(inputPassword);
        return false;
    }
}

function porukaZaGresku(gde)
{
    if(gde === inputEmail)
    {
        inputEmail.style.borderColor = 'red';
        inputEmail.style.borderWidth = '3px';
        maliZaEmail.innerHTML = 'Niste uneli e-mail adresu';
    }
    else if(gde === inputPassword)
    {
        inputPassword.style.borderColor = 'red';
        inputPassword.style.borderWidth = '3px';
        maliZaPassword.innerHTML = 'Niste uneli lozinku';
    }
}

function porukaZaIspravno(gde)
{
    if(gde === inputEmail)
    {
        maliZaEmail.innerHTML = '';
        inputEmail.style.borderWidth = '3px';
        inputEmail.style.borderColor = 'green';
    }
    else if(gde === inputPassword)
    {
        maliZaPassword.innerHTML = '';
        inputPassword.style.borderWidth = '3px';
        inputPassword.style.borderColor = 'green';
    }
}

forma.addEventListener
('submit', 

    function (event)
    {
        event.preventDefault();
        let pomocEmail = daLiJeIspravanMejl();
        let pomocPassword = daLiJeIspravanPassword();

        let uspesno = pomocEmail && pomocPassword;

        if(uspesno === true)
        {
            inputEmail.value = '';
            inputPassword.value = '';
        }

    }
);






