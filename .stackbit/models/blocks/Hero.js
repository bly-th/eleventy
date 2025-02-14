import { Button  } from "../components/Button";

export const HeroBlock = {
    name: 'hero',
    type: 'object',
    label: 'Hero',
    groups: ['SectionComponents'],
    fields: [
      { type: 'string', name: 'title', default: 'Title' },
      { type: 'markdown', name: 'content', default: 'Content' },
      Button
    ]
};
