const Product = require('../Models/Product');
// const Job = require('../Models/Product')




exports.addProduct = async (req, res) => {
//   let servicePictures = [];

//   if (req.files.length > 0) {
//     servicePictures = req.files.map((file) => {
//       return { img: file.path };
//     });







//   }



  const newproduct = new Product({

    // ...req.body,
    User: req.user,

    Product_name: req.body.Product_name,
    Description:req.body.Description,
    Location: req.body.Location,
    Contact_number: req.body. Contact_number,
    Product_type: req.body.Product_type,
     
      

    


    //   // video,
    //   // seller: req.params.id,
    //   // subcategory: req.body.subcategory,
      productcategory: req.body.productcategory,
      subcategory: req.body.subcategory,
      // constant_fields:req.body.constant_fields
  })
  newproduct.save((error, data) => {
      console.log(newproduct,data)
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
          error:error
        });
      }
      if (data) {
        return res.status(201).json({
          product:data
        });
      }
    });
  }

  exports.getProduct = async (req, res) => {
try{
    const result = await Product.find({})
if(result){
    res.status(200).send(result)
} else{
   res.status(500).send("No Such product found")
}
}catch (error) {
    res.status(500).send(error)
}
  }


  exports.trying = async(req, res)=>{

    try{

      const mill = await Product.find({User:req.user}).populate('User')

      console.log(mill)

      res.status(200).json({

        result:mill
      })

    }catch(e){

      res.status(500).json({
        error:e
      })
    }
  }


  exports.getbyid = async (req, res) => {
    try{
        const result  = await Product.findOne({_id : req.params.id}).populate('User')
        console.log(result)
        res.status(200).send(result)
        
    } catch (error) {
        res.status(500).send(error)
    }
  }

  exports.subcategoryproduct = async(req,res) => {
    try{
      const result = await Product.find({subcategory:req.params.id})
      console.log(result)
      res.status(200).json({jobs: result})
    }
    catch(e){
      res.status(500).send(e)
    }
  }



  exports.categoryproduct = async(req,res) => {
    try{
      const result = await Product.find({category:req.params.id})
      console.log(result)
      res.status(200).json({jobs: result})
    }
    catch(e){
      res.status(500).send(e)
    }
  }

  exports.recentproduct = async(req,res) => {
    try {
      
    } catch (error) {
      
    }
  }



//   exports.deletebyid = async (req, res) => {
//     try{
//         const result = await Machine.deleteOne({_id: req.params.id})
//         res.status(200).send(result)
//     }catch (error) {
//         res.status(500).send(error)
//     }
//   }



//   exports.deleteall = async (req, res) => {
//     try{
//         const result = await Product.deleteMany({})
//         res.status(200).send(result)
//     } catch (error) {
//         res.status(500).send(error)
//     }
//   }


//   // db.yourCollection.find().limit(-1).skip(yourRandomNumber).next()
//   exports.getrandom = async(req, res)=>{


//     console.log("qwertyuio")
//     try{

// // to get random product recommended for you
//  const result = await Product.find().skip(1)
//  console.log(result)

//     }catch (e){

//       res.status(500).send(e)
//     }
//   }

//   exports.searchProduct = async(req,res,next) => {
//     const serachField = req.query.title
//     Product.find({title: {$regex: serachField, $options: '$i'}}).then(data => {
//       res.send(data)
//     })
//   }


