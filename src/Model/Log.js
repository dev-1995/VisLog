import mongoose from "../DB";
const Schema = mongoose.Schema;

let VisSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  logs: [
    {
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true }
    }
  ],
  gender: { type: String, required: true },
  vehicleNo: { type: String, required: true },
  vehicleType: { type: String, required: true },
  siteInfo: { type: String, required: true },
  mobile: { type: Number, required: true }
});
const Visitor = mongoose.model("visitors", VisSchema);
Visitor.createIndexes(
  function(e, data) {
    e ? console.log(e) : null;
  },
  { mobile: 1 },
  { unique: true }
);

export default Visitor;
