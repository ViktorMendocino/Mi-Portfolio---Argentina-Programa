export class Persona{
  private id: number;
 private fullName: string;
 private position: string;
 private ubication: string;
 private url: string;
 private background: string;

 constructor( id:number , fullName:string,   position:string, ubication:string, url:string, background: string)
 {
     this.id=id;
     this.fullName=fullName;
     this.position=position;
     this.ubication=ubication;
     this.url=url;
     this.background=background;
 }

}
