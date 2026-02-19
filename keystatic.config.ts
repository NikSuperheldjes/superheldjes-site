import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage Inhoud',
      path: 'src/content/homepage',
      schema: {
        titel: fields.text({ label: 'Titel van de site' }),
        ondertitel: fields.text({ label: 'Ondertitel/Missie', multiline: true }),
      },
    }),
  },
});