// //IMPORT THE MODEL WE CREATED EARLIER
// const imageModel = require('../models/imageModel');


// //IMPORT CLOUDINARY CONFIG HERE
// let cloud = require('../config/cloudinaryConfig');

// exports.createApp = (req, res) => {
//     try {
//         var imageDetails = {
//         imageName: req.body.imageName,
//         }

//         //USING MONGO METHOD TO FINE IF IMAGE-NAME EXIST IN THE DB
//         imageModel.find({imageName: imageDetails.imageName}, (err, callback) => {
//             if (err) {
//             res.json({
//                     err: err,
//                     message: 'there was a problem uploading image'
//                 })
//             } else if(callback.length >= 1 ) {
//                 res.json({
//                 message: 'file already exist'
//                 })
//             } else {
//                 var imageDetails = {
//                 imageName: req.body.imageName,
//                 cloudImage: req.files[0].path,
//                 imageId: ''
//                 }
            
//                 // IF ALL THING GO WELL, POST THE IMAGE TO CLOUDINARY
//                 cloud.uploads(imageDetails.cloudImage).then((result) => {
//                     var imageDetails = {
//                     imageName: req.body.imageName,
//                     cloudImage: result.url,
//                     imageId: result.id
//                     }
//                 //THEN CREATE THE FILE IN THE DATABASE
//                     imageModel.create(imageDetails, (err, created)=> {
//                         if(err){
//                             res.json({
//                                 err: err,
//                                 message: 'could not upload image, try again'
//                             })
//                         } else {
//                             res.json({
//                             created: created,
//                             message: "image uploaded successfully!!"
//                             })
//                         }
//                     })
//                 })
//             }
//         });
//     } catch(err) {
//         res.json({message :"Error in upload images!"})
//     }
// }