// @flow strict
import React, { useEffect } from 'react';
const siteConfig = require('../../../config.js');

type Props = {
  publicUserId: string,
};

const SCRIPT_ID = 'elevenlabs-audionative-script';

const AudioNative = ({ publicUserId }: Props) => {
  useEffect(() => {
    if (typeof document !== 'undefined' && !document.getElementById(SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = 'https://elevenlabs.io/player/audioNativeHelper.js';
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="elevenlabs-audionative-widget"
      data-height="90"
      data-width="100%"
      data-frameborder="no"
      data-scrolling="no"
      data-publicuserid={publicUserId}
      data-playerurl="https://elevenlabs.io/player/index.html"
      data-projectid={siteConfig.elevenLabsProjectId}
    >
      Loading the{' '}
      <a href="https://elevenlabs.io/text-to-speech" target="_blank" rel="noopener">
        Elevenlabs Text to Speech
      </a>{' '}
      AudioNative Player...
    </div>
  );
};

export default AudioNative;
