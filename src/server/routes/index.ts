import { Router } from 'express';
import { CidadesController, PessoasController, UsuariosController } from '../../controllers';
import { ensureAuthenticated } from '../../shared/middleware';


const router = Router();

router.get('/', (req, res)=>{
  return res.send('Olá, DEV!');
});

router.get('/cidades', ensureAuthenticated, CidadesController.getAllValidation, CidadesController.getAll);
router.post('/cidades', ensureAuthenticated, CidadesController.createValidation, CidadesController.create);
router.get('/cidades/:id', ensureAuthenticated, CidadesController.getByIdValidation, CidadesController.getById);
router.put('/cidades/:id', ensureAuthenticated, CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete('/cidades/:id', ensureAuthenticated, CidadesController.DeleteByIdValidation, CidadesController.deleteById);

router.get('/pessoas', ensureAuthenticated, PessoasController.getAllValidation, PessoasController.getAll);
router.post('/pessoas', ensureAuthenticated, PessoasController.createValidation, PessoasController.create);
router.get('/pessoas/:id', ensureAuthenticated, PessoasController.getByIdValidation, PessoasController.getById);
router.put('/pessoas/:id', ensureAuthenticated, PessoasController.updateByIdValidation, PessoasController.updateById);
router.delete('/pessoas/:id', ensureAuthenticated, PessoasController.deleteByIdValidation, PessoasController.deleteById);

router.get('/usuarios', ensureAuthenticated, UsuariosController.getAllValidation, UsuariosController.getAll);
router.get('/usuarios/:id', ensureAuthenticated, UsuariosController.getByIdValidation, UsuariosController.getById);
router.post('/cadastrar', UsuariosController.signUpValidation, UsuariosController.signUp);
router.post('/entrar', UsuariosController.signInValidation, UsuariosController.signIn);

// // Rota para gerar token de reset de senha
// router.get('/reset_token/:id', UsuariosController.generateResetToken);
// // Rota para alteração da senha com o token
// router.put('/alterarsenha/:id', UsuariosController.updatePasswordWithToken);
// // Rota para atualizar a senha sem o token
// router.put('/atualizarsenha/:id', ensureAuthenticated, UsuariosController.updatePassword)



export {router};