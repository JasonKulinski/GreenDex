import * as dotenv from 'dotenv'
dotenv.config()
process.env.PORT ??= '9000'

export default process.env