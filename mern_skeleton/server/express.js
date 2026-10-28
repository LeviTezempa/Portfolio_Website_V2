import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes.js'
import authRoutes from "./routes/auth.routes.js";
import contactRoutes from './routes/contact.routes.js'
import projectRoutes from './routes/project.routes.js'
import educationRoutes from './routes/qualification.routes.js'



const app = express()

app.use(cors())
app.use(helmet())
app.use(compress())
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', contactRoutes)
app.use('/', projectRoutes)
app.use('/', educationRoutes)

export default app
