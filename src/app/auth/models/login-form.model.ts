export interface LoginFormInterface {
  email: string;
  password: string;
}

export interface RegisterFormInterface extends LoginFormInterface{
  firstname?: string;
  lastname?: string;
}
