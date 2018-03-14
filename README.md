Quick-Start

Weather app shows the forecast of Helsinki city at the moment. 

Pre-requisites

- Install Docker software from below pages:
Mac : https://docs.docker.com/docker-for-mac/install/
Ubuntu : https://docs.docker.com/install/linux/docker-ce/ubuntu/
Windows: https://docs.docker.com/docker-for-windows/install/
Debian : https://docs.docker.com/install/linux/docker-ce/debian/

- Install Docker compose

- Clone weatherapp repository to local machine

- Make sure that localhost:8000 and localhost:9000 are free on the host computer 


Getting started

Register API key:
The API key needs to be registered with following steps:
1. Navigate to http://openweathermap.org/appid
2. Cick on 'Sign up' button
3. Fill in the sign up form and click on 'Create account' button.
4. Account is created. Navigate to 'API keys tab.
5. Copy the key from 'Key' section.

Now we have a key. Use the key on the app as follows:  
1. Navigate to weatherapp/backend/src
2. open index.js using your favourite editor.
3. On the 8th line, paste the keys inside the ''

How to run the app:

1. Navigate to weatherapp/

cd weatherapp

2. The frontend and backend services are in two differrent dockers and these dockers are configured on docker-compose.yml file. The followng script will spin the frontend and backend containers:

docker-compose up

weatherapp_backend_1 and weatherapp_frontend_1 containers starts up.
The frontend runs on localhost:8000 and backend runs on localhost:9000 on the host machine.
 
The volume is mounted from host to frontend and backend dockers and by default they enable hot reload.

It is possible to get the forecast of other cities as follows (for development and testing purpose only):

1. docker exec -it weatherapp_backend_1 bash
2. cd src
3. Install your favourite editor
4. List of city ID city.list.json.gz can be downloaded here http://bulk.openweathermap.org/sample/
5. Open the city.list.json file and check the name and country of the city to get the forecast for.
6. Open index.js from your favourite editor.
7. provide the country in the 10th line in the place of city in the format 'CITY,COUNTRY'
8. Restart the docker container: restart weatherapp_backend_1

The dockers can be cleaned up from the host as follows:
1. docker stop weatherapp_frontend_1 && docker rm weatherapp_frontend_1
2. docker stop weatherapp_backend_1 && docker rm weatherapp_backend_1
3. docker rmi weatherapp_backend weatherapp_frontend

