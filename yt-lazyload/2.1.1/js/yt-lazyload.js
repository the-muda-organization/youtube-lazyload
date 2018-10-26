/*!
 * Youtube LazyLoad 
 * v.2.1.1
 * https://github.com/the-muda-organization/youtube-lazyload
 * MIT License
 */

(function(){
    var youtube = document.querySelectorAll(".embed-yt-lazy");
    
    for (var i = 0; i < youtube.length; i++){
        
        //youtube thumbnail
		var image = new Image();
                image.src = "https://example.com/youtube/" + youtube[i].dataset.embedYtLazy + youtube[i].dataset.embedYtLazyRandom + ".jpg";
                image.setAttribute("alt","");
                image.classList.add("embed-yt-lazy-img");
                
                //load image after page is loaded (???)
                image.addEventListener("load",function(){
					youtube[i].appendChild(image);
				}(i));
                
        //youtube play btn
        var playbtn = document.createElement('div');
                playbtn.classList.add("embed-yt-lazy-play-btn");
                youtube[i].appendChild(playbtn);
                
        //youtube logo link
        var ytlogo = new Image();
        var ytlogolink =  document.createElement('a');
                ytlogolink.href = "https://youtu.be/" + youtube[i].dataset.embedYtLazy;
                ytlogolink.target = '_blank';
                ytlogo.src = "https://example.com/lib/yt-lazyload/2.1.1/ico/logo.min.svg#" + youtube[i].dataset.embedYtLazyLogo;
                ytlogo.classList.add("embed-yt-lazy-logo");
                ytlogolink.appendChild(ytlogo);
                youtube[i].appendChild(ytlogolink);
        
        
        //create iframe onclick play-btn
        youtube[i].addEventListener("click",function(){
            var iframe = document.createElement("iframe");
                    iframe.setAttribute("src","https://www.youtube-nocookie.com/embed/" + this.dataset.embedYtLazy + "?controls=1&amp;showinfo=0&amp;autoplay=1");
                    iframe.setAttribute("allow","autoplay;encrypted-media");
                    iframe.setAttribute("allowfullscreen","");
                    this.appendChild(iframe);
        });
        
    };
})();