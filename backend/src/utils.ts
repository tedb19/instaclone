import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma-client'

export interface Context {
  prisma: Prisma
  request: any
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string
    }
    return userId
  }

  throw new Error(`User not authorized!`)
}
