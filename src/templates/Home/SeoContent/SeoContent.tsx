import React from 'react';

import styles from './SeoContent.module.scss';

const SeoContent: React.FC = () => {
 const testimonials = [
    {
      id: 1,
      quote:
        'Abify has helped me improve my blog posts by making them more natural and engaging for readers. It\'s the perfect tool for anyone who wants to create high-quality content quickly.',
      author: 'Anna',
      role: 'blogger',
    },
    {
      id: 2,
      quote:
        'I was always afraid of AI detectors when I was working on academic texts, but Abify solved this problem. Now I am sure that my work sounds professional and passes plagiarism checks.',
      author: 'Max',
      role: 'PhD student',
    },
    {
      id: 3,
      quote:
        'Thanks to Abify, we have significantly accelerated the creation of advertising texts for our clients. It doesn\'t just edit, but adapts the text to make it sound the way it should.',
      author: 'Kate',
      role: 'head of a marketing agency',
    },
    {
      id: 4,
      quote:
        'Our marketing materials now look much more professional and resonate with our audience. Abify has become an integral part of our content strategy.',
      author: 'Alex',
      role: 'startup owner',
    },
    {
      id: 5,
      quote:
        'Abify helped me quickly adapt texts for different markets thanks to its multilingual support. I don\'t waste time on manual editing - everything works perfectly.',
      author: 'Jessy',
      role: 'international marketing manager',
    },
  ];

  const steps = [
    {
      id: 1,
      title: 'Input Your AI-Generated Text',
      description: 'Upload your AI-generated content into our easy-to-use platform.',
    },
    {
      id: 2,
      title: 'Choose Your Tone & Preferences',
      description: 'Select the tone and style that best fits your needs, whether it\'s conversational, professional, or creative.',
    },
    {
      id: 3,
      title: 'Abify Does the Rest',
      description: 'Our advanced AI technology works its magic, rewriting and transforming your text to sound natural and undetectable.',
    },
    {
      id: 4,
      title: 'Export & Use',
      description: 'Once your content is humanized, it\'s ready to publish or share—no more awkward or robotic sentences.',
    },
  ];

  const tableData = [
    { id: 1, feature: 'Humanize AI Content', values: Array(12).fill('✅') },
    { id: 2, feature: 'Bypass AI Detectors', values: Array(12).fill('✅') },
    { id: 3, feature: 'SEO Optimization', values: ['✅', '❌', '❌', '❌', '✅', '❌', '❌', '❌', '❌', '❌', '✅', '❌'] },
    { id: 4, feature: 'Customizable Tones & Styles', values: ['✅', '❌', '✅', '❌', '✅', '❌', '❌', '❌', '✅', '✅', '❌', '✅'] },
    { id: 5, feature: 'Multilingual Support', values: ['✅', '❌', '❌', '❌', '✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌'] },
    { id: 6, feature: 'Plagiarism-Free Output', values: ['✅', '✅', '✅', '✅', '✅', '✅', '✅', '❌', '✅', '✅', '❌', '✅'] },
    { id: 7, feature: 'Fast Processing', values: Array(12).fill('✅') },
    { id: 8, feature: 'User-Friendly Interface', values: ['✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '❌', '❌', '✅', '✅'] },
    { id: 9, feature: 'Data Security', values: ['✅', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '✅', '❌', '❌'] },
    { id: 10, feature: 'Free Demo Available', values: ['✅', '✅', '✅', '✅', '✅', '✅', '✅', '❌', '✅', '✅', '❌', '✅'] },
  ];
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.body}>
          <h2 className={styles.title}>Abify Use Cases</h2>
          <p className={styles.label}>Bloggers and content creators</p>
          <p className={styles.text}>
            Write articles, blogs, or posts for social media faster, with the confidence that the text sounds natural.
            Your audience will be interested, and your content will always be unique and relevant.
          </p>
          <p className={styles.label}>Marketers</p>
          <p className={styles.text}>
            Create marketing materials that emotionally impact, increase engagement, and improve conversions. Abify is
            ideal for advertising copy, newsletters, and landing pages.
          </p>
          <p className={styles.label}>Students and researchers</p>
          <p className={styles.text}>
            Transform academic texts into professionally written materials that pass plagiarism checks and look
            authentic. Ideal for essays, term papers, or research papers.
          </p>
          <p className={styles.label}>Business and brands</p>
          <p className={styles.text}>
            Automate the creation of professional texts for your website, emails, or advertising campaigns. Abify
            empowers your team to write human AI content that maintains your brand’s voice and quality.
          </p>
          <p className={styles.label}>Digital agencies</p>
          <p className={styles.text}>
            Save time and resources by processing large numbers of texts in seconds. Abify allows agencies to create
            high-quality content for different clients in any style or tone.
          </p>
          <p className={styles.label}>Translators</p>
          <p className={styles.text}>
            Make the text not only translated but also adapted to the cultural context. Abify helps you avoid literal
            mistakes and creates content that sounds natural in any language.
          </p>
          <p className={styles.label}>Startups</p>
          <p className={styles.text}>
            Quickly create high-quality content for pitch decks, presentations, or investor materials. Provide text that
            sounds convincing and reflects your idea clearly and professionally.
          </p>
        </section>

        {/* How Does Abify Work Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">How Does Abify Work?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-xl font-bold mb-3 text-blue-600">
                  {step.id}. {step.title}
                </div>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        
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

        {/* Testimonials Section */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="text-gray-900 font-medium">
                - {testimonial.author}, <span className="text-gray-600">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">6. Порівняння з конкурентами (Comparison Table)</h2>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 p-3 text-left font-semibold">Function</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">Abify</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">HumanizeAI.pro</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">HumanizeAI.io</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">AIHumanize.io</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">HumanizeAIText.ai</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">WriteHuman.ai</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">Humanizer.org</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">Phrasly.ai</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">BypassAI.ai</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">StealthWriter.ai</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">Undetectable.ai</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold">JustDone.ai</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 p-3 font-medium">{row.feature}</td>
                    {row.values.map((value, i) => (
                      <td key={`${row.id}-${i}`} className="border border-gray-200 p-3 text-center">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
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
          <p className={styles.text}>
            Yes, you can export text in the desired format.
          </p>
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
