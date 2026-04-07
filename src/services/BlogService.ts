import articlesData from '@/data/blog/articles.json';
import authorsData from '@/data/blog/authors.json';
import articleContent from '@/data/blog/articleContent';

import type { Author } from '@/types/author';
import type { Article, ArticlePreview } from '@/types/article';

class BlogService {
  public static loadArticlePreviews = async (): Promise<ArticlePreview[]> => {
    return articlesData as ArticlePreview[];
  };

  public static loadAuthors = async (): Promise<Author[]> => {
    return authorsData as Author[];
  };

  public static loadArticleMarkdown = async (slug: string): Promise<string> => {
    const content = articleContent[slug];
    if (!content) {
      throw new Error(`Article markdown not found for slug: ${slug}`);
    }
    return content;
  };

  public static loadAuthor = async (slug: string): Promise<Author> => {
    const authors = await BlogService.loadAuthors();
    const author = authors.find(item => item.slug === slug);

    if (!author) {
      throw new Error(`Author with slug ${slug} not found`);
    }

    return author;
  };

  public static loadArticle = async (slug: string): Promise<Article> => {
    const articles = await BlogService.loadArticlePreviews();
    const article = articles.find(item => item.slug === slug);

    if (!article) {
      throw new Error(`Article with slug ${slug} not found`);
    }

    const author = await BlogService.loadAuthor(article.authorSlug);
    const editor = article.editorSlug ? await BlogService.loadAuthor(article.editorSlug) : undefined;

    const suggestions = articles
      .filter(item => item.slug !== slug)
      .slice(0, 3)
      .sort(() => 0.5 - Math.random());

    return {
      ...article,
      author,
      editor,
      suggestions,
    };
  };
}

export default BlogService;
