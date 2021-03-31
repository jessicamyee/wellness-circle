# wellness-circle

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Wellness Circle** is a personal wellness tracker where a user signs up for an account and can start tracking their daily wellness for 6 wellness categories. The user will be able to see weekly summaries of their wellness based on the data they inputted.

The user can also optionally share their summary data with their “inner circle”. People in the inner circle will also need to make an account to be able to see the shared wellness summaries.


<br>

## MVP

### Goals

* User authentication/authorization so that a logged-in user can:
  * Track their wellness (add, read, update, and delete entries)
  * View their weekly wellness summary
  * View the history of their wellness data
  * Share their wellness summary with their inner circle 
* Inner circle feature: 
  * Ability to view your “inner circle”’s (consists of close family/friends) weekly wellness summaries if user enables it

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | To create the front-end, user interface |
|   React Router   |  to build a single-page web application with navigation without the page refreshing|
| Axios | To make HTTP requests for the front-end  |
| React Bootstrap |  To style specific components for the front-end  |
| Moment.js |  To support work in calculating and showing the summary for specific date/timeframes  |
| Ruby on Rails |  To create the backend  |
|     JWT      |  To securely transmit information between parties as a JSON object for authorization/authentication purposes |
|  Bcrypt  | To implement password hashing for auth/authentication purposes |

<br>

### Client (Front End)

#### Wireframes

[See here](https://www.figma.com/file/Nxf7VtYomX3qQcvFyoSH9I/Wellness-Circle-Wireframes?node-id=0%3A1) for an Interactive Prototype & Mobile Views.
![Homepage Public and Authenticated View](https://i.imgur.com/xS7K3Tq.png)
![Log In and Sign Up](https://i.imgur.com/IjF3j5a.png)
![Dashboard and Add Record](https://i.imgur.com/i0eCW4e.png)
![View/Edit Data](https://i.imgur.com/kiMXsq4.png)
![Inner Circle and Shared Screens](https://i.imgur.com/hElxSBH.png)
![Mobile View Pt. 1](https://i.imgur.com/vbxJNHi.png)
![Mobile View Pt. 2](https://i.imgur.com/lNj9Gsj.png)



#### Component Tree
![Wellness Circle Component Tree](https://i.imgur.com/FesxnkI.png)
[See here](https://whimsical.com/wellness-circle-component-tree-XM9U4Gu5gM9gS4BrVvbS5H) for a closer view of the Component Tree.

#### Component Architecture

``` structure

src
|__ components/
      |__ Modal.jsx
      |__ ProcessCard.jsx
      |__ DataCircle.jsx
      |__ HistoryRow.jsx
      |__ Navbar.jsx
      |__ Footer.jsx
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Home.jsx
      |__ SignUp.jsx
      |__ Login.jsx
      |__ SignOut.jsx
      |__ Dashboard.jsx
      |__ WellDataCreate.jsx
      |__ WellDataEdit.jsx
      |__ InnerCircle.jsx
      |__ SharedSettings.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ wellness-data.js
      |__ user-shared.js
      
     

```

#### Time Estimates

| Task | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| General: Set up backend (Rails), install relevant Gems, and create models/tables | H | 1hr|  |  |
| Migrate after checking migrations | H | 0.5hr|  |  |
| Configure user authorization | H | 2hrs|  |  |
| Assign associations | H | 1hr|  |  |
| View controllers to confirm how frontend is consuming backend | M | 1hr |  |  |
| Set up seeds file and run it | H | 1hr |  |  |
| General: Set up React app and install relevant tools | H | 0.5hr|  |  |
| General: Clean up App.js and set up directory structure | H | 0.5hr|  |  |
| Work on services directory | H | 1hr|  |  |
| Code out primary structure of App.js (setting up Routes) | H | 1hr |  |  |
| Code out Nav.jsx, Footer,jsx, Home.jsx  | H | 2.5hrs |  |  |
| Code out Login, Sign Up, SignOut and verify  | H | 3hrs|  |  |
| GET request: Code out Dashboard.jsx  | H | 4hrs|  |  |
| GET request: Code out WellDetail.jsx  | H | 2hrs|  |  |
| POST request: Set up the form for WellDataCreate.jsx | H | 2hrs|  |  |
| PUT request: Set up WellDataEdit.jsx | H | 2hrs|  |  |
| GET request: Code out for InnerCircle.jsx | H | 4hrs|  |  |
| Code SharedSettings.jsx | H | 2hrs|  |  |
| Text decoration Pt 1: font style, font size, font colors | M | 3hrs|  |  |
| Text decoration Pt 2: font style, font size, font colors | M | 3hrs|  |  |
| Using Flexbox/GRID Pt 1: Elements resizing and alignment | H | 4hrs|  |  |
| Using Flexbox/GRID Pt 2: Elements resizing and alignment | H | 4hrs|  |  |
| Implementing responsive design Pt 1 | H | 4hrs |  |  |
| Implementing responsive design Pt 2 | H | 4hrs |  |  |
| Final webapp QA | H | 1hr|  |  |
| Total | H | 54hrs | |  |


<br>

### Server (Back End)

#### ERD Model
![Wellness Circle ERD Model](https://i.imgur.com/Wm0oZgo.png)

<br>

***

## Post-MVP

* User can remove viewing access for specific people in their Inner Circle at any time
* User can toggle specific date duration views rather than just the past 7 days
* If a User 1 shares their wellness summary with User 2, User 2 will have to accept or decline 


***

## Code Showcase

Pending

## Code Issues & Resolutions

Pending
