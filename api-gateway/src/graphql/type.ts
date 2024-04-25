
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface SignupUserInput {
    email: string;
    password: string;
}

export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    signup(data?: Nullable<SignupUserInput>): Nullable<SignUpResponse> | Promise<Nullable<SignUpResponse>>;
}

export interface SignUpResponse {
    accessToken?: Nullable<string>;
    refreshToken?: Nullable<string>;
}

export interface User {
    email?: Nullable<string>;
}

type Nullable<T> = T | null;
