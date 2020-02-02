const productModel = require('../models/product')
const miscHelper = require('../helpers/helpers');
module.exports = {
    getProduct: (req, res)=>{
        productModel.getProduct()
        .then((result)=>{
          miscHelper.response(res, result)
        })
        .catch(err=>console.log(err));
    },
    productDetail: (req, res) =>{
        const id_product = req.params.id_product;
        productModel.productDetail(id_product)
          .then((result) => {
            res.json(result)
          })
          .catch(err => console.log(err));
    },
    insertProduct: (req, res) => {
      // console.log(req.file.filename);
      const {name, description, price, id_category} = req.body;
      const data = {
        name,
        description,
        price,
        image: `http://localhost:4002/uploads/${req.file.filename}`,
        id_category,
      }
      productModel.insertProduct(data)
        .then((result) => {
          miscHelper.response(res, result, 201)
        })
        .catch(err => console.log(err));
    },
}