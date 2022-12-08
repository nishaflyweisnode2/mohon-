const Leaselisting = require('../Models/Leaselisting')




exports.addLeaselisting = async (req, res) => {
  let leaselistingPictures = [];

  if (req.files.length > 0) {
    leaselistingPictures = req.files.map((file) => {
      return { img: file.path };
    });
  }



  const newleaselisting = new Leaselisting({

    // ...req.body,
    User: req.user,

    Property_name: req.body.Property_name,
    Description:req.body.Description,
      Location: req.body.Location,
      Contact_number: req.body.Contact_number,
      Product_price: req.body.Product_price,
     
      

    

      leaselistingPictures,
    //   // video,
    //   // seller: req.params.id,
    //   // subcategory: req.body.subcategory,
      category: req.body.category,
      subcategory: req.body.subcategory,
      // constant_fields:req.body.constant_fields
  })
  newleaselisting.save((error, data) => {
      console.log(newleaselisting,data)
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
          error:error
        });
      }
      if (data) {
        return res.status(201).json({
          leaselisting:data
        });
      }
    });
  }

  exports.getLeaselisting = async (req, res) => {
try{
    const result = await Leaselisting.find({})
if(result){
    res.status(200).send(result)
} else{
   res.status(500).send("No Such Leaselisting found")
}
}catch (error) {
    res.status(500).send(error)
}
  }



  exports.getbyid = async (req, res) => {



    try{
        const result  = await Leaselisting.findById({_id : req.params.id})
        res.status(200).send(result)
        
    } catch (error) {
        res.status(500).send(error)
    }
  }

  exports.subcategoryleaselisting = async(req,res) => {
    try{
      const result = await Leaselisting.find({subcategory:req.params.id})
      console.log(result)
      res.status(200).json({leaselisting: result})
    }
    catch(e){
      res.status(500).send(e)
    }
  }

  exports.categoryleaselisting = async(req,res) => {
    try{
      const result = await Leaselisting.find({category:req.params.id})
      console.log(result)
      res.status(200).json({leaselisting: result})
    }





    catch(e){
      res.status(500).send(e)
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


