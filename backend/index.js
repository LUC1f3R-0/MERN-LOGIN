import 'dotenv/config'
import app from "./src/app.js";

const port = process.env.BACKEND_PORT
const host = process.env.BACKEND_HOST

app.listen(port, () => { console.log(`backend server runs on http://${host}:${port}`) })