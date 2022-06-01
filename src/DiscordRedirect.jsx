import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DiscordRedirect = () => {
  const serch = useLocation().search;
  const code = new URLSearchParams(serch).get('code');

  const CLIENT_ID = '981401848500080650';
  const CLIENT_SECRET = 'L1YLglWVbJu8rc5h8enfCBW5XXuZ4Y05';
  const REDIRECT_URI = 'http://localhost:3000/discord/redirect';

  useEffect(() => {
    const getUserInfo = async () => {
      const userTokenJSON = await (
        await fetch('https://discord.com/api/v10/oauth2/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI,
            scope: 'identify email relationship.read',
          }),
        })
      ).json();

      console.log('userTokenJSON', userTokenJSON);

      const userInfoJSON = await (
        await fetch('https://discord.com/api/users/@me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${userTokenJSON.access_token}`,
          },
        })
      ).json();

      console.log('userInfoJSON', userInfoJSON);
    };

    getUserInfo();
  }, []);

  return <div>hi</div>;
};

export default DiscordRedirect;
// user_id, platform, p_email, p_id, p_nickname, is_public
