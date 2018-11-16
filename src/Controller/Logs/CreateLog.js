import Visitor from "../../Model/Log";
import moment from "moment-timezone";
import path from "path";
import UploadFile from "../../Utility/UploadFile";
export default async (req, h) => {
  const {
    image,
    contact,
    name,
    vehicleType,
    vehicleNo,
    gender,
    location
  } = req.payload;
  const dir = path.resolve() + "/src/Uploads/";
  const fileName = await UploadFile(
    moment()
      .toDate()
      .getTime() + ".jpg",
    image,
    dir
  );
  const startDate = moment()
    .tz("Asia/Kolkata")
    .toDate();

  const newVisitor = new Visitor({
    name,
    startDate,
    gender,
    vehicleNo,
    vehicleType,
    siteInfo: location,
    mobile: contact,
    image: fileName
  });
  try {
    await newVisitor.save();
  } catch (e) {
    return h.response({ message: e });
  }
  return h.response({ entry: newVisitor });
};
