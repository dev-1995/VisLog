import fs from "fs";
export default async (fileName, blob, dir) => {
  console.log(blob);
  try {
    await fs.createWriteStream(dir + fileName).write(blob._data);
  } catch (e) {
    console.log(e);
    return h.response({ message: "Error Uploading File!" });
  }
  return fileName;
};
