import { Topping } from "./Topping";
export class OrderTopping {
  constructor(
    private _id: string,
    private _toppingId: number,
    private _orderItemId: number,
    private _topping: Topping
  ) {}

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get toppingId(): number {
    return this._toppingId;
  }

  public set toppingId(toppingId: number) {
    this._toppingId = toppingId;
  }

  public get orderItemId(): number {
    return this._orderItemId;
  }

  public set orderItemId(orderItemId: number) {
    this._orderItemId = orderItemId;
  }

  public get topping(): Topping {
    return this._topping;
  }

  public set topping(topping: Topping) {
    this._topping = topping;
  }
}
