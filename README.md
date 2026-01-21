# Contact Record Keeping Application

A full-stack Contact Record Keeping Application developed using
Angular (Frontend) and Java Spring Boot (Backend) as per the assignment provided by Comprinno Technology.

The application allows users to register, login, manage contacts with pagination, and update their profile, with proper validations and API documentation using Swagger.


# Assignment Requirements Fulfilled
 # User Management

 User Registration

 User Login

 JWT-based authentication


# Contact Management

  Add new contact

  View all contacts (paginated)

  Update contact

  Delete contact

  User-specific contacts (secured via JWT)


# Profile Management

   View profile

   Update name

   Update password

   Email is read-only


# Validation

   Required field validation

   Email format validation

   Password length validation

   Phone number validation


# API Documentation

   Swagger UI integrated

   All backend APIs documented and testable via browser

  ✔ All assignment requirements are fully implemented


 # Technology Stack

   #Frontend

   Angular

   Bootstrap

   TypeScript

   HTML, CSS


  #Backend

   Java Spring Boot

   Spring Security

   Spring Data JPA

   JWT Authentication

   PostgreSQL

   Swagger (OpenAPI 3.0)


📄 API Documentation (Swagger)

Swagger is integrated for backend API documentation and testing.

Swagger UI URL
http://localhost:7070/swagger-ui/index.html

(<Screenshot 2026-01-19 143419.png>)

#Features of Swagger in this Project

  Lists all REST APIs

  Shows request & response formats

  Allows testing APIs directly from browser

  Supports Authorization (Bearer Token) for secured APIs


How to Use JWT in Swagger

Login using /api/users/login

Copy the JWT token from response

Click Authorize button in Swagger

Enter:

Bearer <JWT_TOKEN>


Now all secured APIs can be tested

* Project Structure
Backend
contact-app-backend/
├── controller
├── service
├── repository
├── entity
├── dto
├── util (JWT)
├── config (Security & CORS)
└── ContactAppBackendApplication.java

Frontend
contact-app-frontend/
├── app
│   ├── login
│   ├── register
│   ├── dashboard
│   ├── profile
│   ├── navbar
│   ├── interceptors
│   └── app.routes.ts
└── main.ts


# Authentication & Security

  JWT token generated on login

  Token stored in localStorage

  Angular HttpInterceptor attaches token automatically

  Backend extracts userId from token

  Stateless authentication

  All secured APIs protected


# Pagination Implementation

  Server-side pagination using Spring Data JPA

  Pageable used in backend

  Frontend sends page and size

  UI includes pagination controls


🔗 REST API Endpoints

Authentication APIs

Method	Endpoint	        Description
POST	/api/users/register	Register user
POST	/api/users/login	Login user

Profile APIs

Method	Endpoint	        Description
GET	/api/users/profile	Get profile
PUT	/api/users/profile	Update profile

Contact APIs

Method	Endpoint	                 Description
GET	    /api/contacts?page=0&size=5	 List contacts
POST	/api/contacts	                Add contact
PUT	    /api/contacts/{id}	        Update contact
DELETE	/api/contacts/{id}	        Delete contact

* How to Run the Application

Backend
cd contact-app-backend
mvn spring-boot:run


Backend runs on:

http://localhost:7070


Swagger UI:

http://localhost:7070/swagger-ui/index.html

Frontend
cd contact-app-frontend
npm install
ng serve --host 0.0.0.0 --port 4200


Frontend runs on:

http://localhost:4200

* API Testing

APIs tested using:

Swagger UI

Postman

Authorization via:

Authorization: Bearer <JWT_TOKEN>


# UI Pages Implemented

Login (with Register link)

Register

Dashboard (Contacts + Pagination)

Add / Edit / Delete Contact

Profile page


Logout
