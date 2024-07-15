export interface AddUser{
    Username:string;
    Email:string;
    Password:string;
    TermsAndConditions:boolean;
}
export interface RegisterResponse{
    Message:string;
}
export interface UserLogin{
    Email:string;
    Password:string;
    Role:string;
}
export interface LoginResponse{
    Token:string;
    
}