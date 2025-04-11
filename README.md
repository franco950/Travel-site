This is a travel web application built using React.ts and Typescript.
The idea is an end to end travel experience where users only need one application to handle their travel plans from choosing flights and hotel rooms, 
to comparing prices and planning for individuals or groups.
Destinations and user reviews are stored in mongodb database with flights, hotels, users and transport data stored in mysql database.
Prisma orm for both mongodb and mysql.
Passport.js for auth.
 
1. **Features:**
   
The site includes: A Destinations page, where users can see available destinations and click one for further details.
Descriptions page- for each destination,  (images and user reviews UI under development)

Booking page- where the user can choose from a list of available flights, transportation and hotels for their chosen destination.
Users are able to see prices for their selected options and the total cost for the entire trip. Booking data is stored in localstorage.
              
Order page- for finalising their order. Users are required to login to access this page.

User profile- users with accounts are able to edit and delete their account details.  

 * upcoming features include: 
                   Admin dashboard with role-based access control.
                   UX impovement with frontend design. 
                   Cost calculation per person in the booking page. 
                   Some sort of reward system to encourage users to be recurring customers. 

                   
2. **Security:**
   
User passwords are encrypted before storage using bcrypt. 
Password policies are enforced. 

Authentication and Authorisation:
 Sessions are created once users log in.
 The backend APIs that require login have auth middleware that checks session status.
 The frontend also has protected routes which redirect users to login once they try to access components that require login.

 * upcoming:
         Sessions expire after 30 minutes.
   
