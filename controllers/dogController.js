const { Dog } = require("../models/dog");

const getdog = async (req, res) => {
  try{
      const allDogs = await Dog.find()
      if( allDogs.length === 0 ){
         res.status(404).json({ error: "No hay perros en la base de datos"})
      } else {
        res.status(200).json(allDogs)
      }
  } catch (error) {
      res.status(500).json({ message: "Error al obtener los perros" }, error)
  }
};

const getdogById = async (req, res) => {
  const { id } = req.params
  try{
    const dog = await Dog.findById(id)
    if(!dog){
       res.status(404).json({ message: "Perro no Encontrado"}, error)
    } else {
     res.status(200).json({dog})
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el perro con ese ID" }, error)
  }
}

const postDog = async (req, res) => {
  try{
    const newDog = new Dog({ ...req.body })
    const insertedDog = await newDog.save()
    return res.status(201).json({message: "Perro agregado exitosamente", perro: insertedDog})
  } catch (error) {
    return res.status(400).json({ message: "Los datos proporcionados son inválidos." }, error)
  }
}

const putDog =async (req, res) => {
  try{    
    const { id } = req.params
    const updatedDog = await Dog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedDog)// ver manejo de error 404

  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el perro" }, error)  
  }
} 

const deleteDog = async (req, res) => {
  try{
    const { id } = req.params
    await Dog.findByIdAndDelete(id)
     res.status(200).json("Perro eliminado exitosamente")
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el perro" }, error)
  }
}
module.exports = { 
     getdog,
    getdogById,
    postDog,
    putDog, 
    deleteDog
}