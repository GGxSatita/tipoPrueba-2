export type Auth = {
  username : string,
  password : string
}

export type AuthResponse = {
id : string,
username : string,
firstName : string,
lastName : string,
gender : 'male' | 'female',
image : string,
token : string

}
