# full-server-lab
Prisma server includes resolvers, schema, tags, labels, and docker

+ npm install -g prisma

Prisma Playground

### Queries
+ Tag Query
query {
  tags {
    id
    name
    isPublished
  }
}

+ Labels Query
query {
  labels {
    id
    name
    isAdded
  }
}

+ Tags and Labels Query
query{
  tags {
    id
    name
    isPublished
    labels {
      id
      name
      isAdded
    }
  }
}

### Create 
+ Create Tag
mutation { 
  createTag(
    data: { 
      name: "Lab23" }) 
  { 
    id 
    name

} }

+ Create Label
mutation { 
    createLabel
  (data: 
    { name: 
      "Needs Update" 
    }) 
  { 
    id 
    name

} 
}

+ Create Tag and connected Label
mutation { 
  createTag(
    data: { 
      name: "Boots"
  labels: {
    create: {
      name: "Connect"
    }

  }
    }) 
  { 
    id 
    name
  } 
}

### Delete
 + Delete Tag
 
mutation {
  deleteTag(where: {
    id: "TAG ID"
  }) {
    id
    name
  }
}

### Update
+ Update Tag

mutation {
  updateTag(
    where: {
      id: "ck9bzkqro007y07659ddovhty"
    }
    data: {
      name:"Prisma"
    }
  ) {
    id
  }
}

+ Prisma Console http://localhost:4466/_admin

+ Prisma Playground cmd: prisma playground

### Dependence Info

+ @types: I am a big fan of typescript. Therefore you will be required to add the type files.
+ apollo-server-express: I am using this version of apollo since it has express going as well. This way you can make use of express middleware which has been proven to work really well. There are a lot of usecases I can think of that you can use it. But in this case the express middleware will execute before even hitting the graphql resolvers. Works well for auth.
+ ts-node: running typescript for local development. For production I would recommend building a dist directory with tslint and running out of that.
+ graphql-import: this is a really nice library for separating your schema into different files and bringing them together as one import for run time.
+ graphqlgen: this is quite an important library since it speeds up your development time significantly. It generates your boilerplate resolvers by looking at your public schema and prisma client.