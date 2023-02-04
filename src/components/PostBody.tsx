/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import type { DOMNode, Element } from 'html-react-parser';
import parse, { domToReact } from 'html-react-parser';
import Dompurify from 'isomorphic-dompurify';

import styles from '@/styles/PostBody.module.css';

import Link from './Link';

type PostBodyProps = {
  content: string;
};

function domNodeIsElement(domNode: DOMNode): domNode is Element {
  return domNode.type === 'tag';
}

const parser = (input: string) =>
  parse(input, {
    replace: (domNode) => {
      if (!domNodeIsElement(domNode)) return;
      if (domNode.name === 'a' && domNode.attribs.href) {
        return (
          <Link href={domNode.attribs.href}>
            {domToReact(domNode.children)}
          </Link>
        );
      }
      return domNode;
    },
  });

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className={styles.content}>
        {parser(Dompurify.sanitize(content))}
      </div>
    </div>
  );
}
