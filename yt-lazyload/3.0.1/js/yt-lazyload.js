/*!
 * Youtube LazyLoad 
 * v.3.0.1
 * https://github.com/the-muda-organization/youtube-lazyload
 * MIT License
 */
(function(){
    
    //select all elements with class .yt-lazyload
    var youtube = document.querySelectorAll('.yt-lazyload');
    
    //for each element execute:
    for (var i=0; i<youtube.length; i++){
        
        //VARIABLES
        var data_id     = youtube[i].dataset.id,
            data_random = youtube[i].dataset.random,
            image       = new Image(),
            playbtn     = document.createElement('div'),
            ytlogo      = document.createElement('a');
        
        //thumbnail
        image.classList.add('yt-lazyload-img');
        image.src = 'https://example.com/' + data_id + data_random + '.jpg';
        image.setAttribute('alt','');
        
        //load image after they are loaded
        image.addEventListener('load',function(){
            youtube[i].appendChild(image);
        }(i));
                
        //play btn
        playbtn.classList.add('yt-lazyload-playbtn');
        youtube[i].appendChild(playbtn);
                
        //logo link
        ytlogo.classList.add('yt-lazyload-logo');
        ytlogo.href = 'https://youtu.be/' + data_id;
        ytlogo.target = '_blank';
        ytlogo.rel = 'noreferrer';
        youtube[i].appendChild(ytlogo);
        
        //create iframe onclick play-btn
        youtube[i].querySelector('.yt-lazyload-playbtn').addEventListener('click',function(){
            var container = this.parentElement,
                iframe    = document.createElement('iframe');
                
                iframe.setAttribute('src','https://www.youtube.com/embed/' + container.dataset.id + '?autoplay=1');
                iframe.setAttribute('allow','accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture');
                iframe.setAttribute('allowfullscreen','');
                container.appendChild(iframe);
        });
        
    }
})();
