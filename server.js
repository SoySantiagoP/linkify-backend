import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/ask", async (req, res) => {
  const { prompt } = req.body;

  // Respuesta simulada (IA falsa por ahora)
  const fakeResponse = `Perfecto, voy a crear un flujo que conecte Typeform, Notion y Calendly automáticamente.`;

  res.json({ reply: fakeResponse });
});

app.listen(10000, () => console.log("✅ Linkify backend running"));
