const info = () => `War ready!`

// feed(filter: String, first: Int, skip: Int, orderBy: PostOrderByInput): Feed!
const feed = async (parent, args, ctx, info) => {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    : {}

  const posts = await ctx.prisma.posts({
    where,
    first: args.first,
    skip: args.skip,
    orderBy: args.orderBy
  })

  const count = await ctx.prisma
    .postsConnection({
      where
    })
    .aggregate()
    .count()

  return {
    posts,
    count
  }
}
module.exports = {
  info,
  feed
}
