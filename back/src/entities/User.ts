import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({
  name: "users",
  // por defecto el gestor de postgres creara una tabla "user" pero esto entrara en conflicto
  // con otra tabla de postgres; por tal motivo se define otro nombre para la misma
})
export class User {
  @PrimaryGeneratedColumn()
  id: number; //?Primary Key
  @Column()
  name: string;
  @Column({unique: true})
  email: string;
  @Column({default: true})
  active: boolean;
  @Column()
  birthdate: Date;
  @Column({unique: true})
  nDni: number;
  @OneToOne(() => Credential) // La entidad User va a tener una relacion uno a uno con la entidad Credential
  @JoinColumn() // Indica que la entidad User contendra la clave foranea hacia Credential
  credential: Credential  // propiedad 'credential' del tipo de dato Credential
  @OneToMany(() => Appointment, (appointments) => appointments.user)
  appointments: Appointment[];
}
