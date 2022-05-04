export class Experience{
  private id: number;
 private business: string;
 private position: string;
 private img: string;
 private start: string;
 private end: string;
 private tasksDeveloped: string;




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

