const { Dog } = require("../models/dog");

const getdog = (req, res) => {
    const allDogs = Dog.find()
.then((allDogs) => {
    if( allDogs.length === 0 ){
        return res.status(404).json({ error: "No hay perros en la base de datos"})
    } else {
        return res.status(200).json(allDogs)
    }
}).catch((error) => {
    return res.status(500).json({ error: "Error al obtener todos los perros" })
});
}
    
