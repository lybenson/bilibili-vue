const database = {
  test: {
    username: process.env.DATABASE_USERNAME_TEST || '',
    password: process.env.DATABASE_PASSWORD_TEST || '',
    database: process.env.DATABASE_NAME_TEST || '',
    appdatabase: process.env.DATABASE_APP_NAME_DEV || '',
    host: process.env.DATABASE_HOST_TEST || '127.0.0.1',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  },
  development: {
    username: process.env.DATABASE_USERNAME_DEV || '',
    password: process.env.DATABASE_PASSWORD_DEV || '',
    database: process.env.DATABASE_NAME_DEV || '',
    appdatabase: process.env.DATABASE_APP_NAME_DEV || '',
    host: process.env.DATABASE_HOST_DEV || '',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  },
  production: {
    username: process.env.DATABASE_USERNAME_PRO || 'rongzhi',
    password: process.env.DATABASE_PASSWORD_PRO || 'Rzmain!@123',
    database: process.env.DATABASE_NAME_PRO || 'adviser_manager',
    appdatabase: process.env.DATABASE_APP_NAME_DEV || 'rongzhi_dev',
    host: process.env.DATABASE_HOST_PRO || '121.43.108.15',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 5,
      idle: 30000
    }
  }
}

export default database
