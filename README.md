#  great-note-taker
      
## Description

In this assignment we were tasked with writing out a note taking application. There is a landing page and a link to the notes section. This is achieved through the use of server routing. When the user looks at the notes they have the ability to enter a note title and content. Exsisting notes will be in the left hand side of the page. When the user presses save the notes are then saved in the right hand side and will remain there until the user presses the delete button located on the note. When the user presses the + button at the top of the page, all the text values are cleared out. This is achieved by using get and post requests to post the new data the user enters into some json data that is stored on the server. The get requests are able to pull this data down and display it in the desired location. The delete function loops through every item that is not wanting to be deleted and then pushing them into a new object that is overriding the old one, removing the one that was wanting to be deleted.

## Installation
      
To install necessary components, run the following command:

    npm install  
            
## Git Repository 

The GitHub repository can be found [here.](https://github.com/choyle-01/great-note-taker)

## Deployed

The deployed link can be found [here.](https://polar-hollows-30972.herokuapp.com/)

## Visuals 

The link to a video demonstration can be found [here.](https://drive.google.com/file/d/18dDkOgW_vHvoqe4sad9TGroB5yceoKTG/view?usp=sharing)