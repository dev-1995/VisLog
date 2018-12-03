import mongoose from "../DB";
const Schema = mongoose.Schema;

let VisSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: { type: String },

  startDate: { type: Date, required: true },
  endDate: { type: Date, default: null },

  gender: { type: String, required: true },
  vehicleNo: { type: String, required: true },
  vehicleType: { type: String, required: true },
  siteInfo: { type: String, required: true },
  mobile: { type: String, required: true },
  out: { type: Boolean, default: false }
});
const Visitor = mongoose.model("visitors", VisSchema);

export default Visitor;
