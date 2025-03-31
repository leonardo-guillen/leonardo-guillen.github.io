const express = require('express');
const router = express.Router();
const axios = require('axios');

// Recuperar el year de la url, para retornar la informacion en json
router.get('/:year', async function(req, res){
  const {year} = req.params;

  try{
    // Consumir el API y si todo sale bien retornamos los datos
    const response = await axios.get(`https://f1api.dev/api/${year}/drivers`);
    res.json(response.data);
  }catch(error){
    console.log(error);
    res.status(500).send(error);
  }
  });

module.exports = router;
