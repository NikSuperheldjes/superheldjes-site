import { config, fields, collection } from '@keystatic/core';

const isDev = process.env.NODE_ENV === 'development';

export default config({
  storage: isDev 
    ? { kind: 'local' } 
    : { 
        kind: 'github', 
        repo: 'jouw-gebruikersnaam/jouw-repo-naam' 
      },
  // ... rest van je collections
});