// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("http://localhost:5678/api/works");
const travaux = await reponse.json();
console.log(travaux);


// Creation des balises
function genenertravaux (travaux){ 
for (let i = 0; i < travaux.length; i++) {
    const figure = travaux[i];
    const divGalery = document.querySelector(".gallery");
const sectionfigure = document.createElement('figure');

const imageElement = document.createElement("img");
imageElement.src = figure.imageUrl;
const nomElement = document.createElement("figcaption");
nomElement.innerText = figure.title;



divGalery.appendChild(sectionfigure);
sectionfigure.appendChild(imageElement);
sectionfigure.appendChild(nomElement);

}
}
genenertravaux(travaux);


/*const boutonEffacer = document.querySelector('#btn-4');
boutonEffacer.addEventListener('click',function(){
    document.querySelector('.gallery').innerHTML= "";
})*/


const boutonTous = document.querySelector('#btn-1');
boutonTous.addEventListener('click',function(){
    const tout =travaux.filter(function(tous){
        return tous
    });
    console.log(tout);
    document.querySelector('.gallery').innerHTML="";
    genenertravaux(tout);
});

const boutonObject = document.querySelector('#btn-2');
boutonObject.addEventListener('click',function(){
    const objects =travaux.filter(function(tous){
        return tous.categoryId===1;
    });
    console.log(objects);
    document.querySelector('.gallery').innerHTML="";
    genenertravaux(objects);
});


const boutonAppartement = document.querySelector('#btn-3');
boutonAppartement.addEventListener('click',function(){
    const appartements=travaux.filter(function(tous){
        return tous.categoryId===2;
    });
    console.log(appartements);
    document.querySelector('.gallery').innerHTML="";
    genenertravaux(appartements);
});

const boutonHotel = document.querySelector('#btn-4');
boutonHotel.addEventListener('click',function(){
    const hotels=travaux.filter(function(tous){
        return tous.categoryId===3;
    });
    console.log(hotels);
    document.querySelector('.gallery').innerHTML="";
    genenertravaux(hotels);
});

const userStock = window.localStorage.getItem("user");
if(userStock){
    const login = document.querySelector("#login");
    login.innerText= "logOut";
    login.addEventListener("click", function (){
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("token");
        console.log("hello")
    })
    const ban = document.querySelector('.ban');
    ban.style.display="block";
}







