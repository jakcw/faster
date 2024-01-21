import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import config from '../core/config';

const Home = () => {
  const stravaAuthUrl = `http://www.strava.com/oauth/authorize?client_id=${config.stravaClientID}&response_type=code&redirect_uri=${config.stravaRedirectURI}&approval_prompt=force&scope=activity:read_all`;

  const handleAuth = () => {
    window.location.href = stravaAuthUrl;
  };

  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-white mb-8">Faster</h1>
        <p className="text-lg text-gray-300 mb-8">Connect your Strava account to get started.</p>
        <button
          onClick={handleAuth}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg transform transition-all duration-150 ease-in-out"
        >
          Connect with Strava
        </button>
      </div>
    </div>
  );
};

export default Home;
