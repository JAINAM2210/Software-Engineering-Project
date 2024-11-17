import Product from '../model/product-schema.js';

export const addProduct = async(request,response) =>{
    try{

        const product = request.body;
        const newProduct = new Product(product);
        await newProduct.save();

        response.status(200).json({message: product });
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
}