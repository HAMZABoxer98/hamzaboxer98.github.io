# myCinema - Watching Movies, Series and Trailers Template

myCinema will help you to design your own cinema on the web, it's beatiful, 
clean and modern template.
We used the best tools to make it as good as possible.

## Table of Content

- Features
- Built With
- Support
- Architecture
- Dependencies
- HTML Code
- CSS Code
- JavaScript Code
- Images & Videos
- Author
- License

### Features

- 100% Responsive.
- Modern, clean and Beautiful design.
- Comes with Beautiful alert and message components.
- Includes:
  - 404 Error Page.
  - Pricing Table Page.
  - Register (SignUp) Page.
  - Login Page.
  - Terms Of Use Modal.
  - Show Series and Movies Page.
  - Awesome Videos Modal.
  - 100% Responsive Sticky Navigation Bar.
- Built using Tailwindcss, HTML5, CSS3, JavaScript without jQuery or any 
Libraries or Frameworks (except Vue.js for demo purposes, it is not required for developing).

## Built With

* [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/) - A utility-first CSS framework for rapidly building custom user interfaces.
* [Animate.css](https://daneden.github.io/animate.css/?) - Just-add-water CSS animations
* [Glide.js](https://glidejs.com/) - A dependency-free JavaScript ES6 slider and carousel. It�s lightweight, flexible and fast. Designed to slide. No less, no more

## Support

If you are having issues, please let us know.
We have a mailing list located at: hamzatipazian@gmail.com


## Architecture

- You have 8 HTML files: *index.html*, *inex_not_demo.html*, *404_page.html*, *Login.html*, *Register.html*, *Pricing.html*, *ShowPage.html* and *alerts.html*.
*index.html* includes Vue.js for demo purposes.
*index_not_demo.html* uses pure JavaScript without jQuery, Frameworks or Labraries.
 
- You have *node_modules* folder which contain some JavaScript modules that was installed throught *npm* like *Glide.js* (for carousel), *Animatecss*, *Tailwindcss* and *Free Font Awesome* (For icons).

- you have *dist* folder which contains all the required assets.
- you have *demo_dist* which is not required (*index.html* will not work in case you remove 
it, in contrast *index_not_demo.html*).

*NOTE:* 
We used *Vue.js* Frameworks within *index.html* in order to give the demo some data and make it a little bit reactive. Please check *HTML code*.


## Dependencies

- all the images, videos that are used here have no copyrights, and it is completely free to use.
Check [unsplash](https://unsplash.com) and [pexels](https://pexels.com)  for more info.
- package.json contains the required JavaScript modules. 

## HTML code

*Warning*: Description paragraph in the home page (white and black cards) must be 121 character, in contrast in other pages, it does not matter.

First, we want to inform you that you are not required to use *Vue.js*, you have the choice to remove *demo_dist* Folder and use *index_not_demo.html* file as a reference.
This HTML code was structured to be friendly with W3C standards and we did our best to document the important sections of the code.

*note:* All the alerts and messages components are located inside *Alerts.html*.

## CSS code:

### Inside *dist* folder

- *style.css* which contains the extended css styling over the default styling of Tailwindcss. *style.css* is well organized, small and documented, you can edit on it without any problems. 
Example: if you want to change the *primary* color, just go to *style.css* then scroll down to *Primary Colors*.

## NOTE

In case you wanted to change the other default colors like *green* and *yellow*, then you have to install Webpack to generate your custom *tailwind.css* file which will hold your custom settings and stylings.
* READ THIS *: 
[https://tailwindcss.com/docs/configuration](https://tailwindcss.com/docs/configuration)

## JavaScript Code 

### Inside *dist* folder

- *script.js* contains some basic code for *toggling, hiding and showing* elements like dropdowns and modals  is well 
organized, small and documented, you can edit on it without any problems.
- *carouselCode.js* contains the basic code to make our carousels wrok as expected, do not forget to check the official
documentation of [Glide.js](https://glidejs.com/).

### Inside *demo_dist* folder

- *script.js* contains some Vue.js code that is used to make *index.html* little bit reactive, it gives you a basic 
understanding of how you will structure you data, you can even translate this file into useful Vue.js components.

## Images & Videos

- Image dimensions:
  - Home page movies Covers must be 128 width x 192 height.
  - Modal video images must be 120 width x 68 height.

We make sure to respect the copyrights of other people, so we designed our demo images using no-copyright images from
[unsplash](http://unsplash.com), and we did the same for the 2 videos from [pexels](http://pexels.com).



## Author

* **Tipazian (Hamza Nouali)**

## License

This project is licensed by Themeforest, make sure to use it under the license you have.

----------------------------------------------------------------------------------------------------------------------

Finally, we would thank you for buying this template and make sure that we are ready to read your messages, feel free 
to email us.
