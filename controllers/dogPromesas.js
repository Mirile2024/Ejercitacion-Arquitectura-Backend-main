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
const getdogById = (req, res) => {
    const { id } = req.params
    const dog = Dog.findById(id)
    .then((dog) => {
        if(!dog){
            return res.status(404).json({ error: "No hay perro con ese ID"})
        } else {
            return res.status(200).json(dog)
        }
    }).catch((error) => {
        return res.status(500).json({ error: "Error al obtener el perro con ese ID" })
    });
}
const postDog = (req, res) => {
    const newDog = new Dog({ ...req.body })
    const insertedDog = newDog.save()
    .then((insertedDog) => {
        return res.status(201).json({message: "Perro agregado exitosamente", perro: insertedDog})
    }).catch((error) => {
        return res.status(400).json({ error: "Los datos proporcionados son inválidos." })
    });
}
const putDog = (req, res) => {
    const { id } = req.params
    const updatedDog = Dog.findByIdAndUpdate(id, req.body, {
        new: true,
    })
    .then((updatedDog) => {
        return res.status(200).json(updatedDog)
    }).catch((error) => {
        return res.status(500).json({ error: "Error al actualizar el perro" })
    });
}
const deleteDog = (req, res) => {
    const { id } = req.params
    const deletedDog = Dog.findByIdAndDelete(id)
    .then((deletedDog) => {
        return res.status(200).json("Perro eliminado exitosamente")
    }).catch((error) => {
        return res.status(500).json({ error: "Error al eliminar el perro" })
    });
}
    
module.exports = { 
     getdog,
    getdogById,
    postDog,
    putDog, 
    deleteDog
}