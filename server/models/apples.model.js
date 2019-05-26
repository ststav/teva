import mongoose from 'mongoose';
const schema = mongoose.Schema;


const AppleSchema = schema({
    _id: {type: schema.Types.ObjectId, required: true, unique: true, index: true},
    AppleNum: {type: String},
    Color: {type: String},
    Rightfullness: {type: Number},
    x_position: {type: Number},
    y_position: {type: Number},

}, {collection : 'apple'});

let ApplesModel = mongoose.model('apple', AppleSchema);

ApplesModel.getAll = () => {
    return ApplesModel.find({});
};

ApplesModel.addCsv = (csvToAdd) => {
    return csvToAdd.save();
};

export default ApplesModel;
