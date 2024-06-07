import { DataTypes } from "sequelize";

const PeliculaAttributes = {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    Titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El nombre de la pelicula es necesario"
            }
        }
    },
    Director: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El director de la pelicula es necesario"
            }
        }
    },
    Genero: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El genero de la pelicula es necesario"
            }
        }
    },
    Sinopsis: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La sinopsis de la pelicula es necesaria"
            }
        }
    },
    Duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La duracion de la pelicula es necesaria"
            }
        }
    },
    Eliminado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
            notEmpty: {
                args: true,
                msg: 'El estado eliminado es requerido.'
            }
        }
    },
    IdClasificacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El id de pelicula es requerido"
            }
        }
    }
}

const PeliculaOptions = {
    timestamps: false
}

const PeliculaModel = {
    PeliculaAttributes,
    PeliculaOptions
}

export default PeliculaModel
