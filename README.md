# bull-basic-template

### This template is divide by the branches

1.  basics: This branch is a very basic Bull setup.
2.  separate-process-function-from-progress-queue: This branch separates the queue name and the process function, preparing it to receive the next branch (main).
3.  main: This branch is the final and more complete template for using Bull. It is prepared to scale your application.

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

Run the server server

    npm run dev:server

Run the worker

    npm run dev:worker

Or Run server and worker together

    npm run dev

Access Bull-Board

    http://localhost:3333/admin/queues
