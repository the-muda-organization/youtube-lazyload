/*!
 * Youtube LazyLoad 
 * v3.1.0
 * https://github.com/the-muda-organization/youtube-lazyload
 * MIT License
 */

(function(){
    
    //select all elements with class .yt-lazyload
    var youtube = document.querySelectorAll('.yt-lazyload');
    
    //for each element execute:
    for(var i=0; i<youtube.length; i++){
        
        //VARIABLES
        var data_id     = youtube[i].dataset.id,
            data_random = youtube[i].dataset.random,    //TO DO: In future versions - change to data_thumb [breaking change!!!] [??????]
            yt_image    = new Image(),
            yt_playbtn  = document.createElement('div'),
            yt_logo     = document.createElement('a');
        
        //image - thumbnail
        yt_image.classList.add('yt-lazyload-img');
        yt_image.src = 'https://example.com/' + data_id + data_random + '.jpg';
        yt_image.alt = '';
        
        //load thumbail after they are loaded
        yt_image.addEventListener('load',function(){
            youtube[i].appendChild(yt_image);
        }(i));
                
        //play btn
        yt_playbtn.classList.add('yt-lazyload-playbtn');
        youtube[i].appendChild(yt_playbtn);
                
        //logo link
        //TO DO: In future versions - if data-logo="0" do not create this [??????]
        yt_logo.classList.add('yt-lazyload-logo');
        yt_logo.href    = 'https://youtu.be/' + data_id;
        yt_logo.target  = '_blank';
        yt_logo.rel     = 'noreferrer';
        youtube[i].appendChild(yt_logo);
        
        //create iframe onclick play-btn
        youtube[i].querySelector('.yt-lazyload-playbtn').addEventListener('click',function(){
            var yt_container = this.parentElement,
                yt_iframe    = document.createElement('iframe');
                
                yt_iframe.src = 'https://www.youtube.com/embed/' + yt_container.dataset.id + '?autoplay=1';
                yt_iframe.setAttribute('allow','accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture');
                yt_iframe.setAttribute('allowfullscreen','');
                yt_container.appendChild(yt_iframe);
        });
        
    }
})();
