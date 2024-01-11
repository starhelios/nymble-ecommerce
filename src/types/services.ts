export interface IUser {
	id:string
	first_name:string
	last_name:string
	email:string
	password:string
}
export interface ICustomer {
	id:string
	first_name:string
	last_name:string
	email:string
}
export interface IStats {
	total_sales_current_year:number
	total_sales_previous_year:number
	new_customers_current_year:number
	new_customers_previous_year:number
	negative_feedbacks:number
	neutral_feedbacks:number
	positive_feedbacks:number
}
export interface IFeedbacks {
	id:string
	rating:number
	comment:string
	created_at:string
	updated_at:string
	customer:ICustomer
}
export interface IProduct {
	id:string
	title:string
	description:string
	image:string
	price:number
	created_at:string
	updated_at:string
}

export interface IProductTopSelling {
	id:string
	title:string
	description:string
	image:string
	price:number
	created_at:string
	updated_at:string
	total_sold:number
}

export interface IInventories {
	id:string
	product_id:string
	stock:number
	created_at:string
	updated_at:string
}
export interface IGetInventories extends IInventories {
	product:IProduct
}

export interface IOrders  {
	id: string
	customer_id: string
	created_at: string
	updated_at: string
}
export interface IOrderItems  {
	id: string
	order_id: string
	product_id: string
	quantity: number
	price: number
	created_at: string
	updated_at: string
}
export interface ILoginUserPayload {
	email: string;
	password:string
}
export interface IProductSales {
	product_id:string
	current_month_sales: number
	previous_month_sales: number
}
export type TLoginUser = (payload:ILoginUserPayload) => Promise<string>

export interface ISignupUserPayload {
	email: string;
	password:string
	first_name:string
	last_name:string
}
export type TSignupUser = (payload:ISignupUserPayload) => Promise<string>
export type TGetStats = (access_token:string) => Promise<IStats>
export type TGetFeedback = (access_token:string) => Promise<IFeedbacks[]>
export type TGetTopSellingProduct = (access_token:string) => Promise<IProductTopSelling[]>
export type TGetInventories = (access_token:string) => Promise<IGetInventories[]>
export type TGetOrders = (access_token:string) => Promise<IOrders[]>
export type TGetOrderItems = (access_token:string) => Promise<IOrderItems[]>
export type TGetProductSales = (access_token:string,product_id:string) => Promise<IProductSales>
