import { getUserId, Context } from '../utils'

export const Query = {
  async feed(parent, args, ctx: Context) {
    const where = args.filter ? { description_contains: args.filter } : {}

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
}
