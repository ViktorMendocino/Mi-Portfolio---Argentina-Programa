export class Proyect{
  private id: number;
 private name: string;
 private title: string;
 private img: string;
 private start: string;
 private end: string;
 private repo: string;




 constructor( id:number , name:string,   title:string, img:string, start:string , end:string, repo:string  )
 {
     this.id=id;
     this.name=name;
     this.title=title;
     this.img=img;
     this.start=start;
     this.end=end;
     this.repo=repo;

 }

}

