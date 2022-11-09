import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table ({
    timestamps: false,
    tableName: "documenttypes"
})

export class DocumentType extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    }) idDocumentType!:number

    @Column({
        type: DataType.STRING,
        allowNull: false
    }) DocumentType!:string
}