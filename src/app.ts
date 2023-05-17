import "dotenv/config"
import express from "express"
import cors from "cors"
import routes from "./infrastructure/router"

const port = process.env.PORT || 3001

const app = express()
app.use(cors())
app.use(express.json())
app.use("/tmp", express.static("tmp"));
app.use(express.static('tmp'))
app.use(`/`,routes)

// Ruta para obtener el archivo QR
app.get("/qr", (req, res) => {
    const qrPath = `${process.cwd()}/tmp/qr.svg`;
    res.sendFile(qrPath);
  });

app.listen(port, () => console.log(`Ready...${port}`))