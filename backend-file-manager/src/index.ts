import express, {Express} from 'express'
import dotenv from "dotenv";
import router from "./routes";
import cors from "cors"
const fileUpload = require("express-fileupload")

dotenv.config()
const PORT: number = +process.env.PORT || 8090;

const app: Express = express();
app.use(fileUpload())
app.use(express.json())
app.use(cors())
app.use('/api', router)
app.get('/', (req, res) => {
    res.status(200).json({message: 'successful connect'})
})

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start().then()