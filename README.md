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