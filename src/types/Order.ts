import { User } from "./User";
import { OrderItem } from "./OrderItem";

export class Order {
  constructor(
    private _id: number,
    private _userId: number,
    private _status: number,
    private _totalPrice: number,
    private _orderDate: Date,
    private _destinationName: string,
    private _destinationEmail: string,
    private _destinationZipCode: string,
    private _destinationAddress: string,
    private _destinationTel: string,
    private _deliveryTime: string,
    private _paymentMethod: number,
    private _user: User,
    private _orderItemList: Array<OrderItem>
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get userId(): number {
    return this._userId;
  }

  public set userId(userId: number) {
    this._userId = userId;
  }

  public get status(): number {
    return this._status;
  }

  public set status(status: number) {
    this._status = status;
  }

  public get totalPrice(): number {
    return this._totalPrice;
  }

  public set totalPrice(totalPrice: number) {
    this._totalPrice = totalPrice;
  }

  public get orderDate(): Date {
    return this._orderDate;
  }

  public set orderDate(orderDate: Date) {
    this._orderDate = orderDate;
  }

  public get destinationName(): string {
    return this._destinationName;
  }

  public set destinationName(destinationName: string) {
    this._destinationName = destinationName;
  }

  public get destinationEmail(): string {
    return this._destinationEmail;
  }

  public set destinationEmail(destinationEmail: string) {
    this._destinationEmail = destinationEmail;
  }

  public get destinationZipCode(): string {
    return this._destinationZipCode;
  }

  public set destinationZipCode(destinationZipCode: string) {
    this._destinationZipCode = destinationZipCode;
  }

  public get destinationAddress(): string {
    return this._destinationAddress;
  }

  public set destinationAddress(destinationAddress: string) {
    this._destinationAddress = destinationAddress;
  }

  public get destinationTel(): string {
    return this._destinationTel;
  }

  public set destinationTel(destinationTel: string) {
    this._destinationTel = destinationTel;
  }

  public get deliveryTime(): string {
    return this._deliveryTime;
  }

  public set deliveryTime(deliveryTime: string) {
    this._deliveryTime = deliveryTime;
  }

  public get paymentMethod(): number {
    return this._paymentMethod;
  }

  public set paymentMethod(paymentMethod: number) {
    this._paymentMethod = paymentMethod;
  }

  public get user(): User {
    return this._user;
  }

  public set user(user: User) {
    this._user = user;
  }

  public get orderItemList(): Array<OrderItem> {
    return this._orderItemList;
  }

  public set orderItemList(orderItemList: Array<OrderItem>) {
    this._orderItemList = orderItemList;
  }
}
