import React from 'react';
import { DocumentTextIcon, DocumentCheckIcon, DocumentDuplicateIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';
import cn from 'classnames';

import styles from './Humanize.module.scss';
import AppSelect from '@/components/AppSelect/AppSelect';
import AppButton from '@/components/AppButton/AppButton';

const Humanize: React.FC = () => {
  const [text, setText] = React.useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };

  const dropdownOptions = [
    { id: 'Option 1', title: 'Option 1' },
    { id: 'Option 2', title: 'Option 2' },
    { id: 'Option 3', title: 'Option 3' },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1 className={styles.title}>AI Humanizer by Abify</h1>
            <h2 className={styles.title}>AI Text Humanizer for Natural, Undetectable Writing</h2>
          </div>
          <div className={styles.description}>
            <p>Change robotic sentences into flowing, engaging text that bypasses AI detectors effortlessly.</p>
            <p>
              Boost your content’s appeal and ensure it connects with your audience on a human level — all while saving
              time and enhancing your workflow. Abify is your go-to tool to make your writing undetectable and truly
              effective.
            </p>
          </div>
          <button className={styles['humanize-btn']} type="button">
            START HUMANIZING NOW – FOR FREE
          </button>
        </div>
        <div className={styles['humanize-container']}>
          <div className={cn(styles['input-container'], styles['enter-text-container'])}>
            <div className={styles['select-wrapper']}>
              <p>Enter your text here</p>
              <div className={styles['select-container']}>
                <AppSelect
                  value={text}
                  placeholder="Choose Purpose"
                  options={dropdownOptions}
                  onSelect={() => console.log(text)}
                />
                <AppSelect
                  value={text}
                  placeholder="Choose Tone"
                  options={dropdownOptions}
                  onSelect={() => console.log(text)}
                />
              </div>
            </div>
            <textarea
              className={styles.textarea}
              placeholder="To rewrite your content, type or paste it here on click on the “Humanize” button below."
              onChange={handleChange}
            />
            <div className={styles['enter-text-btns']}>
              <div className={styles['paste-try-btns']}>
                <AppButton text="PASTE TEXT" Icon={DocumentTextIcon} disabled={false} />
                <AppButton text="TRY A SAMPLE" Icon={DocumentCheckIcon} disabled={false} />
              </div>
              <AppButton text="HUMANIZE" Icon={SparklesIcon} disabled />
            </div>
          </div>
          <div className={cn(styles['input-container'], styles.results)}>
            <div className={styles['results-title']}>
              <p>Check Result</p>
            </div>
            <div className={styles['results-wrapper']}>
              <textarea
                className={styles.textarea}
                placeholder="Your humanized content will appear here."
                onChange={handleChange}
                readOnly
              />
              <div className={styles['enter-text-btns']}>
                <AppButton text="COPY TEXT" Icon={DocumentDuplicateIcon} disabled />
                <AppButton text="RETRY" Icon={ArrowPathIcon} disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humanize;
