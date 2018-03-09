# MB.io - SINFO Frontend Challenge

We, at **Mercedes-Benz.io**, build products for our customers.

These products go from the site that sells our vehicles to the applications that control them.

The major purpose of **Mercedes-Benz.io** Frontend Developers is to provide high quality software for web based user interfaces, following MVP principles and enterprise frontend software development standards.

**Please read *carefully* through *all* of the following instructions before you begin with the implementation.**


Also, please keep in mind that your handed in code will form the basis of any eventual next steps in an formal recruiting process. It is therefore only in your own best interest to be able to explain every code decision you took.


## The challenge

* To build a working html page (with a `shop-slider` component) looking like the `design/shop_w_slider.png` layout.
* Displaying and working correctly in latest Chrome and Firefox.
* Expressive and accessible HTML markup.
* Consistent and organized CSS.
* Readable, performant and organized JavaScript, following best practices.


## Setup your system

### node.js

To automatically serve the challenge's index.html page and for additional tasks you may need (section [Requirements](#requirements), steps 6. and 7.), we recommend you use [node.js](https://nodejs.org) v8.x but any other recent (>=6.0.0) version should be fine also. In case you want to manage several node versions on your machine, we recommend [nvm](https://github.com/creationix/nvm) for Mac/*nix and [nvm-windows](https://github.com/coreybutler/nvm-windows) for Windows.


### Install NPM packages and run dev

Once you have node.js installed, open up your OS's Terminal/Bash application, change into the root folder of the challenge (where the file `package.json` is located) and run `npm install`.

After all NPM packages installed successfully it will open a browser tab with src/index.html running in http://localhost:8080/ (if you can't see that tab in your browser try running `npm run dev`).


## Coding guidelines

