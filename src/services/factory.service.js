const APIFeatures = require("../utils/apiFeatures");

const getAll = (Model, query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const features = new APIFeatures(Model.find(), query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

      const documents = await features.query;

      resolve(documents);
    } catch (error) {
      reject(error);
    }
  });
};

const createOne = (Model, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const document = await Model.create(data);

      resolve(document);
    } catch (error) {
      reject(error);
    }
  });
};

const getOne = (Model, id, populateOptions) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = Model.findById(id);

      if (populateOptions) {
        query.populate(populateOptions);
      }

      const document = await query;

      resolve(document);
    } catch (error) {
      reject(error);
    }
  });
};

const getOneByOptions = (Model, options) => {
  return new Promise(async (resolve, reject) => {
    try {
      const document = await Model.findOne(options);

      resolve(document);
    } catch (error) {
      reject(error);
    }
  });
};

const updateOne = (Model, id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const document = await Model.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });

      resolve(document);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteOne = (Model, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const document = await Model.findByIdAndDelete(id);

      resolve(document);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  deleteOne,
  updateOne,
  createOne,
  getOne,
  getOneByOptions,
  getAll,
};
