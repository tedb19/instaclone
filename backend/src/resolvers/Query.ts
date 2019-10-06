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
  },

  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  },

  post(parent, { id }, ctx: Context) {
    return ctx.prisma.post({ id })
  }
}
