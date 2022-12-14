## Hexa-Three-Levels Files Creator


This project is used to generate all the necessary files to implement a CRUD on an indicated entity called 'nameEntity', followinf hexagonal architecture and NestJs (controllers).

The generated files will be the following:
```
<nameEntity>.dto.ts
<nameEntity>.controller.ts
<nameEntity>.service.interface.ts
<nameEntity>.service.ts
<nameEntity>.entity.ts
<nameEntity>.repository.ts
<nameEntity>.schema.ts
```
The generated files use the library called: 'hexa-three-levels'.

# Requirements

To build the library was used:
* Node 16.17.1
* NPM 8.19.2

# Install

* Script Local

You don't need to install, just download the repository and run the script

* GLOBAL

```npm install -g hexa-three-levels-files-creator```

* LOCAL

```npm install hexa-three-levels-files-creator```

# Usage


* Script Local:

You don't need to install, just download the repository and run the script and you can use by directly running the script

```
node index.js 
```

* Global

Ejecutamos **npm-htl-fcreate**

* Local
Add in package.json

```
"scripts": {
    "npm-htl-fcreate": "./node_modules/.bin/npm-htl-fcreate"
},
```

Executing:
```
npm run npm-htl-fcreate
```

* With hexa-three-levels

```
$ npm i -g @nestjs/cli
$ nest new my-project
$ cd my-project
$ npm i hexa-three-levels
$ cd src
$ npm-htl-fcreate
```


# Log

Example creating User entity files:

```
? What is the entity name? User
? What attribute name do you want to include? username
? What is the type of the attribute? string
? Want to add another attribute? Yes
? What attribute name do you want to include? email
? What is the type of the attribute? string
? Want to add another attribute? No
Entity core: User
Entity attributes array: [
  { name: 'username', type: 'string' },
  { name: 'email', type: 'string' }
]
CREATE Folder C:\Users\Daro\Code\my-project\src\application
CREATE Folder C:\Users\Daro\Code\my-project\src\domain
CREATE Folder C:\Users\Daro\Code\my-project\src\infrastructure
CREATE File C:\Users\Daro\Code\my-project\src\application\User.dto.ts
CREATE File C:\Users\Daro\Code\my-project\src\application\User.controller.ts
CREATE File C:\Users\Daro\Code\my-project\src\domain\User.service.interface.ts
CREATE File C:\Users\Daro\Code\my-project\src\domain\User.service.ts
CREATE File C:\Users\Daro\Code\my-project\src\domain\User.entity.ts
CREATE File C:\Users\Daro\Code\my-project\src\infrastructure\User.schema.ts
CREATE File C:\Users\Daro\Code\my-project\src\infrastructure\User.repository.ts
```
