import mailchimp from "@mailchimp/mailchimp_marketing";

async function handler(req: any, res: any) {
  const { email_address, status } = req.body;

  mailchimp.setConfig({
    // apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    // server: process.env.NEXT_PUBLIC_MAILCHIMP_DC,
    // apiKey: "d4775d9db0407b380b594ca124399360",
    // server: "us14",
    apiKey: "3e08b6d08a77b4d9258ac7f87deedb82",
    server: "us12",
  });

  try {
    await mailchimp.lists.addListMember("cfa084be47", {
      email_address,
      status,
    });
  } catch (error: any) {
    return res.status(400).send({ error: true });
  }

  return res.json({ success: true });
}

export default handler;
