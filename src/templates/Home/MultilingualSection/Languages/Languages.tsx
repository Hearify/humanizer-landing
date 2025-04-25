import React from 'react';
import Image from 'next/image';

import styles from './Languages.module.scss';

interface FlagItem {
  flag: string;
}

interface LanguageItem {
  language: string;
  flags: FlagItem[];
}

const LanguageItems: LanguageItem[] = [
  {
    language: 'English',
    flags: [{ flag: 'US' }, { flag: 'UK' }],
  },
  {
    language: 'Italian',
    flags: [{ flag: 'IT' }],
  },
  {
    language: 'Dutch',
    flags: [{ flag: 'NL' }],
  },
  {
    language: 'Arabic',
    flags: [{ flag: 'SA' }],
  },
  {
    language: 'Turkish',
    flags: [{ flag: 'TK' }],
  },
  {
    language: 'Portuguese',
    flags: [{ flag: 'PT' }],
  },
  {
    language: 'Korean',
    flags: [{ flag: 'SK' }],
  },
  {
    language: 'Catalan',
    flags: [{ flag: 'CL' }],
  },
  {
    language: 'French',
    flags: [{ flag: 'FR' }],
  },
  {
    language: 'Malay',
    flags: [{ flag: 'ML' }, { flag: 'BR' }, { flag: 'SG' }, { flag: 'ID' }],
  },
  {
    language: 'Romanian',
    flags: [{ flag: 'RM' }],
  },
  {
    language: 'Spanish',
    flags: [{ flag: 'SP' }],
  },
  {
    language: 'Hindi',
    flags: [{ flag: 'IN' }],
  },
  {
    language: 'Bengali',
    flags: [{ flag: 'BG' }],
  },
  {
    language: 'Urdu',
    flags: [{ flag: 'IN' }, { flag: 'PS' }],
  },
  {
    language: 'Telugu',
    flags: [{ flag: 'IN' }],
  },
  {
    language: 'Greek',
    flags: [{ flag: 'GR' }],
  },
  {
    language: 'Polish',
    flags: [{ flag: 'PL' }],
  },
  {
    language: 'Tamil',
    flags: [{ flag: 'IN' }, { flag: 'SL' }, { flag: 'ID' }],
  },
  {
    language: 'Indonesian',
    flags: [{ flag: 'ID' }],
  },
  {
    language: 'Japanese',
    flags: [{ flag: 'JP' }],
  },
  {
    language: 'Vietnamese',
    flags: [{ flag: 'VT' }],
  },
  {
    language: 'Thai',
    flags: [{ flag: 'TL' }],
  },
  {
    language: 'Hebrew',
    flags: [{ flag: 'IS' }],
  },
  {
    language: 'Hungarian',
    flags: [{ flag: 'HU' }],
  },
  {
    language: 'Czech',
    flags: [{ flag: 'CZ' }],
  },
  {
    language: 'Swedish',
    flags: [{ flag: 'SW' }],
  },
  {
    language: 'German',
    flags: [{ flag: 'GM' }],
  },
  {
    language: 'Chinese (Simplified & Traditional)',
    flags: [{ flag: 'CH' }],
  },
  {
    language: 'Norwegian',
    flags: [{ flag: 'NW' }],
  },
  {
    language: 'Finnish',
    flags: [{ flag: 'FN' }],
  },
  {
    language: 'Danish',
    flags: [{ flag: 'DM' }],
  },
  {
    language: 'Slovak',
    flags: [{ flag: 'SV' }],
  },
  {
    language: 'Ukrainian',
    flags: [{ flag: 'UKR' }],
  },
];

const Languages: React.FC = () => {
  return (
    <div className={styles.container}>
      {LanguageItems.map(item => (
        <div key={item.language} className={styles.language}>
          <div className={styles.flags}>
            {item.flags.map(flagItem => (
              <Image
                key={flagItem.flag}
                src={`/flags/${flagItem.flag.toLowerCase()}.svg`}
                alt={`${flagItem.flag} flag`}
                width={20}
                height={20}
                draggable={false}
              />
            ))}
          </div>
          <p>{item.language}</p>
        </div>
      ))}
    </div>
  );
};

export default Languages;
