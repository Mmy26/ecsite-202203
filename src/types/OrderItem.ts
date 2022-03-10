import { Item } from "./Item";
import { OrderTopping } from "./OrderTopping";

export class OrderItem {
  constructor(
    private _id: number,
    private _itemId: number,
    private _orderId: number,
    private _quantity: number,
    private _size: number,
    private _item: Item,
    private _orderToppingList: Array<OrderTopping>
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get itemId(): number {
    return this._itemId;
  }

  public set itemId(itemId: number) {
    this._itemId = itemId;
  }

  public get orderId(): number {
    return this._orderId;
  }

  public set orderId(orderId: number) {
    this._orderId = orderId;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set quantity(quantity: number) {
    this._quantity = quantity;
  }

  public get size(): number {
    return this._size;
  }

  public set size(size: number) {
    this._size = size;
  }

  public get item(): Item {
    return this._item;
  }

  public set item(item: Item) {
    this._item = item;
  }

  public get orderToppingList(): Array<OrderTopping> {
    return this._orderToppingList;
  }

  public set orderToppingList(orderToppingList: Array<OrderTopping>) {
    this._orderToppingList = orderToppingList;
  }
}
