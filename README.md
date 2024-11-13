# bull-basic-template

Clone Project

    git clone git@github.com:willmagna/bull-basic-template.git

Run Redis on Docker

    docker run --name redis -p 6379:6379 -d -t redis:alpine

    or

    sudo docker run -p 6379:6379 --name redis -d redis redis-server --appendonly yes --requirepass 123456

Add .env to the project

    cp .env.example .env

Install all the dependencies

    npm i

Run the server application

    npm run dev:server

Run the worker

    npm run dev:worker

Access Bull-Board

    http://localhost:3333/admin/queues
