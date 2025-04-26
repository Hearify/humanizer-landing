import React from 'react';

import styles from './SeoContent.module.scss';

// interface TableRow {
//   id: number;
//   feature: string;
//   values: Record<string, string>;
// }

const SeoContent: React.FC = () => {
  // const competitors = [
  //   'Abify',
  //   'HumanizeAI.pro',
  //   'HumanizeAI.io',
  //   'AIHumanize.io',
  //   'HumanizeAIText.ai',
  //   'WriteHuman.ai',
  //   'Humanizer.org',
  //   'Phrasly.ai',
  //   'BypassAI.ai',
  //   'StealthWriter.ai',
  //   'Undetectable.ai',
  //   'JustDone.ai',
  // ];

  // const tableData: TableRow[] = [
  //   {
  //     id: 1,
  //     feature: 'Humanize AI Content',
  //     values: competitors.reduce<Record<string, string>>((acc, comp) => ({ ...acc, [comp]: '✅' }), {}),
  //   },
  //   {
  //     id: 2,
  //     feature: 'Bypass AI Detectors',
  //     values: competitors.reduce<Record<string, string>>((acc, comp) => ({ ...acc, [comp]: '✅' }), {}),
  //   },
  //   {
  //     id: 3,
  //     feature: 'SEO Optimization',
  //     values: competitors.reduce<Record<string, string>>(
  //       (acc, comp) => ({
  //         ...acc,
  //         [comp]: ['Abify', 'AIHumanize.io', 'StealthWriter.ai'].includes(comp) ? '✅' : '❌',
  //       }),
  //       {},
  //     ),
  //   },
  //   {
  //     id: 4,
  //     feature: 'Customizable Tones & Styles',
  //     values: competitors.reduce<Record<string, string>>(
  //       (acc, comp) => ({
  //         ...acc,
  //         [comp]: ['Abify', 'HumanizeAI.io', 'AIHumanize.io', 'Phrasly.ai', 'BypassAI.ai', 'JustDone.ai'].includes(comp)
  //           ? '✅'
  //           : '❌',
  //       }),
  //       {},
  //     ),
  //   },
  //   {
  //     id: 5,
  //     feature: 'Multilingual Support',
  //     values: competitors.reduce<Record<string, string>>(
  //       (acc, comp) => ({
  //         ...acc,
  //         [comp]: ['Abify', 'AIHumanize.io'].includes(comp) ? '✅' : '❌',
  //       }),
  //       {},
  //     ),
  //   },
  //   {
  //     id: 6,
  //     feature: 'Plagiarism-Free Output',
  //     values: competitors.reduce<Record<string, string>>(
  //       (acc, comp) => ({
  //         ...acc,
  //         [comp]: !['Humanizer.org', 'StealthWriter.ai'].includes(comp) ? '✅' : '❌',
  //       }),
  //       {},
  //     ),
  //   },
  //   {
  //     id: 7,
  //     feature: 'Fast Processing',
  //     values: competitors.reduce<Record<string, string>>((acc, comp) => ({ ...acc, [comp]: '✅' }), {}),
  //   },
  //   {
  //     id: 8,
  //     feature: 'User-Friendly Interface',
  //     values: competitors.reduce<Record<string, string>>(
  //       (acc, comp) => ({
  //         ...acc,
  //         [comp]: !['Phrasly.ai', 'BypassAI.ai'].includes(comp) ? '✅' : '❌',
  //       }),
  //       {},
  //     ),
  //   },
  //   {
  //     id: 9,
  //     feature: 'Data Security',
  //     values: competitors.reduce<Record<string, string>>(
  //       (acc, comp) => ({
  //         ...acc,
  //         [comp]: ['Abify', 'BypassAI.ai'].includes(comp) ? '✅' : '❌',
  //       }),
  //       {},
  //     ),
  //   },
  //   {
  //     id: 10,
  //     feature: 'Free Demo Available',
  //     values: competitors.reduce<Record<string, string>>(
  //       (acc, comp) => ({
  //         ...acc,
  //         [comp]: !['Humanizer.org', 'StealthWriter.ai'].includes(comp) ? '✅' : '❌',
  //       }),
  //       {},
  //     ),
  //   },
  // ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <section className={styles.comparisonSection}> */}
        {/*   <h2 className={styles.comparisonTitle}>Abify vs Other AI Humanizers</h2> */}
        {/*   <div className={styles.comparisonTableContainer}> */}
        {/*     <table className={styles.comparisonTable}> */}
        {/*       <thead> */}
        {/*         <tr className={styles.comparisonHeaderRow}> */}
        {/*           <th className={styles.comparisonHeaderCell}>Function</th> */}
        {/*           {competitors.map(competitor => ( */}
        {/*             <th key={competitor} className={`${styles.comparisonHeaderCell} ${styles.textCenter}`}> */}
        {/*               {competitor} */}
        {/*             </th> */}
        {/*           ))} */}
        {/*         </tr> */}
        {/*       </thead> */}
        {/*       <tbody> */}
        {/*         {tableData.map(row => ( */}
        {/*           <tr key={row.id} className={styles.comparisonDataRow}> */}
        {/*             <td className={`${styles.comparisonDataCell} ${styles.featureCell}`}>{row.feature}</td> */}
        {/*             {competitors.map(competitor => ( */}
        {/*               <td */}
        {/*                 key={`${row.id}-${competitor}`} */}
        {/*                 className={`${styles.comparisonDataCell} ${styles.textCenter}`} */}
        {/*               > */}
        {/*                 {row.values[competitor]} */}
        {/*               </td> */}
        {/*             ))} */}
        {/*           </tr> */}
        {/*         ))} */}
        {/*       </tbody> */}
        {/*     </table> */}
        {/*   </div> */}
        {/* </section> */}
        <br />
      </div>
    </div>
  );
};
export default SeoContent;
