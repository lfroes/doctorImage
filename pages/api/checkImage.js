import middleware from "../../middlewares/middleware";
import nextConnect from "next-connect";

const got = require("got");
const fs = require("fs");
const FormData2 = require("form-data");

const handler = nextConnect();
handler.use(middleware);
const formData2 = new FormData2();

handler.post(async (req, res) => {
  if (req.files) {
    const apiKey = process.env.API_KEY;
    const apiSecret = process.env.API_SECRET;

    const filePath = req.files.file[0].path;

    formData2.append('image', fs.createReadStream(filePath))

    console.log(formData2, 'formdata');

    (async () => {
        try {
            const response = await got.post('https://api.imagga.com/v2/categories/personal_photos', {body: formData2, username: apiKey, password: apiSecret});
            console.log(response.body, 'RESPOSTA');
            res.status(200).json(response.body)
        } catch (error) {
            console.log(error, 'REsPOSTA ERRO');
        }
    })();
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};
aaaaaaaa
export default handler;
