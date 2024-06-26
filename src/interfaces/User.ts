import { Role } from "../types/roles";

export interface User {
    id?: number;
    email: string;
    username:string;
    first_name:string;
    last_name:string;
    date_of_birth:string
    gender:string
    contact_number:string
    address:string
    password:string
    role_name?:Role
}

export interface LoginCredentials{
    email:string,
    password:string
} 
