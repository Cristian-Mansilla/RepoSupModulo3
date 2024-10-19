import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { appointmentsStatus } from "../utils/enums/appointmentsStatus";
import { User } from "./User";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  service: string;
  @Column({ type: "date" })
  date: Date;
  @Column()
  time: string;
  @Column({ 
    type: "enum",
    enum: appointmentsStatus
   })
  status: appointmentsStatus;
  
   //! RELACION A LA ENTIDAD USER
  @ManyToOne(() => User, (user) => user.appointments)
  user: User;
}
