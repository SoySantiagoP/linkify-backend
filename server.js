import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Ruta de prueba básica
app.get("/", (req, res) => {
  res.send("🚀 Linkify backend activo y funcionando correctamente");
});

// ✅ Ruta de salud para monitoreo
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), timestamp: Date.now() });
});

// ✅ Ruta donde luego recibiremos datos desde n8n
app.post("/webhook", (req, res) => {
  console.log("📩 Datos recibidos:", req.body);
  res.json({ message: "Datos recibidos correctamente", data: req.body });
});

app.listen(PORT, () => {
  console.log(`✅ Linkify backend corriendo en puerto ${PORT}`);
});
