import { useState, useEffect} from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {

  const clientId = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI;

  const stravaAuthUrl = `http://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=read_all`;

  const handleAuth = () => {
    window.location.href = stravaAuthUrl;
  };
  return (
    <div>
      <button onClick={handleAuth}>Connect with Strava</button>
    </div>
  );
};

export default HomePage;
