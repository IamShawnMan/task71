import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'courses',
})
export class Course extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;
}
