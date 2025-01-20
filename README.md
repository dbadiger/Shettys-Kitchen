# Shetty's Kitchen

An online cloud kitchen application designed to streamline the process of ordering food and managing deliveries. This project features both a customer-facing interface and an admin panel, providing a seamless experience for users and efficient management for admins.


## Features
### Customer Page (Frontend) | https://shettys-kitchen-frontend.onrender.com
- Browse food items categorized by type (e.g., Starters, Main Course, Desserts).
- Add items to the cart and specify quantities.
- Make secure payments using **Stripe Payment Gateway**.
- Track the order status in real-time.
 ![image](https://github.com/user-attachments/assets/e38d1ca6-dbf6-4c09-b83e-df9188f020e0)
 _Users can browse food items based on categories._
![image](https://github.com/user-attachments/assets/2e974cd7-6629-44f1-bbe9-f87dbef3b8bf)



-----------------------------------
### Admin Page |
- View and manage all customer orders.
- Update order status, such as:
  - **Packed**
  - **Processed**
  - **Delivered**.
- Monitor and control food delivery stages efficiently.

------------------------------------


## Screenshots
_Login_
![image](https://github.com/user-attachments/assets/3e531840-99eb-4071-9814-8d5f437b4f5b)

_Cart Page_
![image](https://github.com/user-attachments/assets/9352fd50-03c2-417c-9dd6-5d1539c86097)

_Payment Gatetway_
![image](https://github.com/user-attachments/assets/92f1150d-2cd9-4af2-9ddf-b035854bd697)

_Orders_
![image](https://github.com/user-attachments/assets/42857936-44d8-46e5-96a6-3610e4f44f4e)

_Without Login, You can't place any orders(Payment)_
![image](https://github.com/user-attachments/assets/6d0aa1f9-f6e0-4ff6-8f34-953bf6bf57a7)




### Backend Pacakges
##### express - It is nodeJS framework acts as server 
##### mongoose - It is used for database connectivity
##### jsonwebtoken - It is used for creating authentication system
##### bcrypt - It is used for encrypting the users data and store in database
##### cors - It is used give permission to connect the frontend with backend(gives asscess)
##### dotenv - We can use enviornment varibale in our project
##### body-parser - Using this we can parse the data coming through the User.
##### multer - Using multer, we can create image store system
##### stripe - It is payment gateway for our project
##### validator - It is Used to check the email and password are  valid or not.
##### nodemon - Server will continuously On (server will restart automactically).




## Admin Dashboard Packages

#### axios :  we can create network requests like get, post, delete, update
#### react-toastify : used to create notifications easily.
#### react-router-dom : for navigation from one page to another page.



## Future Enhancements
- Add user authentication for personalized order tracking.
- Integrate delivery partner APIs for real-time delivery updates.
- Add user reviews and ratings for food items.
