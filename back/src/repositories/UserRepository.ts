import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import UserDTO from "../interfaces/dto/UserDTO";
import { createCredentialSVC } from "../services/credentials.services";

export const UserRepo = AppDataSource.getRepository(User).extend({
  
    findUserByIdWithoutRelation: async function (
    id: number
  ): Promise<User | null> {
    const user: User | null = await this.findOne({
      where: { id },
    });
    if (!user) return null;
    return user;
  },

  findUserById: async function (id: number): Promise<User | null> {
    const user: User | null = await this.findOne({
      where: { id },
      relations: { appointments: true }, // otra forma: relations: ["appointments"];
    });
    if (!user) return null;
    return user;
  },

  allUsers: async function (): Promise<User[]> {
    const users: User[] = await this.find({
      relations: { appointments: true },
    });
    return users;
  },

  registerUser: async function (data: UserDTO): Promise<User> {
    const newCredential: Credential = await createCredentialSVC(
      data.username,
      data.password
    );
    const newUser: User = UserRepo.create({
      name: data.name,
      email: data.email,
      active: true,
      nDni: Number(data.nDni),
      birthdate: new Date(data.birthdate),
      credential: newCredential,
    });
    newCredential.user = newUser;
    await this.save(newUser);
    return newUser;
  },

  deleteUser: async function (id: number): Promise<boolean> {
    const findUser = await this.findUserById(id);
    if (findUser) {
      await this.remove(findUser);
      return true;
    } else return false;
  },
});
