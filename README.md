# EventTrackerProject

# Overview
Created the back-end of an application that tracks jam sessions. The user can create a new jam session, update an existing session or delete a jam session.

# Technologies used
- Spring JPA
- Sping Boot
- REST
- Gradel
- MySQL and MySQL Workbench
- JPARepository
- Git and GitHub
- Java and Java Web
- Tomcat
- Postman

# Lessons Learned
- How to use JPA Repositories
- REST and REST Controllers
- Learned how to use @Service
- Practice using CRUD Operations
- How to test using Postman

# REST API Endpoints

|HTTP Verb|     URI      | Request Body |  Response Body  |   Status  |
|---------|--------------|--------------|-----------------|-----------|
| GET     | `/api/jams`  |              | List of Jams    | 200       |
| GET     | `/api/jams/4`|              | Single Jam      | 200 or 404|
| POST    | `/api/jams`  | JSON of new jam | JSON of created jam | 201 or 400 |
| PUT     | `/api/jams/4`| JSON for updating jam | JSON of updated jam | 200, 404, or 400 |
| DELETE  | `/api/jams/4`|              |                 | 204, 404, or 400 |