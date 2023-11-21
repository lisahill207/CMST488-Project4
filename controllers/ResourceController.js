
const Resource = require("../models/Resource");

// Gets All Training Resources
exports.getResources = async (req, res) => {
  // TODO: Implement find to get all resources
  // Return 200 status with success: true and data: your resources
try{
  const query = await Resource.find();
  res.status(200).json({"success": true, data: query});
} catch(err){
  res.status(400).json({ msg: err });
}
};

// Get Single Training Resource
exports.getSingleResource = async (req, res) => {
  try {
    // TODO: Implement findById and pass req.params.id
    // Return 200 status with success: true and data: your resource
    const query = await Resource.findById(req.params.id);
    if(!query){
      res.status(400).json({msg: 'invalid user id'});
    };
    res.status(200).json({"success": true, data: query});
  } catch (err) {
    // TODO: Return 400 status with success: false, error: err.message
    res.status(400).json({ msg: err });
  }
};

//Create Training Resource
exports.createResource = async (req, res) => {
  const newResource = new Resource({
      name: req.body.name,
      provider: req.body.provider,
      url: req.body.url,
    });
    try {
    const createResource = await newResource.save();
    res.status(200).json({"success": true, data: createResource});
    // TODO:  Implement create and pass req.body
    // Return 200 status with success: true and data: your resource
  } catch (err) {
    res.status(400).json({ msg: err });
    // TODO: Return 400 status with success: false, error: err.message
  }
};

// Update Training Resource
exports.updateResource = async (req, res) => {
  try {
    // TODO: Implement findByIdAndUpdate and pass req.params.id & req.body
    // Set to new record and run validators
    // Return 200 status with success: true and data: your resource
    const query = await Resource.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      });
    if(!query){
      res.status(400).json({msg: 'invalid user id'});
    };
    res.status(200).json({"success": true, data: query});
  } catch (err) {
    // TODO: Return 400 status with success: false, error: err.message
    res.status(400).json({ msg: err });
  }
};
// Delete Training Resource
exports.deleteResource = async (req, res) => {
  try {
    // TODO: Implement findById and then use remove to delete the resource
    // Return 200 status with success: true and data: empty
    if(req.params.id){
      const query = await Resource.findByIdAndDelete(req.params.id);
    if(!query){
      res.status(400).json({msg: 'invalid user id'});
    }
    res.status(200).json({"success": true, data: {}});
    }else{
      res.status(400).json({ msg: err });
    }
  } catch (err) {
    // TODO: Return 400 status with success: false, error: err.message
    res.status(400).json({ msg: err });
  }
};
