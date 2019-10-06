import { Context, getUserId } from '../../utils'

export const post = {
  async createPost(parent, args, ctx: Context) {
    const userId = await getUserId(ctx)
    console.log('args', args)
    return ctx.prisma.createPost({
      ...args,
      author: { connect: { id: userId } }
    })
  },

  async deletePost(parent, { id }, ctx: Context) {
    const userId = await getUserId(ctx)
    const postExists = await ctx.prisma.$exists.post({
      author: { id: userId },
      id
    })
    if (!postExists) {
      throw new Error('Post not found, or you are not the author!')
    }

    return ctx.prisma.deletePost({ id })
  }
}
