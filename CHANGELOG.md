# *Youtube LazyLoad*
## CHANGELOG:


********************************************************************************
********************************************************************************
###### October 24th, 2019
## v3.1.0 - UPDATE (non-breaking changes)

#### CSS:

###### New feature:
- color logo now has 2 versions - color-dark and color-white (non-breaking change!)

###### Updated:
- play button `background` properties moved from shorthand declaration to `background-position`, `background-size`, `background-position` and `background-image`.
- play button svg had slightly incorrect shape. New image was taken directly from youtube website https://www.youtube.com/about/brand-resources/#logos-icons-colors
- play button dimensions now use `top:0;right:0;bottom:0;left:0;` instead of `width:100%;height:100%`
- logo - new svg from https://www.youtube.com/about/brand-resources/#logos-icons-colors
- logo `background-size:100%` changed to `background-size:contain`
- removed `!important` from properties where it's unnecessary. It is added only to the most important CSS


#### JS:

###### Updated:
- variable names updated to more consistent ones for easier development - prefix `yt_` was added to keep the code clean. This will be usefull in the future in case new and more advanced features will be added.
- iframe source is now set using `element.src = ""` instead of `element.setAttribute('src','');`
- image `alt` attribute is now set using `element.alt = ""` instead of `element.setAttribute('alt','');`


#### OTHER:
- improved documentation


********************************************************************************
###### October 4th, 2019
## v3.0.1 - PATCH

#### JS:
- (#1) - Optimizing Links for Chrome Audits - added `rel = 'noreferrer'`


********************************************************************************
###### August 02, 2019
## v3.0.0 - REBUILT VERSION + BREAKING CHANGES


********************************************************************************
********************************************************************************
********************************************************************************
EARLIER VERSIONS DISCARDED - USE v3.x.x
