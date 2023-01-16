import styles from '@/styles/PostBody.module.css';

export default function PostBody({ content }) {
  return (
    <div className="mx-auto max-w-2xl">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
