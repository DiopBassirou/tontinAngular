export interface UserLoginResponse {
  id: number;
  nom: string;
  telephone: string;
  email: string;
  role: 'user' | 'admin' ;
  is_active: boolean;
}
export interface UserLoginRequest{
  telephone:string;
  password:string;
}
export interface CreateUser {
  nom: string;
  telephone: string;
  email: string;
  password:string;
}
export interface ResponseUserCreate {
  message?:string;
  success?:boolean
  id:number;
  nom: string;
  telephone: string;
  email: string;
  password:string;
}

