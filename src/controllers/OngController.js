const generateUniqueId = require('../utils/generateUniqueId')
const connection = require('../database/connection');


module.exports = {
   
  async index(req, res){

    const organizacao = await connection('organizacao').select('id', 'name','email', 'whatsapp', 'city', 'uf');
      return res.json(organizacao);
    
  },

   async create(req, res){
    const {name, email, whatsapp, city, uf} = req.body;
 
    const id = generateUniqueId();
  
    await connection('organizacao').insert({
      id,
      name,
      email,
      whatsapp,
      city, 
      uf,
    })
   
     return res.json({id});
  
   }
}