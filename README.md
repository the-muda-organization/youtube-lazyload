# Youtube LazyLoad
LazyLoad Embed Youtube Player - simple and lightweight plugin - pure JS


********************************************************************************
## Status
[![Latest Stable Version](https://poser.pugx.org/the-muda-organization/youtube-lazyload/version)](https://packagist.org/packages/the-muda-organization/youtube-lazyload)
[![Latest Unstable Version](https://poser.pugx.org/the-muda-organization/youtube-lazyload/v/unstable)](https://packagist.org/packages/the-muda-organization/youtube-lazyload)

[![Total Downloads](https://poser.pugx.org/the-muda-organization/youtube-lazyload/downloads)](https://packagist.org/packages/the-muda-organization/youtube-lazyload)
[![Monthly Downloads](https://poser.pugx.org/the-muda-organization/youtube-lazyload/d/monthly)](https://packagist.org/packages/the-muda-organization/youtube-lazyload)
[![Daily Downloads](https://poser.pugx.org/the-muda-organization/youtube-lazyload/d/daily)](https://packagist.org/packages/the-muda-organization/youtube-lazyload)

[![CSS gzip size](https://img.badgesize.io/the-muda-organization/youtube-lazyload/master/yt-lazyload/3.0.0/css/yt-lazyload.min.css?compression=gzip&label=CSS+gzip+size)](https://github.com/the-muda-organization/youtube-lazyload/yt-lazyload/3.0.0/css/yt-lazyload.min.css)
[![JS gzip size](https://img.badgesize.io/the-muda-organization/youtube-lazyload/master/yt-lazyload/3.0.0/js/yt-lazyload.min.js?compression=gzip&label=JS+gzip+size)](https://github.com/the-muda-organization/youtube-lazyload/yt-lazyload/3.0.0/css/yt-lazyload.min.js)

[![License Code](https://poser.pugx.org/the-muda-organization/youtube-lazyload/license)](https://packagist.org/packages/the-muda-organization/youtube-lazyload)


## [View Preview](http://htmlpreview.github.io/?https://github.com/the-muda-organization/youtube-lazyload/blob/master/DEMO.html)
<img src="https://github.com/the-muda-organization/youtube-lazyload/blob/master/PREVIEW.jpg?raw=true" alt="" style="width:100%;display:block;">


********************************************************************************
## Table of contents
- [Status](#status)
- [Quick Start](#quick-start)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Installation](#installation)
- [How to Use](#how-to-use)
- [Features](#features)
- [CSS Classes](#css-classes)
- [Versioning](#versioning)
- [Changelog](#changelog)
- [Team](#team)
- [Code of Conduct](#code-of-conduct)
- [Copyright and License](#copyright-and-license)


********************************************************************************
## Quick Start

Several options are available:
- [Download the latest release.](https://github.com/the-muda-organization/youtube-lazyload/archive/master.zip)
- Clone the repo: `git clone https://github.com/the-muda-organization/youtube-lazyload.git`
- Install with [Composer](https://getcomposer.org/): `composer require the-muda-organization/youtube-lazyload`


********************************************************************************
## What's included
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

There are no dependencies. No jQuery or other plugins required. See below for [Installation Guide](#installation) and [How to Use](#how-to-use)
```
yt-lazyload/
 │
 └─ 3.x.x/
    │
    ├── css/
    │   ├── yt-lazyload.css
    │   └── yt-lazyload.min.css
    │
    └── js/
        ├── yt-lazyload.js
        └── yt-lazyload.min.js
```


********************************************************************************
## Bugs and feature requests
Have a bug or a feature request? Before opening a new issue search for existing and closed issues. If your problem or idea is not addressed yet, [open a new issue](https://github.com/the-muda-organization/youtube-lazyload/issues/new).


********************************************************************************
## Installation

1. Download and copy files to your project
2. Open [yt-lazyload.js](https://github.com/the-muda-organization/youtube-lazyload/blob/master/yt-lazyload/3.0.0/js/yt-lazyload.js)
3. Change: **line 24** "https://example.com/" to custom folder to store your thumbnails.<br>I am not sure if it will work in all cases, but you may use youtube domain https://img.youtube/vi/**VIDEO-ID**/maxresdefault.jpg
4. Minify JS and place it in [yt-lazyload.min.js](https://github.com/the-muda-organization/youtube-lazyload/blob/master/yt-lazyload/3.0.0/js/yt-lazyload.min.js) or simply find variable and change to your domain.
5. Add CSS and JS to your project:
```html
    <link href="https://example.com/yt-lazyload/3.x.x/css/yt-lazyload.min.css" rel="stylesheet">
    <script src="https://example.com/yt-lazyload/3.x.x/js/yt-lazyload.min.js"></script>
```


********************************************************************************
## How to Use

1. Get Youtube ID of your movie, example: ``d4AmYBhGBfM``
2. Add the folowing code to embed a video:
```html
<div class="yt-lazyload" data-id="d4AmYBhGBfM" data-random="" data-logo="3"></div>
```
3. Name your thumbnail using Youtube ID ``d4AmYBhGBfM.jpg`` - to use other file types change file type in JS file
4. Place your thumbnail in a folder specified in JS file


********************************************************************************
## Features

Attribute | Explanation
------------ | -------------
``class="yt-lazyload"``   | Main container. You can add additional styling classes ex. border, box-shadow etc.
``data-id="d4AmYBhGBfM"`` | Youtube video ID
``data-random=""``        | If you need to add more thumbnails here you can randomize which one is displayed. Name your files ``d4AmYBhGBfM.jpg`` adding custom suffix. For 3 thumbnails make ``d4AmYBhGBfM--1.jpg``, ``d4AmYBhGBfM--2.jpg`` and  ``d4AmYBhGBfM--3.jpg``. To show thumbnail 2 use ``data-random="--2"`` and so on. You can randomize numbers using ``<?php echo mt_rand(1,3);?>``. Leave empty if you have only 1 thumbnail.
``data-logo="3"``         | Youtube logo color. Available: 0=none, 1=black, 2=red, 3=white. You can customize it in CSS file.


********************************************************************************
## CSS Classes

CSS class                                          | Explanation
------------                                       | -------------
``.yt-lazyload``                                   | main container
``.yt-lazyload-img``                               | thumbnail
``.yt-lazyload-playbtn``                           | play button (black)
``.yt-lazyload-playbtn:hover``                     | play button on hover (red)
``.yt-lazyload-logo``                              | Youtube logo
``.yt-lazyload-logo:hover``                        | Youtube logo on hover
``.yt-lazyload[data-logo="X"] .yt-lazyload-logo``  | Youtube logo color based on data attribute
``.yt-lazyload iframe``                                | Youtube embeded iframe after click


********************************************************************************
## Versioning
Youtube LazyLoad will be maintained under the Semantic Versioning guidelines as much as possible. Releases will be numbered with the following format:
```<major>.<minor>.<patch>```


********************************************************************************
## Changelog
For last releases see detailed [CHANGELOG](https://github.com/the-muda-organization/youtube-lazyload/blob/master/CHANGELOG.md).


********************************************************************************
## Team
-  [Jakub Muda](https://github.com/jakubmuda)


********************************************************************************
## Code of conduct
We will behave ourselves if you behave yourselves. For more details see our
[CODE_OF_CONDUCT.md](https://github.com/the-muda-organization/youtube-lazyload/blob/master/CODE_OF_CONDUCT.md).


********************************************************************************
## Copyright and license
Code and documentation copyright 2017-2019 [The MUDA Organization](https://github.com/twbs/bootstrap/graphs/contributors).

Code released under the [MIT License](https://github.com/the-muda-organization/youtube-lazyload/blob/master/LICENSE).


********************************************************************************


