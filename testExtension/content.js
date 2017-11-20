    var images = document.getElementsByTagName('img');
    for (let i = 0, l = images.length; i < l; i++) {
      images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
    }

    var element = document.getElementsByTagName('p');//grab all element tags
    for(let i = 0, l = element.length; i < l; i++){
      element[i].innerHTML = "I'm Pickle Rick!!!!!!!!!!!!!!!";
    }
