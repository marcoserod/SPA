const express = require("express");
const app = express();
const port = 3000;

// Ruta principal que sirve un HTML con un video de YouTube y recursos pesados
app.get("/", (req, res) => {
  const largeContent = "A".repeat(10 * 1024 * 1024); // 10 MB
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Servidor Cargado</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f0f0f0; }
        h1 { color: #333; }
      </style>
    </head>
    <body>
      <h1>Servidor Node.js con Contenido Pesado</h1>
      <!-- Video de YouTube incrustado -->
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      
      
      
      <!-- Texto adicional -->
      <p>Contenido adicional para aumentar la carga del HTML.</p>
      <h1>Servidor Pesado</h1><p>${largeContent}</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
