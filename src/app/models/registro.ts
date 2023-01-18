export interface Registro{
  firstName : string,
  lastName : string,
  age : number,
  username: string,
  password : string;
  birthDate :string,
  gender : 'male' | 'female'
}

export interface RegistroRespuesta extends Registro{
  id : number
}
