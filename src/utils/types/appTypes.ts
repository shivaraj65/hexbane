export interface userInfo {
    id:string;
    name:string;
    picture?:String;
    email:string;
    email_verified:boolean;
    password?:string;
    authOrigin:string;
    secret?:string;
    totpStatus:boolean;  
};