export class Persona{

 private _id: number;
 private _fullName: string;
 private _position: string;
 private _ubication: string;
 private _url: string;
 private _background: string;

//getters and setters
public get id(): number {
  return this._id;
}
public set id(value: number) {
  this._id = value;
}
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
public get background(): string {
  return this._background;
}
public set background(value: string) {
  this._background = value;
}


 constructor( id:number , fullName:string,   position:string, ubication:string, url:string, background: string)
 {
     this._id=id;
     this._fullName=fullName;
     this._position=position;
     this._ubication=ubication;
     this._url=url;
     this._background=background;
 }

}
