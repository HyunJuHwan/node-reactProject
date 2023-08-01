/**module, controller, route 분리 필요
 * .env 파일 계정정보 보안필요. 로컬 DB로 작업 or 커밋x
 */
const nodemailer = require("nodemailer");

const main = async () => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"WDMA Team" <${process.env.NODEMAILER_USER}>`, //.env 에 정의한 내 메일(수신자)
    to: "email", //보내는 사람 메일(발송자)
    subject: "WDMA Auth Number", // Subject line
    text: "generatedAuthNumber", //보내는 내용
    html: `<b>generatedAuthNumber</b>`, //보내는 내용 html 태그
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  res.status(200).json({
    status: "Success",
    code: 200,
    message: "Sent Auth Email",
  });
};

main().catch(console.error);
