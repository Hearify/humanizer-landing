import slugifyLib from 'slugify';

const slugify = (text: string): string => {
  return (slugifyLib as (input: string, options: object) => string)(text, {
    lower: true,
    strict: true,
  });
};

export default slugify;
