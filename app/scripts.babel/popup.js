'use strict';

console.log('\'Allo \'Allo! Popup');

/*

const urls = ['http://youtube.com/results?search_query=', 'http://vimeo.com/search?q=',
  'http://vid.me/search?q=','http://www.google.si/#q='];


$('#search-btn').on('click', ()=>{

  const term = $('#my-input').val();

  for(var i = 0; i < urls.length; i++){

    //dobila v dokumentaciji od Chroma, pod Tabs
    chrome.tabs.create({
      url:urls[i]+term
    }, ()=>{

    });
  }

});

*/

$('#search-btn').on('click', ()=>{

  const from = $('#from-input').val();
  const to = $('#to-input').val();

  // rabimo odpreti novi tab

  chrome.tabs.create({ url: `https://www.google.si/maps/dir/${from}/${to}/` });

});