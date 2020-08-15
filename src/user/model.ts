export default class User {
  public id: number
  public name: string
  public email: string
  public password: string | null

  constructor(id: number, name: string, email: string, password?: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password || ''
  }
}
