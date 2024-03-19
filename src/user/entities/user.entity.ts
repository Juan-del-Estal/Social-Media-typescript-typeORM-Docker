import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { RoleType } from "../dto/user.dto";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  @PrimaryColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  city!: string;

  @Column()
  province!: string;

  @Column({ type: "enum", enum: RoleType, nullable: false })
  role!: RoleType;

  static async findById(id: string): Promise<UserEntity | null> {
    return await this.findOne({ where: { id } });
  }
}