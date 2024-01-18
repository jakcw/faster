import { NextApiRequest, NextApiResponse } from "next";
import { resolve } from "path";

const stravaClientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
const stravaClientSecret = process.env.STRAVA_CLIENT_SECRET;
const userId = 90939770;
const ATHLETES_ENDPOINT = `https://www.strava.com/api/v3/athletes/${userId}`;


const authStravaHandler = async (req: NextApiRequest, res: NextApiResponse) => {

  const code = req.query.code as string;
  if (!code) {
    res.status(400).json({ error: "Code not provided" });
    return;
  } 

  try {
    const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: stravaClientId,
        client_secret: stravaClientSecret,
        code: code,
        grant_type: 'authorization_code',
      }),
    });

    if (!tokenResponse.ok) {
      console.error('Token exchange failed:', tokenResponse.status, await tokenResponse.text());
      res.status(500).json({ error: "Failed to exchange token" });
      return;
    }
    const tokenData = await tokenResponse.json();
    res.status(200).json(tokenData);
    const response = await fetch(
      `${ATHLETES_ENDPOINT}/activities?access_token=${tokenData.access_token}`
    );
    const json = await response.json();
    console.log(json);

  } catch (error) {
    console.log(error);
  }

};




export default authStravaHandler;

