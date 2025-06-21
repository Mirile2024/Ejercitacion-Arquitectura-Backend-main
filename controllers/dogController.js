const { Dog } = require("../models/dog");

const getdog = async (req, res) => {
  try{
      const allDogs = await Dog.find()
      if( allDogs.length === 0 ){
        return res.status(404).json({ error: "No hay perros en la base de datos"})
      } else {
        return res.status(200).json(allDogs)
      }
  } catch (error) {
      return res.status(500).json({ error: "Error al obtener los perros" })
  }
};

const getdogById = async (req, res) => {
  try{
    const { id } = req.params
    const dog = await Dog.findById(id)
    if(!dog){
      return res.status(404).json({ error: "No hay perro con ese ID"})
    } else {
      return res.status(200).json(dog)
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener el perro con ese ID" })
  }
}

const postDog = async (req, res) => {
  const newDog = new Dog({ ...req.body })
  const insertedDog = await newDog.save()
  return res.status(201).json(insertedDog)
}

const putDog =async (req, res) => {
  try{    
    const { id } = req.params
    const updatedDog = await Dog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedDog)
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar el perro" })
  }
} 

const deleteDog = async (req, res) => {
  try{
    const { id } = req.params
    const deletedDog = await Dog.findByIdAndDelete(id)
    return res.status(200).json(deletedDog)
  } catch (error) {
    return res.status(500).json({ error: "Error al eliminar el perro" })
  }
}
module.exports = { 
     getdog,
    getdogById,
    postDog,
    putDog, 
    deleteDog
}