# CatStation

[CatStation](https://catstation-app.herokuapp.com/)
CatStation is a Full-Stack Project to clone [ArtStation](https://www.artstation.com)

# Technology

The technologies used for this project are: 
  - Ruby
  - Ruby on Rails
  - React/Redux
  - JavaScript
  - Amazon Web Services (AWS)
  - HTML/CSS
  
# Challenges
  
One of the first challenges that had to be solved after finishing User Authentication would be understanding how to have users be able to upload their own photo. To solve this, I first focused on creating the Upload Form on the frontend, then focused on creating the correct backend calls and tested it to see that upon hitting the upload form I was able to retrieve the uploaded data. From there, I focused on creating an Amazon Bucket to handle all the new uploaded Images!

# Photo Upload Form

This form allowed users to upload Photos of their cat(s), only if the user is logged in. There is also an error handler to make sure that all sections of the Upload Form are filled! 
![alt-text](https://github.com/KemoPaw/CatStation/blob/main/app/assets/images/CatStation-Upload-Form.png)

# Photo Show Page

The Photo Show Page is essential to the website as it allows users to view the Photo. The original uploader of the photo can Edit and Delete the photo as needed. Same with commenting on the photo, as only the original commenter can edit or delete their comments.

![alt-text](https://github.com/KemoPaw/CatStation/blob/main/app/assets/images/CatStation-Photo-Show-2.png)

# Profile Page

The Profile Page displays all of that User's uploaded photos. 
![alt-text](https://github.com/KemoPaw/CatStation/blob/main/app/assets/images/CatStation-User-Profile.png)



# Current Features

- Users are able to Sign Up, Sign In, and Sign Out depending on the "Logged In Status"
- Users are able to view the current gallery of photos and can click them to view more information about the Photo
- Users are able to view, delete, edit, and update a Photo
- Only the original uploader of the photo can edit, delete, or update it
- Each user has their own Profiles that display their own uploaded Photos
- Search bar to search by username OR photo's title. 


