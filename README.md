# EventTrackerProject

## Overview
Created a full-stack application that tracks jam sessions. The user can create a new jam session, add images, music that actually plays, and a link to a website. We can also update and delete our jam sessions.

## Technologies used
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
- Angular
- Typescript

## Lessons Learned
- How to build a full-stack app
- How to use JPA Repositories
- REST and REST Controllers
- Learned how to use @Service
- Practice using CRUD Operations
- How to test using Postman
- Implementing CSS to a new degree
- Using Angular to make a beautiful front-end


## REST API Endpoints

|HTTP Verb|     URI      | Request Body |  Response Body  |   Status  |
|---------|--------------|--------------|-----------------|-----------|
| GET     | `/api/jams`  |              | List of Jams    | 200       |
| GET     | `/api/jams/4`|              | Single Jam      | 200 or 404|
| POST    | `/api/jams`  | JSON of new jam | JSON of created jam | 201 or 400 |
| PUT     | `/api/jams/4`| JSON for updating jam | JSON of updated jam | 200, 404, or 400 |
| DELETE  | `/api/jams/4`|              |                 | 204, 404, or 400 |
