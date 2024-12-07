


![Logo](https://raw.githubusercontent.com/anmolyadav-dev/URL-SHORTENER-REACT/57caa57713f92135777f47dc63ed9365fb986d09/Frontend/public/assets/image.png)


## Features

- Generate short URLs from long URLs.
- Redirect users using the short URLs.
- Secure API with CORS.
- Environment-specific configurations (development and production).

## Technologies Used
- Node.js (Server-side)
- Express.js (Web framework)
- MongoDB (Database)
- dotenv (Environment variable management)
- CORS (Cross-Origin Resource Sharing)

## Installation

1. Fork and Clone the Repo

 
```bash
git clone https://github.com/[your-username]/[forked-repo-name].git
        # Copy and paste this in code editor (like vscode) terminal
``` 

Install backend  with npm

```bash
  cd Backend
  npm install 
```
Install Frontend with npm
```bash
  cd Frontend
  npm install 
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

create first .env file in Backend Folder
- .env (backend) 

    ```
    MONGO_URI = {YOUR MONGODB URL}
    PORT=5000
    FRONTEND_URL = localhost:5173 

create this .env file in Frontend Folder
- .env (Frontend)
    ```

    VITE_API_URL = http://localhost:5000
## RUN THE SITE

- Open a terminal in **Frontend folder** and run following command

    ```bash
    npm run dev

- Open a terminal in **Backend folder** and run following command

    ```bash
    npm start

    # If everything went well then this will start your server at port 5000 and connect with database


## License
This project is licensed under the MIT License.  
[MIT](https://choosealicense.com/licenses/mit/)

