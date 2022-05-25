export class HardSkills{
  private _id: number;
  private _name: string;
  private _value: string;
  
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
  public get value(): string {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
  }



 constructor( id:number , name:string,   value:string )
 {
     this._id=id;
     this._name=name;
     this._value=value;

 }

}
