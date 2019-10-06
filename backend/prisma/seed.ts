import { prisma } from '../src/generated/prisma-client'

async function main() {
  await prisma.createUser({
    name: 'Ted',
    email: 'tedb19@gmail.com',
    password: 'password',
    phoneNumber: '25438786543',
    writtenPosts: {
      create: [
        {
          description: 'my first post',
          imageUrl: 'http://cloudinary.com/image1.png'
        },
        {
          description: 'my second post',
          imageUrl: 'http://cloudinary.com/image1.png'
        }
      ]
    }
  })
}

main()
