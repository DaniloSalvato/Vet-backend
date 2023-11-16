﻿# Vet-backend

 This project deals with the registration of owner, animal, consultation, and diagnosis of a veterinary clinic. This is all ready for now, I will add new functions in the future. </br></br>
 Next we will have some examples to test in Postman or Insomnia.</br></br>

 #Owner:

 GETS</br>
 GET ALL    => http://localhost:3000/owners</br>
 GET BY ID  => http://localhost:3000/owners/1</br></br>
 GET ALL (OWNER AND PETS) => http://localhost:3000/ownersFull

 POST</br>
 POST       => http://localhost:3000/api/owners</br></br>
 Request </br>
{
  "name": "name",
  "email": "email",
  "contactNumber": "123456789"
} </br></br>

#Pet:

 GETS</br>
 GET ALL    => http://localhost:3000/pets</br>
 GET BY ID  => http://localhost:3000/pets/1</br></br>

 POST</br>
 POST       => http://localhost:3000/api/pets</br></br>
 Request </br>
{
  "name": "jhow",
  "species": "dog",
  "age": 2,
  "ownerId": 1
}</br></br>

#Appointment:

 GETS</br>
 GET ALL    => http://localhost:3000/Appointments</br>
 GET BY ID  => http://localhost:3000/Appointments/1</br></br>

 POST</br>
 POST       => http://localhost:3000/Appointments</br></br>
 Request </br>
{
  "petId": 1,
  "ownerId": 1,
  "appointmentDate": "2023-11-16T00:00:00.000Z",
  "reason": "Rotine"
}</br></br>

#consultation-results:

 POST</br>
 POST       => http://localhost:3000/consultation-results</br></br>
 Request </br>
{
  "appointmentId": 1,
  "diagnosis": "Query diagnosis",
  "treatment": "Recommended treatment",
  "medications": "Prescribed medication",
  "createdAt": "2023-12-01T10:00:00Z",
  "updatedAt": "2023-12-01T10:00:00Z"
}</br></br>

  


