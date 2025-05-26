import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullName: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;
}
