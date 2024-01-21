import { NextApiRequest, NextApiResponse } from "next";
import strava from "../../../core/strava";

export const authStravaHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query.code as string;
  if (!code) {
    res.status(400).json({error: "Code not provided"});
    return;
  }
  try {
    const tokenResponse = await strava.oauth.getToken(code);
    res.status(200).json(tokenResponse);
    }
  catch (error) {
    console.log(error);
    res.status(500).json({error: "Internal server error"});
  }

}
export default authStravaHandler;

