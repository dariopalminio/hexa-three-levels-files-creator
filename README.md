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
# Requirements

* Node 16.17.1
* NPM 8.19.2

# Install

```npm install -g hexa-three-levels-files-creator```

# Usage

```npm-htl-fcreate```

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
