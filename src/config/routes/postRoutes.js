import express from "express"
import { listarPosts } from "../../controller/postController.js";

const routes = (app) => {
    // Permite que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());
    // Rota GET para buscar todos os posts
    app.get("/posts", listarPosts);
}

export default routes;