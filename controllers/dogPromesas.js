const { Dog } = require("../models/dog");

const getdog = (req, res) => {
    Dog.find()
.then((allDogs) => {
    if( allDogs.length === 0 ){
         res.status(404).json({ message: "No hay perros en la base de datos"})
    } else {
         res.status(200).json(allDogs)
    }
}).catch((error) => {
     res.status(500).json({ message: "Error al obtener todos los perros" }, error)
});
}
const getdogById = (req, res) => {
    const { id } = req.params
    Dog.findById(id)
    .then((dog) => {
        if(!dog){
            res.status(404).json({ message: "No hay perro con ese ID"})
        } else {
            res.status(200).json(dog)
        }
    }).catch((error) => {
        res.status(500).json({ message: "Error al obtener el perro con ese ID" }, error)
    });
}
const postDog = (req, res) => {
    const newDog = new Dog({ ...req.body })
    newDog.save()
    .then((insertedDog) => {
        res.status(201).json({message: "Perro agregado exitosamente", perro: insertedDog})
    }).catch((error) => {
        res.status(400).json({ message: "Los datos proporcionados son inválidos." }, error)
    });
}
const putDog = (req, res) => {
    const { id } = req.params
    Dog.findByIdAndUpdate(id, req.body, {
        new: true,
    })
    .then((updatedDog) => {
        res.status(200).json(updatedDog)
    }).catch((error) => {
       res.status(500).json({ message: "Error al actualizar el perro" }, error)
    });
}
const deleteDog = (req, res) => {
    const { id } = req.params
     Dog.findByIdAndDelete(id)
    .then((deletedDog) => {
         res.status(200).json("Perro eliminado exitosamente")
    }).catch((error) => {
        res.status(500).json({ message: "Error al eliminar el perro" }, error)
    });
}
    
module.exports = { 
    getdog,
    getdogById,
    postDog,
    putDog, 
    deleteDog
}