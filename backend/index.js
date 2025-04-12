import 'dotenv/config'
import app from "./src/app.js";
import connection from './src/config/database.config.js';

const port = process.env.BACKEND_PORT
const host = process.env.BACKEND_HOST


const server = async () => {
    try {
        await connection()
        app.listen(port, () => { console.log(`backend server runs on http://${host}:${port}`) })
    } catch (error) {

    }
}

server()