'use client';

import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

interface Props {
  content: string;
}

export default function SyntaxHighlighter({ content }: Props) {
  const [highlightedContent, setHighlightedContent] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    const highlightCode = async () => {
      // Create a temporary div to parse the HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;

      // Find all code blocks
      const codeBlocks = tempDiv.querySelectorAll('pre code, code');

      if (codeBlocks.length === 0) {
        return;
      }

      try {
        // Process each code block
        for (const codeBlock of codeBlocks) {
          const lang = codeBlock
            .getAttribute?.('class')
            ?.replace('language-', '');
          const codeText = codeBlock.textContent || '';

          const code = await codeToHtml(codeText, {
            lang: lang ?? 'plaintext',
            theme: 'one-dark-pro',
          });
          codeBlock.outerHTML = code;
        }
      } catch (error) {
        console.error('Error highlighting code:', error);
        // フォールバックとして元のコンテンツを使用
        if (isMounted) {
          setHighlightedContent(content);
        }
      }

      if (isMounted) {
        setHighlightedContent(tempDiv.innerHTML);
      }
    };

    highlightCode();

    return () => {
      isMounted = false; // Cleanup to avoid setting state on unmounted component
    };
  }, [content]);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: highlightedContent || content,
      }}
      className={'post transition-opacity duration-300'}
    />
  );
}
