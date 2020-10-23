# CatStation

[CatStation Live Site](https://catstation-app.herokuapp.com/)
CatStation is a Full-Stack Project to clone [ArtStation](https://www.artstation.com)

# Technology

The technologies used for this project are: 
  - Ruby
  - React/Redux
  - JavaScript
  - Amazon Web Services (AWS)
  - HTML/CSS
  
# Challenges
  
One of the features that I took on was end-to-end User Auth, this entailed having a user to Login, Logout, and also Sign Up. Signing back in mean that the user can use their previous credentials if they used the Sign Up feature. The user is also persisted through a refresh by "bootstrapping" the current user to the "application.html.erb" file that passes the user to the React entry file "catstation.jsx". This was a challenge in itself as I had to not only keep track of the current user variable, but also be sure to pass along the right information down the chain to use it for my React Componenets. 

Another feature that I took on was to not only show off all the images on a "Photo Index Component", but to also have the feature to delete the image permanently from the databse. This involved setting up a "destroy" function all the way from the Photos Controller in my backend to be passed as an ajax call in my "photo_api_util" file to be called in my "Photo Show Container". One of the pitfalls that I had was that although I was deleting photos from my database upon a click of a button; my "Photo Index Component" would not re-render until I had refreshed the page. Although this feature worked, it had made using it clunky and not acceptable. I ended up realizing to use a ".then" statement after the button was involked to "push" a new URL to my history stack that automatically re-rendered the "Photo Index Component" and also re-routing to it automatically upon deleting a photo. 

# Future Features

- Have a full CRUD for my photos feature, where users are able to also upload and edit their photos
- Have users be able to comment on images
- Have users have their own profiles that show off their own uploaded work(s)


