### Insta Clone:

This project is strictly for `learning purposes`. It brings together some of the latest technologies and concepts,
and covers the frontend, backend and the infrastructure.

#### Description:

This is a clone of instagram. For simplicity, we are going to scope it down, to cover the following features:

**Identity:**

- use `auth0` to manage identity
  - sign up
  - login
  - user profile
  - logout
- on `sign up`, we get back a `user token/id`, which we save to our db, so we can use that to link a user to other entities
- Manage `user permissions` with prisma

**Posts:**

- Allow unauthenticated users to

  - View posts and comments

- Allow authenticated users to

  - Add new posts
  - Like posts
  - comment on posts
  - Like comments

#### Tech Stack:

**Backend:**

- graphql-yoga to create the graphql server
- prisma for the ORM
- jest for unit tests and integration tests

**Frontend:**

- `nextjs` to support SSR, code splitting etc in the react app
- `react-spring` for animations
- `cypress` for the end to end tests
- `jest` for unit tests
- `cloudinary` to save images, do real-time transformations etc

#### Infrastructure:

- All services will be run in `docker containers`
- We will use `docker swarm` for container orchestration
- `Circle CI` for setting up a `CI/CD` environment
- Either `digital ocean` or `now` or `netflify` for the cloud provider
- Use `letsencrypt` for SSL certs

#### Models:

The following are the entities involved:
**_User_** - userId, createdAt (All of the Personally Identifiable Information is stored in `auth0`)
**_Post_** - postId, imageUrl, description, userId, createdAt, updatedAt
**_Comment_** - commentId, postId, userId, comment
**_Likes_** - userId, postId
