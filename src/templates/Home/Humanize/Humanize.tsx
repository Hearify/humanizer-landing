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

import styles from './Humanize.module.scss';
import AppSelect from '@/components/AppSelect/AppSelect';
import AppButton from '@/components/AppButton/AppButton';
import HumanizeLoader from '@/components/HumanizeLoader/HumanizeLoader';

const Humanize: React.FC = () => {
  const [userText, setUserText] = useState<string>('');
  const [humanizedText, setHumanizedText] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [statusCode, setStatusCode] = useState<number>();
  const [CopyButtonText, setCopyButtonText] = useState<string>('COPY TEXT');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  interface HumanizedTextResponse {
    result: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setUserText(e.target.value);
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
            <h2 className={styles.title}>AI Humanizer by Abify</h2>
            <h1 className={styles.title}>
              AI to Human Text Converter: Transform AI into Undetectable & Unique Writing
            </h1>
          </div>
          <div className={styles.description}>
            <p>
              Change AI-generated content into natural, readable, and engaging text that bypasses AI detectors
              effortlessly. Boost your content’s appeal and ensure it connects with your audience on a human level — all
              while saving time and improving your workflow.
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
                  value={userText}
                  placeholder="Choose Purpose"
                  options={dropdownOptions}
                  onSelect={() => console.log(userText)}
                />
                <AppSelect
                  value={userText}
                  placeholder="Choose Tone"
                  options={dropdownOptions}
                  onSelect={() => console.log(userText)}
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
                <AppButton text="TRY A SAMPLE" Icon={DocumentCheckIcon} disabled={false} />
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
              <p>Check Result</p>
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
                  text={CopyButtonText}
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
