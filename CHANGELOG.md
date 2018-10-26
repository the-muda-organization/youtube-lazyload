# Youtube Embed LazyLoad
## CHANGELOG:



###### ??? ??th, 2018
## v.2.x.x - IDEAS

- FIX       - logo-link click makes iframe to load, it should only redirect to youtube
- ADD       - base64 logo instead of external file (???)
- UPDATE    - merge .embed-yt-lazy-play-btn and .embed-yt-lazy-play-btn:hover so background is not repeated  (???)


********************************************************************************
********************************************************************************
###### October 26th, 2018
## v.2.1.1 - PATCH

#### JS:

###### Updated:
- ico folder with youtube logo has new location - it was added to folder 2.1.1 and it's at the same level as css and js folders


********************************************************************************
********************************************************************************
###### October 20th, 2018
## v.2.1.0 - UPDATE

#### CSS:

###### Added:
- css overflow:hidden !important; to container
- css user-select:none !important; to container
- logo has max width for better display

###### Updated:
- background size has value using calc() for better display on smaller screens. Changed from 15% to calc(35px + 10%) to preserve minimum size of 35px
- logo width changed from vw to %
- logo transition is now limited to opacity only
- logo position changed slightly, bottom and right from 3% to 4%

#### JS:

###### Updated:
- logo source in JS was updated with new base directory name


###### Added:

#### OTHER:
- base directory changed name to yt-lazyload
- youtube logo extra minified, file smaller by few bytes



********************************************************************************
********************************************************************************
###### October 17th, 2018
## v.2.0.0 - REWRITE

#### CSS:

###### Updated:
- CSS is now separated from JS and has its own file.
- thumbnail is now positioned relative and generate proper container height
- iframe has position absolute on top of thumbnail
- container can be positioned in bootstrap cards and it will have rounded corners

###### Added:
- custom prefix for all elements .embed-yt-lazy - consistend with Bootstrap .embed classes
- most of CSS has !important attribute to prevent from interference

###### Fixed:
- container and images are now fully responsive
- fixed support for Bootstrap 4 .img-thumbnail class and box-shadow


#### JS:

###### Updated:
- rewrite from scratch
- updated youtube link to nocookie domain

###### Removed:
- CSS was removed from JS


#### OTHER:
- suport in Hermes CSS & JS Library
- files has new name - yt-lazyload


********************************************************************************
********************************************************************************
********************************************************************************
###### July 14th, 2018
## v.1.0.2 - PATCH

###### Updated:
- custom data attributes
- updated CSS

###### Added:
- support for more than 1 thumbnail using random data attribute
- youtube logo can have 3 colors: white, black and red



********************************************************************************
********************************************************************************
###### June 27th, 2018
## v.1.0.1 - PATCH

###### Updated:
- thumbnail source from another subdomain
- youtube logo new svg



********************************************************************************
********************************************************************************
###### May 27th, 2018
## v.1.0.0 - INITIAL RELEASE
