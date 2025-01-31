## Typescript Express Prisma template

1. Update database string in .env file

2. Generate the prisma client
```
npx prisma generate
npx prisma migrate dev --name <migration-name>
```
*Note*: If your database already has relations then run: 
```
npx prisma db pull
npx prisma generate
```

3. Now you can use generated models in your code:
```js
const result = await prisma.user.count({});
```