export class Proyect{

 private _id: number;
 private _name: string;
 private _title: string;
 private _img: string;
 private _start: string;
 private _end: string;
 private _repo: string;



 //getters and setters
 public get id(): number {
  return this._id;
}
public set id(value: number) {
  this._id = value;
}
public get name(): string {
  return this._name;
}
public set name(value: string) {
  this._name = value;
}
public get title(): string {
  return this._title;
}
public set title(value: string) {
  this._title = value;
}
public get img(): string {
  return this._img;
}
public set img(value: string) {
  this._img = value;
}

public get start(): string {
  return this._start;
}
public set start(value: string) {
  this._start = value;
}
public get end(): string {
  return this._end;
}
public set end(value: string) {
  this._end = value;
}
public get repo(): string {
  return this._repo;
}
public set repo(value: string) {
  this._repo = value;
}


 constructor( id:number , name:string,   title:string, img:string, start:string , end:string, repo:string  )
 {
     this._id=id;
     this._name=name;
     this._title=title;
     this._img=img;
     this._start=start;
     this._end=end;
     this._repo=repo;

 }

}

