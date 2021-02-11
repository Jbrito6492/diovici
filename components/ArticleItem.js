import Link from "next/Link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>props title</h3>
        <p>probs body</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
