const Service = require('../Models/Service')




exports.addService = async (req, res) => {
  let servicePictures = [];

  if (req.files.length > 0) {
    servicePictures = req.files.map((file) => {
      return { img: file.path };
    });
  }



  const newservice = new Service({

    // ...req.body,
    User: req.user,

    Service_name: req.body.Service_name,
    Service_Price:req.body.Service_Price,
      Location: req.body.Location,
      Conatct_number: req.body. Conatct_number,
      About_service: req.body.About_service,
     
      

    

      servicePictures,
    //   // video,
    //   // seller: req.params.id,
    //   // subcategory: req.body.subcategory,
      category: req.body.category,
      subcategory: req.body.subcategory,
      // constant_fields:req.body.constant_fields
  })
  newservice.save((error, data) => {
      console.log(newservice,data)
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
          error:error
        });
      }
      if (data) {
        return res.status(201).json({
          service:data
        });
      }
    });
  }

  exports.getService = async (req, res) => {
try{
    const result = await Service.find({})
if(result){
    res.status(200).send(result)
} else{
   res.status(500).send("No Such service found")
}
}catch (error) {
    res.status(500).send(error)
}
  }



  exports.getbyid = async (req, res) => {
    try{
        const result  = await Service.find({_id : req.params.id})
        res.status(200).send(result)
        
    } catch (error) {
        res.status(500).send(error)
    }
  }

  exports.subcategoryservice = async(req,res) => {
    try{
      const result = await Service.find({subcategory:req.params.id})
      console.log(result)
      res.status(200).json({services: result})
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


