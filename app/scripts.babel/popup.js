'use strict';

console.log('\'Allo \'Allo! Popup');

const urls = ['http://youtube.com/results?search_query=', 'http://vimeo.com/search?q=', 'http://vid.me/search?q='];


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
