export class AboutMe{
  private _id: number;
  private _name: string;

//getters and setters


  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }


 constructor( id:number , name: string )
 {
     this._id=id;
     this._name=name;

 }

}
