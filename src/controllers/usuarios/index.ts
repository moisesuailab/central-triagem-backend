import * as signIn from './SignIn';
import * as signUp from './SignUp';
import * as getAll from './GetAll';
import * as getById from './GetById';


export const UsuariosController = {
  ...signIn,
  ...signUp,
  ...getAll,
  ...getById
};