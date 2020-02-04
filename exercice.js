let date = new Date();
let annee   = date.getFullYear();
let mois    = date.getMonth();
let jourNB    = date.getDate();
let monthTab = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]


document.getElementById('date').innerHTML=jourNB+" "+monthTab[mois]+" "+annee;

function ajaxDemerde(){
    let xhttp = new XMLHttpRequest();
    let test = document.getElementById('title').value;

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            let json = JSON.parse(this.responseText);
            document.getElementById("title_name").innerHTML=json.name;
            $('.deg').html(json.main.temp+"°");
            $('.temp_max').html(json.main.temp_max+"°");
            $('.temp_min').html(json.main.temp_min+"°");
            $('.pres').html(json.main.pressure+"Pa");
            $('.wind').html(json.wind.speed+"Km/h");
            $('.humidite').html(json.main.humidity+"Kg/air");
            $('.long').html(json.coord.lon+"°");
            $('.latt').html(json.coord.lat+"°");
        }
        if ($('#title_name').html = 'undefined'){
            $('#all').css("display", "none");
            $('#title').css("display", "none");
            $('#title_name').css("display", "none");
            $('#sub').css("display", "none");
            $('body').css("background-image", 'url("https://i.ytimg.com/vi/bA5PXRPZ694/maxresdefault.jpg")')
        }
    };

    xhttp.open("GET","script.php?title="+test,true);
    xhttp.send();
}

document.getElementById('sub').addEventListener("click", ajaxDemerde);
