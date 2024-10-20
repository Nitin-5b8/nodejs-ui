const express = require('express'); 
const app = express(); 
app.use(express.json()); 
const PORT = 3000; 
let items = [ 
 { id: 1, name: 'Item 1' }, 
 { id: 2, name: 'Item 2' } 
];  
app.get('/items', (req, res) => { 
 res.status(200).json(items); 
}); 
app.get('/items/:id', (req, res) => { 
 const item = items.find(i => i.id === parseInt(req.params.id)); 
 if (item) { 
 res.status(200).json(item); 
 } else { 
 res.status(404).send('Item not found'); 
 } 
}); 
app.post('/items', (req, res) => { 
 const newItem = { 
 id: items.length + 1, 
 name: req.body.name 
 }; 
 items.push(newItem); 
 res.status(201).json(newItem); 
}); 
app.put('/items/:id', (req, res) => { 
 const item = items.find(i => i.id === parseInt(req.params.id)); 
 if (!item) return res.status(404).send('Item not found'); 
 item.name = req.body.name; 
 res.status(200).json(item); 
}); 
app.delete('/items/:id', (req, res) => { 
 const index = items.findIndex(i => i.id ===
parseInt(req.params.id)); 
 if (index === -1) return res.status(404).send('Item not found'); 
 const deletedItem = items.splice(index, 1); 
 res.status(204).send(); 
}); 
app.listen(PORT, () => { 
 console.log(`Server is running at http://localhost:3000`); 
}); 