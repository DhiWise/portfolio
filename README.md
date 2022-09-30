# A developer's portfolio

If you're a developer, it's important to have a portfolio that showcases your skills and experience. It may not be enough to simply show off your code—you'll need to share more about what you've done and why it's impressive. This a portfolio website built with React, Prisma and NestJS.

This project's front-end is generated with ❤️ from Dhiwise.

## Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Versions of Technology](#versions-of-technology)
4. [Setup](#setup)
5. [Folder Structure](#folder-structure)
6. [License](#license)
7. [Community](#community)

## About

This project has 2 sub-folders - frontend and backend.

1. Frontend

    All the design has been generated with [tailwindcss](https://tailwindcss.com/).
    Find all the theme related configuration inside tailwind.config.js

    This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    This project is integrated with a [Tailwind CSS](https://tailwindcss.com/) setup, a new utility-first css framework, in an CRA environment. You can read more over on [Getting Started with Tailwind](https://tailwindcss.com/docs/installation).

    Figma: https://www.figma.com/file/7rSTh3w3EF5XVvEbi8BYeA/Portfolio?node-id=4%3A1630

2. Backend

    For the backend, [Prisma](https://www.prisma.io/) and [NestJs](https://nestjs.com/) is used.

    Prisma is next-generation Node.js and TypeScript ORM used to Perform database operations. For this project, SQLite database is used to store and retrieve data using Prisma.

    NestJs A progressive Node.js framework for building efficient, reliable and scalable server-side applications. For this project a backend server, accessible through REST APIs to store and retrieve data from the database.

## Features

In this portfolio, following sections are covered.
1. Basic Information with resume download
2. Skills
3. Services
4. Price Plans
5. Recommendations
6. Education
7. Work History
8. Portfolio
9. Medium Blogs
10. Contact

## Versions of Technology
1. Nodejs version >= 14
2. NestJs version >= 9
3. Prisma version >=4

## Setup
Front-end runs on port:3000 and backend runs on port:8081.
1. from the root ``` cd portfolio-frontend && npm i```
2. from the root ``` cd portfolio-backend && npm i ``` 
3. create .env with variable ```DATABASE_URL="file:folio.db"``` file in ```portfolio-backend``` folder and run ```npx prisma generate``` when you are running the project for the first time. 
4. from the root ```npm start```

> Note: This project is setup in such a way that you can start the server and client from the root folder using ```npm start```

## Folder Structure

```
├── portfolio
│   ├── portfolio-frontend --- client
│   ├── portfolio-backend  --- server
├── package.json
├── README.md
```
Detailed folder structure is inside the readme of respective folder.

## License

MIT License
Copyright (c) 2022 DhiWise

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Community

<a href="https://twitter.com/dhiwise"><img src="https://user-images.githubusercontent.com/35039342/55471524-8e24cb00-5627-11e9-9389-58f3d4419153.png" width="60" alt="DhiWise Twitter"></a>

<a href="https://www.youtube.com/c/DhiWise"><img src="https://cdn.vox-cdn.com/thumbor/0kpe316UpZWk53iw3bOLoJfF6hI=/0x0:1680x1050/1400x1400/filters:focal(706x391:974x659):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/56414325/YTLogo_old_new_animation.0.gif" width="60" alt="DhiWise YouTube"></a>

<a href="https://discord.com/invite/rFMnCG5MZ7"><img src="https://user-images.githubusercontent.com/47489894/183043664-b01aac56-0372-458a-bde9-3f2a6bded21b.png" width="60" alt="DhiWise Discord"></a>

<a href="https://docs.dhiwise.com/"><img src="https://global-uploads.webflow.com/618e36726d3c0f19c9284e56/62383865d5477f2e4f6b6e2e_main-monogram-p-500.png" width="60" alt="DhiWise Documentation"></a>