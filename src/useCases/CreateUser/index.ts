import { MailTrapMailProvider } from "../../providers/implementations/MailTrapProvider";
import { PostgresUserRepository } from '../../repositories/implementations/PostgresUserRepository';
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailTrapProvider = new MailTrapMailProvider();
const postgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUserRepository,
    mailTrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export {createUserUseCase, createUserController}