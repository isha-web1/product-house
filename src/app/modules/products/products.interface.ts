// 

export type Variants ={
    type : string,
    value : string,
         
}
export type Inventory = {
    quantity : number,
    inStock : true
}

export type ProductT = {
    name : string,
    description : string,
    price : number,
    category : string,
    tags : "computer" | "peripherals" | "wireless" | "ergonomic",
    inventory : Inventory ,
    variants : [Variants]
}