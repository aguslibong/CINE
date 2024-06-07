import { DataTypes } from "sequelize";

const PeliculaAttributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El nombre de la pelicula es necesario"
            }
        }
    },
    director: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El director de la pelicula es necesario"
            }
        }
    },
    genero: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El genero de la pelicula es necesario"
            }
        }
    },
    sinopsis: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La sinopsis de la pelicula es necesaria"
            }
        }
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La duracion de la pelicula es necesaria"
            }
        }
    },
    eliminado: {
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
    idClasificacion: {
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
