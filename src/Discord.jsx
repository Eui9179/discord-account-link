import React, { useEffect } from 'react';

const Discord = () => {
  return (
    <div>
      <a
        href='https://discord.com/api/oauth2/authorize?client_id=981401848500080650&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord%2Fredirect&response_type=code&scope=identify%20email%20relationships.read'
        // href='https://discord.com/api/oauth2/authorize?client_id=981401848500080650&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdiscord%2Fredirect&response_type=code&scope=identify%20email%20relationships.read%20activities.read'
      >
        <button>Click</button>
      </a>
    </div>
  );
};

export default Discord;
