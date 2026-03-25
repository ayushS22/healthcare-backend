Healthcare Backend API
This is a backend API for managing users, patients, doctors, and their mappings using Node.js, Express, and MongoDB.

How to Run This Project
Clone the Repository
https://github.com/ayushS22/healthcare-backend.git
cd healthcare-backend

Install Dependencies
npm install express mongoose dotenv bcryptjs jsonwebtoken

Setup Environment Variables
Create a .env file in the root folder and add:
MONGO_URI=mongodb://localhost:27017/healthcare
JWT_SECRET=your_secret_key

Start MongoDB

Make sure MongoDB is running locally:


Run the Server
npm run dev

Server will start at:

http://localhost:5000

How to Test APIs

Use Postman or any API client.




STEP 1: Start Your Server
npm run dev
You should see:
MongoDB connected
Server running on port 5000
________________________________________
Base URL
http://localhost:5000/api
________________________________________
STEP 2: Register User
Method: POST
URL:
http://localhost:5000/api/auth/register
 Body (JSON)
{
  "name": "Ayush",
  "email": "ayush@gmail.com",
  "password": "123456"
}
Click Send
 Response:
{
  "msg": "User created"
}
________________________________________
STEP 3: Login (Get Token)
 Method: POST
URL:
http://localhost:5000/api/auth/login
Body
{
  "email": "ayush@gmail.com",
  "password": "123456"
}
________________________________________
 Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
 Copy this token
________________________________________
 STEP 4: Add Authorization Header
In Postman:
 Go to Headers tab
Add:
Authorization: Bearer YOUR_TOKEN
Example:
Authorization: Bearer eyJhbGciOiJIUzI1Ni...
________________________________________
STEP 5: Create Patient
POST
http://localhost:5000/api/patients
Body
{
  "name": "Rahul",
  "age": 25,
  "disease": "Fever"
}
 Response → patient created
________________________________________
STEP 6: Get All Patients
 GET
http://localhost:5000/api/patients
Returns all patients of logged-in user
________________________________________
 STEP 7: Create Doctor
 POST
http://localhost:5000/api/doctors
Body
{
  "name": "Dr Sharma",
  "specialization": "General"
}
________________________________________
STEP 8: Assign Doctor to Patient
 POST
http://localhost:5000/api/mappings
 Body
{
  "patient": "PATIENT_ID",
  "doctor": "DOCTOR_ID"
}
 Replace IDs from previous responses
________________________________________
STEP 9: Did You Create Mapping?
You MUST run this first:
POST /api/mappings
{
  "patient": "PATIENT_ID",
  "doctor": "DOCTOR_ID"
}
If you skip this → GET will be empty 
_________________________________________
STEP 10: Get All Mappings
GET
http://localhost:5000/api/mappings
You’ll see:
•	Patient info 
•	Doctor info (because of .populate()) 
________________________________________
STEP 11: Get Doctors by Patient
GET
http://localhost:5000/api/mappings/PATIENT_ID
________________________________________
 STEP 12: Delete Mapping
DELETE
http://localhost:5000/api/mappings/MAPPING_ID
________________________________________



