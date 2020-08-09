# *Youtube LazyLoad*
## CHANGELOG:


********************************************************************************
###### August 8th, 2020
## v4.0.1 - PATCH

#### CSS:
- Fixed youtube play button in `.yt-lazyload-playbtn` and `.yt-lazyload-playbtn:hover`. New SVG comes from youtube website.
- Fixed SVG - removed charset utf8 from `background-image` as it is not required. Modifications in `.yt-lazyload[data-logo="X"] .yt-lazyload-logo`


********************************************************************************
###### June 20th, 2020
## v4.0.0 - NEW VERSION (REBUILT FROM SCRATCH + 1 SMALL BREAKING CHANGE)

#### CSS:
- changed layout so that container maintains 16/9 ratio even if JS not loaded
- thumbnails are loaded as `background-image` using style attributes and CSS variables.

#### JS:
- rebuilt from scratch
- added lazyload (using Intersection Observer API - https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- youtube logo & link not added when `data-logo="0"`
- important settings moved to variables at the beginning of JS file

#### OTHER:
- improved documentation
- DEMO - Bootstrap updated to v5

#### UPDATE from v3:
`data-random=""` attribute was renamed to `data-thumb=""` just to be more intuitive.

Change: `<div class="yt-lazyload" data-id="XXXXXXXX" data-random="" data-logo="1">`

to: `<div class="yt-lazyload" data-id="XXXXXXXX" data-thumb="" data-logo="1">`

If you don't like this change, change `dataset.thumb` to `dataset.random` in JS file.


********************************************************************************
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
- [(#1)](https://github.com/the-muda-organization/youtube-lazyload/issues/1) - Optimizing Links for Chrome Audits - added `rel = 'noreferrer'`


********************************************************************************
###### August 02, 2019
## v3.0.0 - REBUILT VERSION + BREAKING CHANGES


********************************************************************************
********************************************************************************
********************************************************************************
EARLIER VERSIONS DISCARDED - USE v3.x.x
