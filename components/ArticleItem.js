import Link from 'next/Link';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = () => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

export default ArticleItem;