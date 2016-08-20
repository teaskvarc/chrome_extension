'use strict';

console.log('\'Allo \'Allo! Content script');

let timeout;
let $sidebar;

// vsakih 500ms se bo to ponovilo, dokler ne najde sidebar

function getSidebar() {

  if($sidebar){
    console.log('Found');
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