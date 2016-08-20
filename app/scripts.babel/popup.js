'use strict';

console.log('\'Allo \'Allo! Popup');

const urls = ['http://youtube.com', 'http://vimeo.com', 'http://vid.me'];


$('#search-btn').on('click', ()=>{

  console.log($('#my-input').val());

  for(var i = 0; i<urls.length; i++){

    //dobila v dokumentaciji od Chroma, pod Tabs
    chrome.tabs.create({}, ()=>{


    });
  }

});
