import strava from "strava-v3";
import config from "../config";
strava.config({
  "access_token"  : "",
  "client_id"     : config.stravaClientID!,
  "client_secret" : config.stravaClientSecret!,
  "redirect_uri"  : config.stravaRedirectURI!,
});

export default strava;

