    function akcja() {
        var wynik = document.getElementById("wynik").innerHTML;

        
        var imie = document.querySelector('input[name="imie"]').value;
        var nazwisko = document.querySelector('input[name="nazwisko"]').value;
        var email = document.querySelector('input[name="email"]').value.toLowerCase();

     
        wynik += "Imię i nazwisko: " + imie + " " + nazwisko + "<br>" + "Adres email: " + email;


    }

