const express = require('express')
const app = express()
const port = 3000

// Definizione d'uso di una cartella per i file statici
app.use(express.static('public'));

// Definizone di rotta home
app.get('/', (req, res) => {
    res.send('Server del mio blog');
})

// Definizione rotta del blog
app.get('/blog', (req, res) => {
    const blog = [
        {
            titolo: "Pane Fresco",
            contenuti: "Pane fatto in casa con farina di grano tenero e lievito naturale.",
            immagine: "http://localhost:3000/img/ciambellone.webp",
            tags: ["pane", "fresco", "artigianale", "lievito naturale"]
          },
          {
            titolo: "Cornetto al Burro",
            contenuti: "Cornetto soffice e burroso, perfetto per la colazione.",
            immagine: "http://localhost:3000/img/cracker_barbabietola.webp",
            tags: ["cornetto", "colazione", "burro", "dolce"]
          },
          {
            titolo: "Pizza Margherita",
            contenuti: "Pizza con pomodoro fresco, mozzarella di bufala e basilico.",
            immagine: "http://localhost:3000/img/pane_fritto_dolce.webp",
            tags: ["pizza", "margherita", "pomodoro", "mozzarella"]
          },
          {
            titolo: "Focaccia Genovese",
            contenuti: "Focaccia morbida e fragrante, con rosmarino e sale grosso.",
            immagine: "http://localhost:3000/img/pasta_barbabietola.webp",
            tags: ["focaccia", "genovese", "rosmarino", "sale grosso"]
          },
          {
            titolo: "Brioche Siciliana",
            contenuti: "Brioche dolce, soffice e perfetta per accompagnare granite siciliane.",
            immagine: "http://localhost:3000/img/torta_paesana.webp",
            tags: ["brioche", "siciliana", "dolce", "granita"]
          }
    ];
    // array in JSON da ritornare per l'endpoint dell'API
    res.json(blog);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})