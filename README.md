# backend_freela
# Application developed in a freelance job.

# Instructions

* clone the application
* yarn 
* yarn dev

# Endpoint

-> URL: base_url/users TYPE POST
  * Adds a new user, after login with google, and saving all user information
  

-> URL base_url/admin TYPE POST
  * Reserved for the administrators of the application, where the administrator can add new users who will use the app.
  
  {
    "name": "Thiago Lourenco",
    "email": "thiago@gmail.com",
    "description": "Vai da certo, realizando teste",
    "country": "Brazil",
    "sports": "Footbal",
    "filesname": "ab3f7c43ef5abf1b91b8334cdb8def9c.png",
  }

-> URL base_url/admin TYPE GET
  * Lists all users that have been added by the administrator.

-> URL base_url/admin/:name TYPE GET
  * Lists the user according to the name he passes as a parameter, and shows that particular user.


@thiagoLourenco27
