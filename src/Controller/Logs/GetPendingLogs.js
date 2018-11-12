import Visitor from "../../Model/Log";
export default async (req, h) => {
  const logs = await Visitor.find({ out: false });
  return h.response({ logs });
};
