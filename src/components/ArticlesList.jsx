import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import articlesData from './articlesData';

const ArticlesList = () => {
  const siteUrl = 'https://businessleadershipaward.com/';

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Статьи | Международная Премия Лидеров бизнеса</title>
        <meta
          name="description"
          content="Статьи, аналитика и экспертные комментарии от Международная Премия Лидеров бизнеса."
        />
        <meta
          name="keywords"
          content="marketing awards news, Международная Премия Лидеров бизнеса, jury insights, articles"
        />
        <link rel="canonical" href={`${siteUrl}/articles`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="News | Международная Премия Лидеров бизнеса" />
        <meta
          property="og:description"
          content="Статьи, аналитика и экспертные комментарии от Международная Премия Лидеров бизнеса."
        />
        <meta property="og:url" content={`${siteUrl}/articles`} />
        <meta property="og:site_name" content="Международная Премия Лидеров бизнеса" />
      </Helmet>

      <section className="articles-hero">
        <div className="overlay"></div>
        <div className="text-content">
          <h3>Международная Премия Лидеров бизнеса</h3>
          <h1>Статьи</h1>
        </div>
      </section>

      <section className="articles-page-section">
        <div className="articles-page-inner">
          <p className="articles-page-intro">
            Статьи, экспертные материалы и комментарии о маркетинге, брендинге и индустриальных трендах.
          </p>

          <div className="articles-grid">
            {articlesData.map((article) => (
              <article key={article.id} className="news-card">
                <Link
                  to={`/articles/${article.seoSlug}`}
                  className="news-card-image-link"
                >
                <img
                  src={article.card || article.image}
                  alt={article.imageAlt || article.title}
                  className={`news-card-image ${article.cardClass || ''}`}
                />
                </Link>

                <div className="news-card-content">
                  <div className="news-card-date">{article.date}</div>

                  <h2 className="news-card-title">
                    <Link to={`/articles/${article.seoSlug}`}>{article.title}</Link>
                  </h2>

                  <p className="news-card-excerpt">
                    {article.seoDescription || article.text}
                  </p>

                  <Link
                    to={`/articles/${article.seoSlug}`}
                    className="news-card-link"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlesList;