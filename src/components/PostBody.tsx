/* eslint-disable no-param-reassign */
import type { HTMLReactParserOptions } from 'html-react-parser';
import HTMLReactParser, { Element } from 'html-react-parser';
import Dompurify from 'isomorphic-dompurify';

import styles from '@/styles/PostBody.module.css';

type PostBodyProps = {
  content: string;
};

export default function PostBody({ content }: PostBodyProps) {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === 'a') {
          domNode.attribs.class = 'text-blue-500 hover:underline';
        }
      }
    },
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className={styles.content}>
        {HTMLReactParser(Dompurify.sanitize(content), options)}
      </div>
    </div>
  );
}
