
import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table ({
    timestamps: false,
    tableName: "contacts"
})

export class Contact extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    }) 
    documentNumber!:number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    }) 
    documentType!:number;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    name!:string;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    lastname!:string;

    @Column({
        type: DataType.DATE ,
        allowNull:false
    })
    birthday!:Date;

    @Column({
        type: DataType.BIGINT,
        allowNull: false
    }) 
    cellphone!:number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    }) 
    phone!:number;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    address!:string;
}