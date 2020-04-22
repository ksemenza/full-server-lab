const resolvers = {
    Query: {
      TagById (root, { tagId }, { prisma }) {
        return prisma.tag({ id: tagId })
      },
      addedLabel (root, args, { prisma }) {
        return prisma.labels({ where: { isAdded: true } })
      }
    },
    Mutation: {
      createTag (root, { name }, { prisma }) {
        return prisma.createTag({ name })
      },
      createLabel (root, { name, tagId }, { prisma }) {
        return prisma.createLabel({
          name,
          tags: { connect: { id: tagId } }
        })
      },
      markLabelAsAdded (root, { labelId }, { prisma }) {
        return prisma.updateLabel({
          where: { id: labelId },
          data: { isAdded: true }
        })
      }
    },
    Tag: {
      labels (root, args, { prisma }) {
        return prisma.tag({ id: root.id }).labels()
      }
    },
    Labels: {
      tag (root, args, { prisma }) {
        return prisma.label({ id: root.id }).tag()
      }
    }
  }
  
  module.exports = resolvers