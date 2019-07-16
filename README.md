# Vivify CRM

Built with blood sweat and tears by Jing Li Claire, Mark Butcher, and Andrew Sims

(Link to published application goes here.)

(Link to GitHub repository goes here.)

## Description

This software is a basic CRM (customer relationship management) system 
which was built for a roof restoration business.

### Problem definition

There are two business problems which this software is supposed to solve:

1. Standardising the sales procedure

Irregularities and lack of system around the sales procedure and
communication between the trades and sales staff had meant that
mistakes were often made and jobs misquoted. This is a risk to both the
reputation and bottom line of the business. 

A significant aspect of this problem was that communication and record-keeping 
was done on an ad hoc basis. Therefore, Having all of the information regarding 
the customer and their particular needs in a centralised hub was meant to 
improve this situation and improve communication between the trades and the 
sales team more generally.

2. Actionable insights to inform marketing spend

The business does not have a clear idea of whether their marketing spends
in certain suburbs are effective. They define effectiveness as the proportion
of leads which are converted into sales for any particular area. Collecting this
data and displaying it in the application over a period of time would allow them
to make more informed decisions as to where to spend their marketing budget.
For example, if they find that (for example) many leads in Noble Park do not 
convert, then they will stop spending marketing budget in Noble Park.

### Functionality

Our functionality follows from the above two business problems. In the first
place, we want the software to centralise information regarding customer leads
and the development of these over the sales lifecycle, as well as to standardise
interactions and processes concerning the potential customer.

This functionality is covered in the **Dashboard** of the software. An 
**Admin User** on the dashboard can see all the sales **Leads** and sort them by 
their current status in the sales lifecycle (new => in progress => sold/archived). 
Clicking on a lead will display contact information for the potential customer 
and the details of the job.

Sales leads can be assigned to **Sales Users** whose responsiblity it then is
to follow up with the lead in order to quote and potentially sell the job. At
this stage the Lead is marked as "in progress."
Once in contact with the customers they are required to submit **Followups** using
the HTML forms which are attached to the **Lead** as a record of the sales
attempt. The Sales Users can also provide more unforseen details about the job
and provide the price for which they have sold it. Once this occurs the job is 
marked as "sold."

The second piece of functionality, the analytics, is covered in the **Admin**
section of the software. Here an Admin User can find information about what kinds
of jobs they have been able to sell, who has been selling them, how much they
have been sold for, and where they have been sold.

(Screenshots should be placed between the paragraphs above.)

### Technology Stack

The software was built using full-stack Javascript: React on the frontend, and 
Express and NodeJS on the backend. We use MongoDB for data persistence. The
software is deployed on Netlify (front) and Now (back).

## Installation and usage

Set up

configure

deploy

use

## Design documentation

Design process

User stories

Workflow diagram

Wireframes

ERDs

Data flow diagram

OO design documentation

## Project Management and Planning process

Project plan and timeline

Client communications

Trello screenshots

## Short answer questions

1. What are the most important aspects of quality software?

There are at least four core "most" important aspects of quality software. The
first aspect is that it satisfies the logic of the business problem which it
aims to solve. Software is poor quality if it is badly suited to its real world
problem, or if it approaches this problem with an eccentric or overly complicated
logic.

The second aspect is that of reliability. Software should be reliable, in the
sense that it can be used in the same way on different occasions and still yield
the same result, and that it does not break or work in unintended ways.
Reliability can be ensured by thorough testing and error handling.

The third aspect is separation of concerns. A piece of software separates its
concerns when it is well modularised so that each part of the software only
fulfils its own function and is not overly entangled with the other parts.
Software that separates its concerns is more easily extensible than software
which does not.

The final aspect is that of scalability. Quality software can work in production
contexts where the load on the system may be much higher than in development
contexts.

2. What libraries are being used in the app and why?

We used third-party dependencies on both front-end and back-end.

### Frontend

* React: create-react-app and its dependencies (webpack, babel, etc.) are used
in order to streamline the process of writing our UI.

* Axios: used in order to make calls to our server and to other APIs, since it
is more straightforward to use than the native fetch.

* Testing libraries: we use Jest and react-testing-library to test our UI. We
use Jest because it is intended specifically for DOM testing with React and we
use react-testing-library because its API is more straightforward and offers
less opportunity for errors of inexperienced than does Enzyme.

* Dotenv: to store secrets in the environmental variables.

* Netlify-CLI: to facilitate deployment.

* React-Router-DOM: to allow endpoints on the client side.

### Backend

* Express: to provide the tools to build our webserver.

* BCrypt: to hash passwords and compare hashes.

* Cloudinary: to facilitate image upload.

* CORS: to set Cross Origin Request settings.

* JSONWebTokens: to create and check tokens for authentication.

* Mongoose: as the model over our database.

* Multer: to buffer image uploads on their way to the cloudinary API.

* Mocha and Chai: for backend testing.

* Nodemon: to enable hot reloading of the server.

3. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

There are a number of skills and knowledges that are necessary to develop a
website. These are both technical and organisational. The organisational
skills involve knowing the software development cycle and the team practices
that surround this (e.g., Agile). Some design skills or knowledge would also
be useful for the planning of the website and UX (e.g., wireframing).

The technical skills involve the three languages of the browser: HTML, CSS, and
JavaScript. These languages are those which are used to develop on the client
side. If the website also includes server-side code, then the developers might
also want to know a server-side language such as Ruby, PHP, or NodeJS.

If the website also requires the persistence of data, then the team might also
be required to use some sort of database technology, such as MongoDB or
PostgreSQL.

4. Within your own project what knowledge or skills were required to complete the project, and overcome challenges?

5. Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature.