const configuration = {
  port: parseInt(process.env.PORT!),
  jwtSecret: process.env.JWT_ACCESSTOKEN_SECRET,
  userSvcUrl: process.env.USERS_SVC_URL,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT!),
    username: process.env.POSTGRES_DATABASE_USERNAME,
    pwd: process.env.POSTGRES_DATABASE_PASSWORD,
    dbName: process.env.POSTGRES_DATABASE_NAME
  }
}

export default configuration
