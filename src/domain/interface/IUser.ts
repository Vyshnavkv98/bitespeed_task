import {Optional } from 'sequelize';

export interface UserAttributes {
  id?: number;
  phoneNumber?: string;
  email?: string;
  linkedId?: number;
  linkPrecedence?: 'secondary' | 'primary';
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  
}

// export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}