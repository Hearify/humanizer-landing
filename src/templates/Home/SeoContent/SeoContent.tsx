import React from 'react';

import styles from './SeoContent.module.scss';

interface TableRow {
  id: number;
  feature: string;
  values: Record<string, string>;
}

const SeoContent: React.FC = () => {
  const competitors = [
    'Abify',
    'HumanizeAI.pro',
    'HumanizeAI.io',
    'AIHumanize.io',
    'HumanizeAIText.ai',
    'WriteHuman.ai',
    'Humanizer.org',
    'Phrasly.ai',
    'BypassAI.ai',
    'StealthWriter.ai',
    'Undetectable.ai',
    'JustDone.ai',
  ];

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
        <section className={styles.body}>
          <h2 className={styles.title}>Humanize Beyond Detection: Abify Provides Original and Authentic Writing</h2>
          <p className={styles.text}>
            Abify doesnt just bypass AI detectors - its designed to make your content unique and original. Our advanced
            AI text humanizer doesnt just paraphrase; it rewrites and transforms text to create authentic,
            plagiarism-free content that perfectly matches your needs. Whether creating academic materials, marketing
            texts, or publishing professional content, Abify ensures that your work effortlessly passes all the
            significant plagiarism checks.
          </p>
          <p className={styles.text}>
            By converting AI to human text seamlessly into natural, human writing, Abify helps you comply with copyright
            standards while increasing the originality and quality of your content. From students and researchers to
            marketers and businesses, rely on Abify to deliver hard-to-detect text that is yours for the making.
          </p>
        </section>
        <h2 className={styles.title}> Let Abify help you write human AI content that resonates and drives results.</h2>

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

        <section className={styles.body}>
          <h2 className={styles.title}>FAQ</h2>
          <p className={styles.label}>What is Abify?</p>
          <p className={styles.text}>
            <strong>Abify</strong> is an advanced AI text humanizer that turns AI-generated text into natural,
            human-like writing. Our tool helps you bypass AI detectors and create unique, undetectable content that
            flows naturally.
          </p>
          <p className={styles.label}>Can Abify help me pass AI detectors?</p>
          <p className={styles.text}>
            Yes! <strong>Abify</strong> is specifically designed to rewrite AI-generated content in a way that makes it
            indistinguishable from human writing, ensuring it can bypass AI detection tools.
          </p>
          <p className={styles.label}>Will my content pass plagiarism checks?</p>
          <p className={styles.text}>
            Absolutely. <strong>Abify</strong> not only humanizes your AI content but also restructures it to ensure
            it’s original and can pass all major plagiarism checks.
          </p>
          <p className={styles.label}>What languages does Abify support?</p>
          <p className={styles.text}>
            <strong>Abify</strong> supports a wide range of languages, including{' '}
            <strong>
              English, Spanish, French, German, Chinese, Arabic, Hindi, Ukrainian, Japanese, Korean, Portuguese
            </strong>
            , and many more. Check out the full list above for all supported languages.
          </p>
          <p className={styles.label}>How does Abify work?</p>
          <p className={styles.text}>
            Simply <strong>upload your AI-generated text</strong>, choose your preferred tone and style, and let{' '}
            <strong>Abify</strong> humanize it. Within seconds, you’ll receive content that flows naturally and reads
            like it was written by a person.
          </p>
          <p className={styles.label}>Is my data safe with Abify?</p>
          <p className={styles.text}>
            Yes, we take privacy seriously. <strong>Abify</strong> ensures that all your data and content are handled
            securely, with no risk of exposure or sharing.
          </p>
          <p className={styles.label}>Can I use Abify for academic content?</p>
          <p className={styles.text}>
            Yes! <strong>Abify</strong> is ideal for students, researchers, and academics who want to{' '}
            <strong>rewrite AI-generated content</strong>
            in a way that feels human and passes plagiarism checks.
          </p>
          <p className={styles.label}>Is Abify fast?</p>
          <p className={styles.text}>
            Yes, <strong>Abify</strong> humanizes your content in a matter of seconds, making it perfect for those who
            need high-quality, human-like text quickly.
          </p>
          <p className={styles.label}>Can I customize the tone and style?</p>
          <p className={styles.text}>
            Absolutely. <strong>Abify</strong> allows you to choose from a variety of tones and styles, whether you need
            professional, casual, creative, or formal content.
          </p>
          <p className={styles.label}>Is Abify suitable for businesses and marketers?</p>
          <p className={styles.text}>
            Yes! <strong>Abify</strong> is perfect for businesses, marketers, and content creators looking to produce
            high-quality, natural-sounding text while <strong>bypassing AI detectors</strong> and maintaining
            SEO-friendly content.
          </p>
          <p className={styles.label}>Does Abify integrate with other platforms?</p>
          <p className={styles.text}>Yes, you can export text in the desired format.</p>
          <p className={styles.label}>Does Abify work with text generated by ChatGPT or Claude?</p>
          <p className={styles.text}>
            Absolutely! Abify is a powerful Chat GPT humanizer designed to refine any AI-generated text.
          </p>
        </section>
        <br />
      </div>
    </div>
  );
};
export default SeoContent;
