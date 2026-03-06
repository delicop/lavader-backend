import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('usuarios')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    fecha: Date;

    @Column()
    nombre: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    celular: string;

    @Column()
    documento: string;

    @Column()
    password: string;

    @Column()
    rol: string;

    @Column({ nullable: true, default: 0 })
    salario: number;

    @Column({ nullable: true, default: 0 })
    bonificacion: number;

    @Column({ nullable: true, default: 0 })
    porcentaje: number;

    @Column({ default: true })
    estado: boolean;

}
