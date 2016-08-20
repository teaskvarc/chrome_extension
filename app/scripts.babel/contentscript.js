'use strict';

console.log('\'Allo \'Allo! Content script');

let timeout;
let $sidebar;

// vsakih 500ms se bo to ponovilo, dokler ne najde sidebar

function getSidebar() {

  if($sidebar && $sidebar[0] !== undefined){
    console.log('Found: ', $sidebar[0]);
    clearTimeout(timeout);
    init();

  }else{
    timeout = setTimeout(()=>{

      console.log('Not found');

      $sidebar = $('.window-sidebar');

      getSidebar();

    }, 500);
  }
}
getSidebar();


// tale init pozenemo, ko je sidebar pripravljen

function init() {

  //naredimo container(izhajamo iz html od Trella, uporabljam jQuery)
  let $trackerContainer = $('<div>', { class: 'window-module u-clearfix'});

  // kot h3 dodamo svoj text, gumb se bo imenoval: Tracker
  let $trackerTitle = $('<h3>', { text: 'Tracker'});
  let $buttonContainer = $('<div>', { class: 'u-clearfix' });
  let $button = $('<a>', { class: 'button-link', text: 'Start tracking'});

  $buttonContainer.append($button);

  //s tem dodamo title v container. lahko dodajamo vec stvari
  $trackerContainer.append($trackerTitle, $buttonContainer);

  // v sidebar, ki smo ga ze zgoraj poklicali dodamo se tale container
  // ko damo .append, se nam pojavi cisto na dnu,
  //ce zelimo, da se nam pojavi na vrhu damo .prepend
  $sidebar.prepend($trackerContainer);

  $button.on('click', ()=>{

    alert('Hello user!');

  });
}








// s tem dostopamo do vsebine od HTML body
// na katero koli spletno stran bomo sli nam bo log-al body
// celoten HTML od strani na katero smo prisli

// contentscript ima dostop do DOM (vseh elemtentov znotraj strani na katero smo prisli )
// file: manifest.json je na VRHU vsega in tam se pozene ta skripta - to smo pri zacetni nastavitvi
// dolocili katere vse permissions dovoljujejo
// content_scripts = imamo array objektov, v "matches" dolocimo = ce bi zeleli za vsako domeno pognati drugi
// content script to tukaj dolocimo

//console.log(document.body);