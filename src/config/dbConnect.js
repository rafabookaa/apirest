
//importando o mongoose, depois que a biblioteca já estiver instalada
import mongoose, { mongo } from 'mongoose';

//Criando uma funcao assincrona para conectar ao banco 
async function conectaNaDatabase () {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default conectaNaDatabase;





