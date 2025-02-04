const express = require('express')
const app = express()
const port = 3000

// Definisco l'uso di una cartella per i file statici
app.use(express.static('public'));

// Definizone di rotta home
app.get('/', (req, res) => {
    res.send('Server del mio blog');
})

// Definizione rotta del blog
app.get('/blog', (req, res) => {
    const blog =[
        {
            titolo: "Pane Fresco",
            contenuti: "Pane fatto in casa con farina di grano tenero e lievito naturale.",
            immagine: "https://example.com/immagini/pane_fresco.jpg",
            tags: ["pane", "fresco", "artigianale", "lievito naturale"]
          },
          {
            titolo: "Cornetto al Burro",
            contenuti: "Cornetto soffice e burroso, perfetto per la colazione.",
            immagine: "https://example.com/immagini/cornetto_burro.jpg",
            tags: ["cornetto", "colazione", "burro", "dolce"]
          },
          {
            titolo: "Pizza Margherita",
            contenuti: "Pizza con pomodoro fresco, mozzarella di bufala e basilico.",
            immagine: "https://example.com/immagini/pizza_margherita.jpg",
            tags: ["pizza", "margherita", "pomodoro", "mozzarella"]
          },
          {
            titolo: "Focaccia Genovese",
            contenuti: "Focaccia morbida e fragrante, con rosmarino e sale grosso.",
            immagine: "https://example.com/immagini/focaccia_genovese.jpg",
            tags: ["focaccia", "genovese", "rosmarino", "sale grosso"]
          },
          {
            titolo: "Brioche Siciliana",
            contenuti: "Brioche dolce, soffice e perfetta per accompagnare granite siciliane.",
            immagine: "https://example.com/immagini/brioche_siciliana.jpg",
            tags: ["brioche", "siciliana", "dolce", "granita"]
          }
    ]
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})