export class Experience{

 public id: number;
 public business: string;
 public position: string;
 public img: string;
 public start: string;
 public end: string;
 public tasksDeveloped: string;




 constructor( id:number , business:string,   position:string, img:string, start:string , end:string, tasksDeveloped:string  )
 {
     this.id=id;
     this.business=business;
     this.position=position;
     this.img=img;
     this.start=start;
     this.end=end;
     this.tasksDeveloped=tasksDeveloped;

 }

}

