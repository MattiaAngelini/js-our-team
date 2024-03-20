
//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.

//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe

//BONUS 1:
//Trasformare la stringa foto in una immagine effettiva

//BONUS 2:
//Organizzare i singoli membri in card/schede


//START

//Selettore main nel dom
const grid = document.querySelector('#grid');


//Array di oggetti contenenti informazioni membri del team:
let team = [
    {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      foto: './assets/img/wayne-barnett-founder-ceo.jpg'
    },
    {
      nome: 'Angela Caroll',
      ruolo: 'Chief Editor',
      foto: './assets/img/angela-caroll-chief-editor.jpg'
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      foto: './assets/img/walter-gordon-office-manager.jpg'
    },
    {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      foto: './assets/img/angela-lopez-social-media-manager.jpg'
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      foto: './assets/img/scott-estrada-developer.jpg'
    },
    {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: './assets/img/barbara-ramos-graphic-designer.jpg'
    }
  ];

  //ciclo for per iterare all'interno degli oggetti e stampare i valori delle chiavi.
  for (let i = 0; i < team.length; i++) {
    let member = team[i];
    console.log("Nome:" + member.nome);
    console.log("Ruolo:" + member.ruolo);
    console.log("Alt-Text:" + member.foto);
}
    
// variabile in cui inserisco informazioni membri sottoforma di stringa.
let listDom;

//ciclo For In per stampare informazioni di ogni singolo membro del team.
for (let key in team) {
    const member = team[key];
    console.log(team[member])
    //registro sottoforma di stringhe info membri.
    listDom += `<div>
                    <img class="img-fluid" src="${member.foto}">
                    <h3>${member.nome}</h3>
                    <p>${member.ruolo}</p>
                </div>`;

//stampo nel dom.
grid.innerHTML = listDom;
}





 
  
