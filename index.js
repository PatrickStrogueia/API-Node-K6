import express from "express";
// const express = require("express");

const app = express();
const PORT = 8000;

app.get('/items', (req, res) => {
    res.json({ items: ['item1', 'item2', 'item3'] });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// comando: node .\index.js
