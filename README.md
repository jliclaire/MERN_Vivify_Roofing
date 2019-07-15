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
in certain areas are effective. They define effectiveness as the proportion
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

sep of concerns, reliability(testing), ability to scale, satisfies the logic of
a business problem

2. What libraries are being used in the app and why?

react, axios, express, testing libraries, nodemon...

3. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

planning/agile, design, markup, programming languages (?), tools for data persistence

4. Within your own project what knowledge or skills were required to complete the project, and overcome challenges?

5. Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature.