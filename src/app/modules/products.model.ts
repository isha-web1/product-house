import { Schema, model,  } from 'mongoose';
import { Inventory, ProductT, Variants } from './products/products.interface';

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

const ProductSchema= new Schema<ProductT>({
     name : {type : String, required: true},
     description : {type : String, required : true},
     price : {type : Number, required : true},
     category : {type : String, required : true},
     tags : {
      type : [String],
      
     },
     variants : {
         type : [VariantsSchema],
         required : true
     },
     inventory : InventorySchema



})

 export const ProductModel = model<ProductT>('product', ProductSchema )