import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Todos'})
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    description: string;

    @Column({type:'boolean', nullable:false})
    completed: boolean;

}
