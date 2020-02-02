const connection = require('../configs/db')
module.exports = {
    getProduct: () =>{
      return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM `product` LEFT JOIN `category` ON `product`.`id_category`= `category`.`id` ", 
        (err, result)=>{
          if(!err){
            resolve(result);
          }else{
            reject(new Error(err));
          }
        })
      })
    },
    productDetail: (id_product) => {
        return new Promise((resolve, reject) => {
          connection.query("SELECT product.*, category.name_category FROM product INNER JOIN category ON product.id_category = category.id WHERE product.id = ?", id_product, 
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          })
        })
    },
    insertProduct: (data) => {
      return new Promise((resolve, reject) => {
        connection.query("INSERT INTO product SET ?", data, 
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        })
      })
    },
}