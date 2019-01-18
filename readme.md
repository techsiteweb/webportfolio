** ========= Web Developer Portfolio - Jan 14 2019 ========= **

For this project we need to install SASS in Node.js
In order to have the browser read scss we need to use: node-sass

Follow these steps to install

    npm install node-sass --save
    
Once install we need to set it so it works, for this we use npm script that is inside the 
package.json file as follows:

    "sass": "node-sass -w scss/ -o css/ --recursive"
    //where "-w" is for watch the scss folder to compile the css content
    //where "-o" is for output of the compiled scss to a css folder and new file for the browser to understand
    //where "--recursive" is for autoreload of the partials
    
Once this is done and you run: 

    npm run sass //keep sass listening (it's like a server for css)
it will listen for changes to the scss folder and create a new css file (in the specified location above) for the browser to understand.

When you are working with SCSS you do not touch the .css file created by the sass compiler. You will work directly on the .scss file.
But you still need to point your index.html to css/main.css (not to scss/main.scss)

** SASS STUFF **

    In SASS you can extend a class to another class. It means adding all the properties of a class inside a class by using
    keyword: @extend .class name