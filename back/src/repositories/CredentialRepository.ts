import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";

export const CredRepo = AppDataSource.getRepository(Credential).extend({
  
    createCredential: async function (username: string, password: string): Promise<Credential> {
    const newCredential: Credential = this.create({
      username: username,
      password: password,
    });
    await this.save(newCredential);
    return newCredential;
  },

  checkCredential: async function (username: string, password: string): Promise<number> {
    const foundCredential: Credential | null = await this.findOne({
      where: { username },
    });
    if (foundCredential) {
      if (foundCredential.password == password) {
        return foundCredential.id;
      } else throw new Error("Las contraseñas no concuerdan");
    } else throw new Error("No se encontro un usuario con esas credenciales");
  },

});
