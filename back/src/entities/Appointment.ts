import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { appointmentsStatus } from "../utils/enums/appointmentsStatus";
import { User } from "./User";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  service: string;
  @Column()
  date: Date;
  @Column()
  time: string;
  @Column()
  status: appointmentsStatus;
  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
