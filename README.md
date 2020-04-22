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

+ Prisma Console https://us1.prisma.sh/k-semenza-a8c44e/demo-server/dev/_admin

+ Prisma Playground cmd: prisma playground