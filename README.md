# Training API

This project is a CRUD users API.

## Prerequisites

You need to install nodejs to run the server

You need to install docker and docker compose to run the project's database

## Installation

In the project's directory run this :

```bash
$ sh init.sh
```

```bash
$ sh insertData.sh
```


*The mysql docker image might not be pulled on m1 and m2 processor macs, to solve the problem you must activate Rosetta in Docker Destop by going to **Settings/Features in development** then check the last proposal: **"Use Rosetta for..."** and then install it with the command:
```bash
#to run in a terminal and follow the instructions to install rosetta
$ softwareupdate --install-rosetta
```


## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

### Create a user

```
POST /users

body : {
  firstName: string,
  lastName: string,
  email: string
}

Responses code : 201, 409
```

### Get a user

```
GET /users/:id

Responses code : 200, 404
```

### Get all users

```
GET /users

Responses code : 200
```

### Update a user

```
PUT /users/:id
body : {
  firstName: string,
  lastName: string,
  email: string
}

Responses code : 200, 201, 409
```

### Delete a user

```
DELETE /users/:id

Responses code : 200, 404
```

## License

Nest is [MIT licensed](LICENSE).
