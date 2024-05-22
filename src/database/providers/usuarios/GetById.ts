import { ETableNames } from '../../ETableNames';
import { IUsuario } from '../../models';
import { Knex } from '../../knex';


export const getById = async (id: number): Promise<Omit<IUsuario, 'senha'> | Error> => {
  try {
    const result = await Knex(ETableNames.usuario).select('id', 'nome', 'matricula', 'email', 'perfil', 'status').where('id', '=', id).first();

    if(result) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar o registro');
  }
};