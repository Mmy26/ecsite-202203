import { Item } from "./Item";
import { OrderTopping } from "./OrderTopping";

/**
 * オーダーアイテムクラス.
 */
export class OrderItem {
  constructor(
    // 注文商品ID
    private _id: number,
    // 商品ID
    private _itemId: number,
    // 注文ID
    private _orderId: number,
    // 数量
    private _quantity: number,
    // サイズ
    private _size: string,
    // 商品情報
    private _item: Item,
    // トッピングリスト
    private _orderToppingList: Array<OrderTopping>
  ) {}

  /**
   * 注文商品１種類の小計の計算.
   * @returns 注文商品１種類の小計価格
   */
  get getCalcSubTotalPrice(): number {
    if (this.size === "M") {
      const TOPPING_PRICE = 200;
      return (
        (this.item.priceM + this.orderToppingList.length * TOPPING_PRICE) *
        this.quantity
      );
    } else {
      const TOPPING_PRICE = 300;
      return (
        (this.item.priceL + this.orderToppingList.length * TOPPING_PRICE) *
        this.quantity
      );
    }
  }

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

  public get size(): string {
    return this._size;
  }

  public set size(size: string) {
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
