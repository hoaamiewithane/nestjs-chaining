
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface SignupUserInput {
    name: string;
    email: string;
    password: string;
    age?: Nullable<number>;
}

export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    signup(data?: Nullable<SignupUserInput>): User | Promise<User>;
}

export interface User {
    id?: Nullable<number>;
    name?: Nullable<string>;
    email?: Nullable<string>;
    age?: Nullable<number>;
}

type Nullable<T> = T | null;
