import HTMLReactParser from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

import styles from '@/styles/PostBody.module.css';

type PostBodyProps = {
  content: string;
};

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className={styles.content}>
        {HTMLReactParser(DOMPurify.sanitize(content))}
      </div>
    </div>
  );
}
