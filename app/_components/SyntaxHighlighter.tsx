'use client';

import { useEffect, useState } from 'react';

interface Props {
  content: string;
}

export default function SyntaxHighlighter({ content }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Dynamic import for highlight.js - loaded only when this component is used
    const loadHighlighter = async () => {
      // Load CSS by creating a link element
      if (!document.querySelector('link[href*="atom-one-dark"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href =
          'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css';
        document.head.appendChild(link);
      }

      const { default: hljs } = await import('highlight.js/lib/core');

      // Import only the languages we actually need
      const [
        { default: hlbash },
        { default: hljavascript },
        { default: hltypescript },
        { default: hlhtml },
        { default: hlcss },
      ] = await Promise.all([
        import('highlight.js/lib/languages/bash'),
        import('highlight.js/lib/languages/javascript'),
        import('highlight.js/lib/languages/typescript'),
        import('highlight.js/lib/languages/xml'),
        import('highlight.js/lib/languages/css'),
      ]);

      // Register languages
      hljs.registerLanguage('bash', hlbash);
      hljs.registerLanguage('js', hljavascript);
      hljs.registerLanguage('javascript', hljavascript);
      hljs.registerLanguage('ts', hltypescript);
      hljs.registerLanguage('typescript', hltypescript);
      hljs.registerLanguage('html', hlhtml);
      hljs.registerLanguage('xml', hlhtml);
      hljs.registerLanguage('css', hlcss);

      // Apply highlighting
      hljs.highlightAll();
      setIsLoaded(true);
    };

    loadHighlighter();
  }, [content]);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
      className={`post ${isLoaded ? 'opacity-100' : 'opacity-70'} transition-opacity duration-300`}
    />
  );
}
