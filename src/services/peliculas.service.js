import { ResourceNotFound } from 
"../errors/resource-not-found-error.js"
import sequelize from "../models/database.js"
import { Op } from "sequelize"

const getPeliculas = async (filters) => {
    const whereQuery = {}
    if(filters){
        if(filters.titulo){
            whereQuery.titulo = { [Op.like]: `%${filters.titulo}%`}  
        }
    }


    const resultado = await sequelize.models.Peliculas.findAll({
        where: whereQuery,
        attributes: [
            'Id',
            'Titulo',
            'Director',
            'Genero',
            'Sinopsis',
            'Duracion',
            'Eliminado',
            'IdClasificacion'
        ],
        order: [['Titulo', 'ASC']]
    })
    console.log('resultado', resultado)
    return resultado.map(p => {
        return {
            id: p.dataValues.Id,
            titulo: p.dataValues.Titulo,
            director: p.dataValues.Director,
            genero: p.dataValues.Genero,
            sinopsis: p.dataValues.Sinopsis,
            duracion: p.dataValues.Duracion,
            idClasificacion: p.dataValues.IdClasificacion, 
            
        }
    })
}

const insertarPelicula = async (peliculaCmd) => {
    const resultado = await sequelize.models
    .Peliculas.create({
        titulo: peliculaCmd.titulo,
        director: peliculaCmd.director,
        genero: peliculaCmd.genero,
        sinopsis: peliculaCmd.sinopsis,
        duracion: peliculaCmd.duracion,
        eliminado: false,
        idClasificacion: peliculaCmd.idClasificacion
    })
    console.log('insertar pelicula', resultado)
    return {
        id: resultado.dataValues.Id,
        titulo: resultado.dataValues.Titulo,
    };
}

// ====================PUT====================
const editarPelicula = async (peliculaCmd) => {
    const pelicula = await sequelize.models.Peliculas.findOne({
        where: { Id: peliculaCmd.id, Eliminado: false },
    });
    if (!pelicula) {
        throw new ResourceNotFound("Película no encontrada");
    }

    const updatedPelicula = await sequelize.models.Peliculas.update(
        {
            Titulo: peliculaCmd.titulo,
            Director: peliculaCmd.director,
            Genero: peliculaCmd.genero,
            Sinopsis: peliculaCmd.sinopsis,
            Duracion: peliculaCmd.duracion,
            IdClasificacion: peliculaCmd.idClasificacion
        },
        {
            where: { Id: peliculaCmd.id }
        });
    console.log(updatedPelicula)
    return { id: peliculaCmd.id };

}

const peliculasService = {
    getPeliculas,
    insertarPelicula,
    editarPelicula
}

export default peliculasService;
