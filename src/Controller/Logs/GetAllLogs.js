import Visitor from "../../Model/Log";
export default async (req, h) => {
  const visitors = await Visitor.find({ endDate: null });
  // console.log(visitors);
  return h.response({ visitors: visitors });
};
