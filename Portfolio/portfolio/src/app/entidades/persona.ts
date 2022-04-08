export class Persona{
 _fullName: string;
 _position: string;
 _ubication: string;
 _url: string;

 constructor(fullName:string,   position:string, ubication:string, url:string)
 {
     this._fullName=fullName;
     this._position=position;
     this._ubication=ubication;
     this._url=url;
 }



   //crear getters y setters



  public get fullName(): string {
    return this._fullName;
  }
  public set fullName(value: string) {
    this._fullName = value;
  }

  public get position(): string {
    return this._position;
  }
  public set position(value: string) {
    this._position = value;
  }

  public get ubication(): string {
    return this._ubication;
  }
  public set ubication(value: string) {
    this._ubication = value;
  }

  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }







}
