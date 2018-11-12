import Visitor from "../../Model/Log";
import mongoose from "mongoose";
import moment from "moment-timezone";
export default async (req, h) => {
  const { OID } = req.payload;
  try {
    const exists = await Visitor.findById(mongoose.Types.ObjectId(OID));
    if (exists) {
      const endDate = moment()
        .tz("Asia/Kolkata")
        .toDate();
      await Visitor.findByIdAndUpdate(mongoose.Types.ObjectId(OID), {
        endDate,
        out: true
      });
      return h.response({ success: "Record Updated!" });
    }
  } catch (e) {
    console.log(e);
    return h.response({ message: "Invalid OID" }).code(309);
  }
  return h.response({ message: "Invalid Log" }).code(404);
};
