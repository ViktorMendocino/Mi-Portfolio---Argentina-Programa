export class Proyect{

 public id: number;
 public name: string;
 public title: string;
 public img: string;
 public start: string;
 public end: string;
 public repo: string;




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

