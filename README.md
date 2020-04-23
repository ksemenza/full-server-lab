# full-server-lab
Prisma server includes resolvers, schema, tags, labels, and docker

+ npm install -g prisma

Prisma Playground

 + QUERY

query { tags{ name

labels { name } } }

 + MUTATION
mutation { createTag(data: { name: "Boot-strap" }) { id name

} }

mutation { createLabel(data: { name: "Needs Update" }) { id name

} }

+ Prisma Console http://localhost:4466/_admin

+ Prisma Playground cmd: prisma playground

### Dependence Info

+ @types: I am a big fan of typescript. Therefore you will be required to add the type files.
+ apollo-server-express: I am using this version of apollo since it has express going as well. This way you can make use of express middleware which has been proven to work really well. There are a lot of usecases I can think of that you can use it. But in this case the express middleware will execute before even hitting the graphql resolvers. Works well for auth.
+ ts-node: running typescript for local development. For production I would recommend building a dist directory with tslint and running out of that.
+ graphql-import: this is a really nice library for separating your schema into different files and bringing them together as one import for run time.
+ graphqlgen: this is quite an important library since it speeds up your development time significantly. It generates your boilerplate resolvers by looking at your public schema and prisma client.