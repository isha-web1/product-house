import { Schema, model, connect } from 'mongoose';
import { Inventory, Product, Variants } from './products/products.interface';

const VariantsSchema = new Schema<Variants>({
   type : {
    type : String,
    required : true
   },
   value : {
    type : String,
    required: true
   }

})

const InventorySchema = new Schema<Inventory>({
      quantity : {
        type : Number,
        required : true
      },
      inStock :{
        type : Boolean,
        required : true
      }


})

const ProductSchema= new Schema<Product>({
     name : {type : String, required: true},
     description : {type : String, required : true},
     price : {type : Number, required : true},
     category : {type : String, required : true},
     tags : ["computer" ,"peripherals" , "wireless" , "ergonomic"],
     variants : {
         type : [VariantsSchema],
         required : true
     },
     inventory : InventorySchema



})

 export const ProductModel = model<Product>('product', ProductSchema )