1. HTML markup
    Make sure the document contains semantically correct HTML5 markup [[help]](http://html5doctor.com/lets-talk-about-semantics/).

2. Accessibility
    - Fully functional with keyboard.
    - Tab navigation follows a logical flow.
    - Use buttons where buttons are needed.
    - Correct usage of ARIA labels and landmark roles.

3. CSS (you can also use SASS, we like it - OPTIONAL)
    - You can use one or several CSS OR SCSS files, separated by context, modules, etc.
    - You are not allowed to use any CSS or SASS frameworks (e.g. Bootstrap), but you may include a small third-party CSS reset / normalize.
    - Your CSS should be markup independent. E.g. no class names as `.h1` or `.table`.
    - Make sure your selectors have a low specificity [[help]](https://css-tricks.com/strategies-keeping-css-specificity-low/)
    - avoid long CSS selectors. E.g. use `.hilite-heading--small` instead of `body .main section.top .hilites h3.small`

4. JavaScript
    - Use "vanilla" JavaScript.
    - Third-party libraries and frameworks are not allowed (e.g. jQuery, React, Vue.js, etc).
    - As an exception to the above, you should use Lory - http://meandmax.github.io/lory/ - for the slider.
    - Avoid generating completely new HTML structures from within JavaScript.
    - Use comments when necessary.


## Requirements

Please develop the following features sequentially, as you shouldn't start an item of this list if any of the previous aren't finished.

Please note it's ok if you don't finish all the steps. Do as much as you can and try to get to step 3, at least.

If you want to impress us, try to get to the Bonus steps, but don't forget the first 4 steps are the most important ones. If any of those aren't ok the Bonus steps will not be taken into account.

1. The page should have 3 visible products as shown in the `design/shop_w_slider.png`.
    - Initially no items should be added to the virtual "Shopping Cart"; in other words, all `quantity` fields and the `Total` value should be 0 (zero).
    - You can use the images in `src/images` for each "product" or use some other good-looking "real" images that you like :)
    - The SVG `-` and `+` images are provided in `src/images`.
    - You should style the elements using the measurements that are in `design/shop_w_slider--measurements.png`.

2. The user can add products to the virtual "Shopping Cart" and remove them too.
    - The `Total` value should be updated with the correct price sum every time a product is added or removed (`-` and `+` buttons), or when the user edits the `quantity` field directly.
    - The `quantity` field - and the `Total` value - should never be less than 0 (zero).

3. The page should have 8 products with a slider functionality.
    - Only 3 products are visible, but two arrow buttons should exist to move/slide the "product" list left or right.
    - The SVG arrow images are provided in `src/images`.
    - Each moving/sliding interaction should move the "product" list by 3 products/positions (so if showing product 1, 2 and 3 and then clicking on the "next" arrow will show product 4, 5 and 6 after the animation stops).
    - We would like you to use Lory - http://meandmax.github.io/lory/ for the slider animation (moving "product" list's position in the "x" axis);

4. The slider should be user-friendly.
    - When showing the first slider items the "previous" arrow should be disabled.
    - When showing the last slider items the "next" arrow should be disabled.
    - The slider shouldn't have any empty product "slot", so when moving from product 4, 5 and 6 to the "next" ones it should show 6, 7 and 8.

5. Bonus #1 - *We will only take this into consideration when all of the above points work as expected.*
    - The page should be responsive in a way that on small devices (mobile) or narrow browser windows it shows less products.
    - The look and breakpoints should be: 1 product visible when < 620px width; 2 products visible when < 880px width; and 3 products when >= 880px.

6. Bonus #2 - *We will only take this into consideration when all of the above points work as expected.*
    - Add new tasks to minify the HTML, CSS and JavaScript files and put the result in a `dist` folder at the root level. Those tasks should also move all other necessary files (images, etc) for the page to behave and look as expected when served from that `dist` folder.
    - You can use Webpack, Gulp, Grunt or any other tools/`NPM packages` that may help you with this task.

7. Bonus #3 - *We will only take this into consideration when all of the above points work as expected.*
    - Add new tasks to watch for HTML, CSS and JavaScript changes and reload the browser's tab http://localhost:8080/.
    - You can use Webpack, Gulp, Grunt or any other tools/`NPM packages` that may help you with this task.

8. Bonus #4 - *We will only take this into consideration when all of the above points work as expected.*
    - If you've come this far.. Congratulations!! And if you still have time try the following:
    - Backup your project, duplicate it, remove the Lory dependency and re-create the slider using only your own "vanilla" JavaScript.
    - You should only send us your challenge project with this "vanilla" JavaScript slider implementation if the slider is fully working and isn't "breaking" any of the other features.
    - If for some reason (time, complexity, etc) you can't finish the slider implementation using only "vanilla" JavaScript, please just send us the (backup) challenge that uses Lory for the slider.

## Can I use additional NPM packages?

Yes, as long as the points from the above section [Coding guidelines](#coding-guidelines) are not violated.


## Where should I place my files?

We've got an initial folder and file structure in `src` prepared for you:

* `index.html` - HTML file with prepared markup and included assets.
* `main.js` - this should be your main JS file which initializes other JS modules
* `components` - place JavaScript components here (modules, utils, configs, etc)
* `images` - place images in here
* `vendor` - if using Lory (for the slider) place its JavaScript and/or CSS/SCSS files in here


## IDE configuration

(OPTIONAL) To help you with code formatting style, you can configure your IDE to use the [`.editorconfig`](http://editorconfig.org/#download) file you find in the project's root folder. 


## Troubleshooting

If you have any questions regarding the challenge or find a bug with the exercise, please use GitHub issues.

To talk with us and other developers about technical aspects of the challenge [open a support ticket](https://github.com/mercedesbenzio/SINFO-frontend-challenge/issues) or mail us at `goncalo.sequeira@mercedes-benz.io` if you need to talk to us.

Please describe the issue(s), steps to reproduce, screenshots and error logs of your Terminal/Bash application. Anything that may help in the troubleshooting process.


## What are you expected to hand in?

When finished, prepare a zip archive with your solution and send it back as an email to the person you are in contact with. *PLEASE DO NOT INCLUDE THE `node_modules` folder*.

Good luck :-)
# SINFO-frontend-challenge-Guilherme-Branco
