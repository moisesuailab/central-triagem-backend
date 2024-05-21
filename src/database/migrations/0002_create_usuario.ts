import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex.schema.createTable(ETableNames.usuario, table => {
    table.bigIncrements('id').primary().index();
    table.string('nome').notNullable().checkLength('>', 3);
    table.string('matricula').index().unique().notNullable().checkLength('=', 8);
    table.string('email').index().unique().notNullable().checkLength('>=', 5);
    table.string('senha').notNullable().checkLength('>=', 6);    
    table.string('role').notNullable().checkLength('>=', 3);
    table.enu('status', ['ativo', 'inativo'], {useNative: true, existingType: true, enumName: 'foo_type'}).notNullable();
    table.timestamp('created_at', {useTz: true}).notNullable();
    
    table.comment('Tabela usada para armazenar usuários do sistema');
  }).then( ()=> {
    console.log(`# Created table ${ETableNames.usuario}`);
  });
}


export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.usuario).then( ()=> {
    console.log(`# Dropped table ${ETableNames.usuario}`);
  });
}