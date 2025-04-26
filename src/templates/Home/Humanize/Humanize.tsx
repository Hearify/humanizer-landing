import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  DocumentTextIcon,
  DocumentCheckIcon,
  DocumentDuplicateIcon,
  ArrowPathIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { SparklesIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import cn from 'classnames';
import Link from 'next/link';

import styles from './Humanize.module.scss';
import AppSelect from '@/components/AppSelect/AppSelect';
import AppButton from '@/components/AppButton/AppButton';
import HumanizeLoader from '@/components/HumanizeLoader/HumanizeLoader';

const Humanize: React.FC = () => {
  const [userText, setUserText] = useState<string>('');
  const [humanizedText, setHumanizedText] = useState<string>('');
  const [purposeValue, setPurposeValue] = useState<string>('');
  const [toneValue, setToneValue] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [statusCode, setStatusCode] = useState<number>();
  const [copyButtonText, setCopyButtonText] = useState<string>('COPY TEXT');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  interface HumanizedTextResponse {
    result: string;
  }

  const purposeOptions = [
    { id: 'General Writing', title: 'General Writing' },
    { id: 'Academic Writing', title: 'Academic Writing' },
    { id: 'Marketing Material', title: 'Marketing Material' },
    { id: 'Business Material', title: 'Business Material' },
    { id: 'Legal Material', title: 'Legal Material' },
    { id: 'Story', title: 'Story' },
    { id: 'Letter', title: 'Letter' },
    { id: 'Report', title: 'Report' },
  ];

  const toneOptions = [
    { id: 'Standard', title: 'Standard' },
    { id: 'Academic', title: 'Academic' },
    { id: 'Casual', title: 'Casual' },
    { id: 'Scientific', title: 'Scientific' },
    { id: 'Professional', title: 'Professional' },
    { id: 'Blog/SEO', title: 'Blog/SEO' },
    { id: 'Creative', title: 'Creative' },
    { id: 'Technical', title: 'Technical' },
  ];

  const sampleText: string =
    "Space exploration has captivated humanity's imagination for decades, and the future holds even more exciting possibilities. With advancements in technology, the exploration of our solar system and beyond is becoming increasingly feasible. Missions to Mars, the establishment of lunar bases, and the search for signs of extraterrestrial life are just some of the ambitious goals on the horizon. Private companies are also playing a significant role, with ventures like space tourism and satellite constellations for global internet coverage. Moreover, the development of reusable rockets and advancements in propulsion systems are making space exploration more cost-effective and sustainable. \n" +
    '\n' +
    'International collaborations and public-private partnerships are driving innovation and pushing the boundaries of human knowledge. The future of space exploration holds great potential for scientific discoveries, technological advancements, and the expansion of our understanding of the universe.';

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setUserText(e.target.value);
  };

  const onSelectPurposeValue = (value: string) => {
    setPurposeValue(value);
  };

  const onSelectToneValue = (value: string) => {
    setToneValue(value);
  };

  const handlePaste = async (): Promise<void> => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setUserText(clipboardText);
    } catch (error) {
      console.error('Failed to paste text from clipboard:', error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(humanizedText);
    setCopyButtonText('COPIED');
    setIsCopied(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isCopied) {
      timer = setTimeout(() => {
        setCopyButtonText('COPY TEXT');
        setIsCopied(false);
      }, 2000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isCopied]);

  const humanizeText = async () => {
    setHumanizedText('');
    setMessage('Please wait, we’re working our magic!');
    setStatusCode(0);
    setIsLoading(true);

    const data = {
      text: userText,
      language: 'en',
    };

    try {
      const response = await axios.post<HumanizedTextResponse>(
        'https://apihumanizer.crabdance.com/api/generate/humanize-text',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Humanized Text:', response);
      setHumanizedText(response.data.result);
      setStatusCode(response.status);
      if (response.status === 200) {
        setMessage('The output content is most likely human-written.');
      }
    } catch (error) {
      console.error('Error humanizing text:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="humanize_section" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2 className={styles.title}>AI to Human Text Converter</h2>
            <h1 className={styles.title}>Transform AI into Undetectable & Unique Writing </h1>
          </div>
          <div className={styles.description}>
            <p>
              Change AI-generated content into natural, readable, and engaging text that bypasses AI detectors
              effortlessly.
            </p>
            <p>
              Boost your content’s appeal and ensure it connects with your audience on a human level — all while saving
              time and improving your workflow. Abify is your humanizer that makes your writing undetectable and truly
              effective.
            </p>
          </div>
          <Link href="/#humanize_section" className={styles['humanize-btn']}>
            TRY A LIVE DEMO
          </Link>
        </div>
        <div className={styles['humanize-container']}>
          <div className={cn(styles['input-container'], styles['enter-text-container'])}>
            <div className={styles['select-wrapper']}>
              <p>Paste your AI-generated content here</p>
              <div className={styles['select-container']}>
                <AppSelect
                  value={purposeValue}
                  placeholder="Choose Purpose"
                  options={purposeOptions}
                  onSelect={onSelectPurposeValue}
                />
                <AppSelect
                  value={toneValue}
                  placeholder="Choose Tone"
                  options={toneOptions}
                  onSelect={onSelectToneValue}
                />
              </div>
            </div>
            <textarea
              className={styles.textarea}
              placeholder="To rewrite your content, type or paste it here or click on the “Humanize” button below."
              onChange={handleChange}
              value={userText}
            />
            <div className={styles['enter-text-btns']}>
              <div className={styles['paste-try-btns']}>
                <AppButton text="PASTE TEXT" Icon={DocumentTextIcon} onClick={handlePaste} disabled={false} />
                <AppButton
                  text="TRY A SAMPLE"
                  Icon={DocumentCheckIcon}
                  onClick={() => setUserText(sampleText)}
                  disabled={false}
                />
              </div>
              <AppButton
                text="HUMANIZE"
                Icon={SparklesIcon}
                onClick={humanizeText}
                humanized
                disabled={userText.length <= 19}
              />
            </div>
          </div>
          <div className={cn(styles['input-container'], styles.results)}>
            <div className={styles['results-title']}>
              <p>Humanized Output</p>
            </div>
            <p className={statusCode === 200 ? styles.successMessage : styles.processingMessage}>
              {statusCode === 200 && <CheckCircleIcon width={20} height={20} />}
              {message}
            </p>
            <div className={styles['results-wrapper']}>
              <div className={styles['textarea-wrapper']}>
                {isLoading && <HumanizeLoader />}
                <textarea
                  className={styles.textarea}
                  placeholder={isLoading ? '' : 'Your humanized content will appear here.'}
                  value={humanizedText}
                  readOnly
                />
              </div>
              <div className={styles['enter-text-btns']}>
                <AppButton
                  text={copyButtonText}
                  Icon={isCopied ? CheckIcon : DocumentDuplicateIcon}
                  onClick={handleCopy}
                  disabled={humanizedText.length <= 19}
                />
                <AppButton
                  text="RETRY"
                  Icon={ArrowPathIcon}
                  onClick={humanizeText}
                  disabled={humanizedText.length <= 19}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Humanize;
