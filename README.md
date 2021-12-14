# Job application web app with NextJS and Flask

# Video Demo: https://youtu.be/VXLdmRY0V8c

## Description:

## What is the inspiration to my project?

It is my simple job application web app. Since I am a human resources before. I have an idea to transfer the application process from traditional to digital that my company have many applicants everyday and they use hard-copy to write application form. The purposes of the web app are to make a clear process of application flow, prevent ugly handwriting and automatic generate application form as PDF to print.

## How the webpage works?

As the modern web design, I separate frontend and backend that frontend can be changed despite the frontend framework grow fast. For this web app, job applicants can finish the application form in frontend. The HR (or admin) can login to the website to see the applicants data. After job interview, the data can generate PDF hardcopy to complete the onboarding.

### Therefore, the web app contains the following functions:

1. Form submit
2. Login as admin, to:
3. View all applicants data.
4. Generate CSV file for human resources further action.
5. Generate PDF application form to print as hard-copy.

## What technologies or frameworks are used?

#### This app is built by NextJs and Flask. Thought the RESTful API connection to get data from Flask.

1. NextJS
2. Flask
3. Sqlalchemy
4. PDFkit
5. Tailwind
6. Bootstrap

## Why use NextJS?

Because of RESTful API, the frontend can be updated when the frontend technology is fast grown. Switch between React, Vue, Next JS, and other new frontend frameworks depend on your choice. Second, I consider the necessity of digital marketing that web app should not be over concerned in the function, the promotion and marketing are huge part in any website which means we must consider SEO. NextJS have the following advantages:

1. React based that it is a modern framework.
2. SEO focus that we can use ServerSideRendering and dynamic SEO component for each page to make a good practice for promotion.

## What is the login state store?

For the login state, I used cookies rather than session to try different things outside the lecture knowledge.

## What database is used?

Sqlite3. The project only use "applicant" and "admin" data

## Routing and Security

I set the index.html will redirect to "/jobapply". Each route are checked including the route can be accessed by admin and malicious POST request by changing the DevTools to get the csv and pdf from backend(double check the sql in backend when POST data).

## What are the improvements of this project?

1. For the security, maybe use session better than cookies.
2. For the security, the admin password should be hashed.
3. The database should be able to upload image which is the applicants profile picture.

## How to launch application

For Flask backend, please use "venv\Scripts\activate" first and optional use "$env:FLASK_ENV = "development" " to activate Flask environment. Then, use "flask run"

For NextJS frontend, please use "npm run dev" or "npm run start" to use this

Both frontend and backend must be used together.

Frontend default url: localhost:3000/

Backend default url: localhost:5000/
