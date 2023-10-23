
//importando o mongoose, depois que a biblioteca já estiver instalada
import mongoose, { mongo } from 'mongoose';

//Criando uma funcao assincrona para conectar ao banco 
async function conectaNaDatabase () {
  mongoose.connect('mongodb+srv://rafabookaa:726129Kr%23@cluster0.mrelzco.mongodb.net/livraria?retryWrites=true&w=majority');

  return mongoose.connection;

}

export default conectaNaDatabase;





