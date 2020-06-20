/*!
 * Youtube LazyLoad 
 * v4.0.0
 * https://github.com/the-muda-organization/youtube-lazyload
 * MIT License
 */

(function(){
    
    /********************************************************************
    ************************** MAIN VARIABLES ***************************
    *********************************************************************/
    var youtube = document.querySelectorAll('.yt-lazyload'),
    
        youtube_observer,                                               //Intersection Observer API
        
        template_wrap,
        template_content,
        template_playbtn,
        template_logo,
        template_iframe,
        
        settings_observer_rootMargin    = '200px 0px',                  //Intersection Observer API option - rootMargin (Y, X)
        settings_thumb_base_url         = 'https://raw.githubusercontent.com/the-muda-organization/youtube-lazyload/master/demo-img/',     //Base URL where thumbnails are stored
        settings_thumb_extension        = 'jpg';                        //Thumbnail extension
        
    
    
    /********************************************************************
    ************************ IF ELEMENTS EXIST **************************
    *********************************************************************/
    if(youtube.length > 0){
        
        //create elements
        template_wrap       = document.createElement('div');
        template_content    = document.createElement('div');
        template_playbtn    = document.createElement('div');
        template_logo       = document.createElement('a');
        template_iframe     = document.createElement('iframe');
        
        //set attributes
        template_wrap.classList.add('yt-lazyload-wrap');
        template_content.classList.add('yt-lazyload-content');
        
        template_playbtn.classList.add('yt-lazyload-playbtn');
        
        template_logo.classList.add('yt-lazyload-logo');
        template_logo.target = '_blank';
        template_logo.rel    = 'noreferrer';
        
        template_iframe.setAttribute('allow','accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture');
        template_iframe.setAttribute('allowfullscreen','');
        
        
        /********************************************************************
        ********************* INTERSECTION OBSERVER API *********************
        *********************************************************************/
        youtube_observer = new IntersectionObserver(function(elements){
        
            elements.forEach(function(e){
                
                //VARIABLES
                var this_element    = e.target,
                    
                    this_wrap,
                    this_content,
                    this_playbtn,
                    this_logo,
                    this_iframe,
                    
                    this_data_id    = e.target.dataset.id,
                    this_data_thumb = e.target.dataset.thumb,
                    this_data_logo  = e.target.dataset.logo;
                
                
                //if element appears in viewport
                if(e.isIntersecting === true){
                    
                    //wrap
                    this_wrap = template_wrap.cloneNode();
                    this_element.append(this_wrap);
                    
                    //content
                    this_content = template_content.cloneNode();
                    this_wrap.append(this_content);
                    
                    //background-image
                    this_content.style.setProperty('--yt-lazyload-img','url("' + settings_thumb_base_url + this_data_id + this_data_thumb + '.' + settings_thumb_extension + '")');
                    
                    //play btn
                    this_playbtn = template_playbtn.cloneNode();
                    this_content.append(this_playbtn);
                    
                    //logo link
                    if(this_data_logo !== '0'){
                        this_logo       = template_logo.cloneNode();
                        this_logo.href  = 'https://youtu.be/' + this_data_id;
                        this_content.append(this_logo);
                    }
                    
                    //onclick create iframe
                    this_playbtn.addEventListener('click',function(){
                        this_iframe     = template_iframe.cloneNode();
                        this_iframe.src = 'https://www.youtube.com/embed/' + this_data_id + '?autoplay=1';
                        this_content.append(this_iframe);
                    });
                    
                    //Unobserve after image lazyloaded
                    youtube_observer.unobserve(this_element);
                    
                    //LOG
                    //console.log('DONE - ' + this_data_id);
                }
                
            });
            
        },{
            rootMargin: settings_observer_rootMargin,
        });
        
        
        /********************************************************************
        ********************* ITERATE THROUGH ELEMENTS **********************
        *********************************************************************/
        youtube.forEach(function(e){
            
            //Intersection Observer API - observe elements
            youtube_observer.observe(e);
            
        });
    }
    
})();
