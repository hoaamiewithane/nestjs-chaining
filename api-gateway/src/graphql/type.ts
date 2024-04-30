
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

export interface SigninUserInput {
    email: string;
    password: string;
}

export interface IQuery {
    users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
    user(email: string): Nullable<User> | Promise<Nullable<User>>;
    signin(data?: Nullable<SigninUserInput>): Nullable<SignInResponse> | Promise<Nullable<SignInResponse>>;
}

export interface IMutation {
    signup(data?: Nullable<SignupUserInput>): Nullable<SignUpResponse> | Promise<Nullable<SignUpResponse>>;
}

export interface SignUpResponse {
    accessToken: string;
    refreshToken: string;
}

export interface User {
    email?: Nullable<string>;
}

export interface SignInResponse {
    accessToken: string;
    refreshToken: string;
}

export interface ISubscription {
    userCreated(email: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
