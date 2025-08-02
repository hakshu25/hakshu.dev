'use client';

import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

interface Props {
  content: string;
}

export default function SyntaxHighlighter({ content }: Props) {
  const [highlightedContent, setHighlightedContent] = useState<string>('');

  useEffect(() => {
    const highlightCode = async () => {
      // Create a temporary div to parse the HTML content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;

      // Find all code blocks
      const codeBlocks = tempDiv.querySelectorAll('pre code, code');

      if (codeBlocks.length === 0) {
        return;
      }

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

      setHighlightedContent(tempDiv.innerHTML);
    };

    highlightCode();
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
