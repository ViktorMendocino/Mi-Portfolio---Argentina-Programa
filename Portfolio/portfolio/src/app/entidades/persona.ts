export class Persona{

 public id: number;
 public fullName: string;
 public position: string;
 public ubication: string;
 public url: string;
 public background: string;


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
