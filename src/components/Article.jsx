import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import articlesData from './articlesData';

const Article = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function isGoogleTranslated() {
      const html = document.documentElement;
      const body = document.body;

      return (
        html.classList.contains('translated-ltr') ||
        html.classList.contains('translated-rtl') ||
        body.classList.contains('translated-ltr') ||
        body.classList.contains('translated-rtl') ||
        document.cookie.indexOf('googtrans=') !== -1
      );
    }

    function fixValue(text) {
      if (!text) return text;

      return text
        .replace(/\bVadim Prenko's\b/g, "Vadym Prenko's")
        .replace(/\bVADIM PRENKO'S\b/g, "VADYM PRENKO'S")
        .replace(/\bVadim Prenkos\b/g, "Vadym Prenko's")
        .replace(/\bVADIM PRENKOS\b/g, "VADYM PRENKO'S")
        .replace(/\bVadim Prynko's\b/g, "Vadym Prenko's")
        .replace(/\bVADIM PRYNKO'S\b/g, "VADYM PRENKO'S")
        .replace(/\bVadim Prynko\b/g, 'Vadym Prenko')
        .replace(/\bVADIM PRYNKO\b/g, 'VADYM PRENKO')
        .replace(/\bVadim Prenco\b/g, 'Vadym Prenko')
        .replace(/\bVADIM PRENCO\b/g, 'VADYM PRENKO')
        .replace(/\bVadim Prenko\b/g, 'Vadym Prenko')
        .replace(/\bVADIM PRENKO\b/g, 'VADYM PRENKO')
        .replace(/\bVadim's\b/g, "Vadym's")
        .replace(/\bVADIM'S\b/g, "VADYM'S")
        .replace(/\bVadim\b/g, 'Vadym')
        .replace(/\bVADIM\b/g, 'VADYM');
    }

    function shouldSkipNode(parent) {
      if (!parent || !parent.tagName) return true;

      const tag = parent.tagName.toUpperCase();

      return (
        tag === 'SCRIPT' ||
        tag === 'STYLE' ||
        tag === 'NOSCRIPT' ||
        tag === 'TEXTAREA' ||
        tag === 'CODE' ||
        tag === 'PRE'
      );
    }

    function fixTextNodes(root) {
      if (!root) return;

      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(node) {
            if (!node || !node.nodeValue || !node.nodeValue.trim()) {
              return NodeFilter.FILTER_REJECT;
            }

            if (shouldSkipNode(node.parentNode)) {
              return NodeFilter.FILTER_REJECT;
            }

            if (!/Vadim|VADIM|Prenko|PRENKO|Prynko|PRYNKO|Prenco|PRENCO/i.test(node.nodeValue)) {
              return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );

      const nodes = [];
      let current;

      while ((current = walker.nextNode())) {
        nodes.push(current);
      }

      nodes.forEach((node) => {
        const fixed = fixValue(node.nodeValue);
        if (fixed !== node.nodeValue) {
          node.nodeValue = fixed;
        }
      });
    }

    function fixAttributes() {
      const selectors = [
        'title',
        'meta[name="description"]',
        'meta[name="keywords"]',
        'meta[property="og:title"]',
        'meta[property="og:description"]',
        'meta[name="twitter:title"]',
        'meta[name="twitter:description"]',
        'img[alt]',
      ];

      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          if (el.tagName.toLowerCase() === 'title') {
            const fixedText = fixValue(el.textContent);
            if (fixedText !== el.textContent) {
              el.textContent = fixedText;
            }
          } else if (el.tagName.toLowerCase() === 'img') {
            const alt = el.getAttribute('alt');
            const fixedAlt = fixValue(alt);
            if (fixedAlt !== alt) {
              el.setAttribute('alt', fixedAlt);
            }
          } else {
            const content = el.getAttribute('content');
            const fixedContent = fixValue(content);
            if (fixedContent !== content) {
              el.setAttribute('content', fixedContent);
            }
          }
        });
      });

      if (document.title) {
        const fixedTitle = fixValue(document.title);
        if (fixedTitle !== document.title) {
          document.title = fixedTitle;
        }
      }
    }

    function runFixes() {
      if (!isGoogleTranslated()) return;

      fixTextNodes(document.body);
      fixAttributes();
    }

    let started = false;
    let mainObserver = null;
    let pollInterval = null;
    let translationWatcher = null;
    let translateCheckInterval = null;

    function startAfterTranslate() {
      if (started) return;
      started = true;

      runFixes();

      mainObserver = new MutationObserver(() => {
        runFixes();
      });

      if (document.body) {
        mainObserver.observe(document.body, {
          childList: true,
          subtree: true,
          characterData: true,
        });
      }

      let count = 0;
      pollInterval = setInterval(() => {
        runFixes();
        count += 1;

        if (count > 180) {
          clearInterval(pollInterval);
        }
      }, 1000);
    }

    function waitForTranslate() {
      if (isGoogleTranslated()) {
        startAfterTranslate();
        return;
      }

      translationWatcher = new MutationObserver(() => {
        if (isGoogleTranslated()) {
          startAfterTranslate();
        }
      });

      translationWatcher.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['class', 'lang'],
      });

      translateCheckInterval = setInterval(() => {
        if (isGoogleTranslated()) {
          startAfterTranslate();
          clearInterval(translateCheckInterval);
        }
      }, 1000);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', waitForTranslate);
    } else {
      waitForTranslate();
    }

    return () => {
      if (mainObserver) mainObserver.disconnect();
      if (translationWatcher) translationWatcher.disconnect();
      if (pollInterval) clearInterval(pollInterval);
      if (translateCheckInterval) clearInterval(translateCheckInterval);
    };
  }, []);

  const article = articlesData.find((item) => item.seoSlug === slug);

  if (!article) {
    return <div className="article-not-found">Article not found</div>;
  }

  const siteUrl = 'https://businessleadershipaward.com/';
  const articleUrl = `${siteUrl}/articles/${article.seoSlug}`;
  const imageUrl =
    typeof article.image === 'string'
      ? `${siteUrl}${article.image.startsWith('/') ? article.image : `/${article.image}`}`
      : `${siteUrl}/preview.png`;

  const description =
    article.seoDescription || article.text || 'Статьи от Международная Премия Лидеров бизнеса';

  const title = article.seoTitle || `${article.title} | Международная Премия Лидеров бизнеса`;
  const keywords = article.seoKeywords || `${article.title}, Международная Премия Лидеров бизнеса`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description,
    image: [imageUrl],
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Международная Премия Лидеров бизнеса',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    datePublished: article.date,
  };

const renderContent = (content) => {
  const elements = [];
  let listItems = [];

  const flushList = (keyPrefix) => {
    if (listItems.length) {
      elements.push(
        <ul key={`${keyPrefix}-list`} className="article-list">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  content.forEach((block, index) => {
    if (block.type === 'list') {
      listItems.push(block.text);
      return;
    }

    flushList(index);

    switch (block.type) {
      case 'paragraph':
        elements.push(
          <p key={index} className="article-paragraph">
            {block.text}
          </p>
        );
        break;

      case 'header':
        elements.push(
          <h2 key={index} className="article-header">
            {block.text}
          </h2>
        );
        break;

      case 'sub-header':
        elements.push(
          <h3 key={index} className="article-sub-header">
            {block.text}
          </h3>
        );
        break;

      case 'image':
        elements.push(
          <img
            key={index}
            src={block.src}
            alt={block.alt}
            className="article-page-image article-page-image--inner"
          />
        );
        break;

      case 'person-card':
        elements.push(
          <section key={index} className="article-person-card">
            <div className="article-person-card__media">
              <img
                src={block.image}
                alt={block.imageAlt || block.name}
                className="article-person-card__image"
              />
            </div>

            <div className="article-person-card__content">
              <div className="article-person-card__meta">
                <h3 className="article-person-card__name">
                  {block.name}
                  {block.country ? (
                    <span className="article-person-card__country">, {block.country}</span>
                  ) : null}
                </h3>

                {block.nomination ? (
                  <div className="article-person-card__nomination">
                    Номинация: {block.nomination}
                  </div>
                ) : null}
              </div>

              <div className="article-person-card__qa">
                {block.qa?.map((item, qaIndex) => (
                  <div key={qaIndex} className="article-person-card__qa-item">
                    <h4 className="article-person-card__question">{item.question}</h4>
                    <p className="article-person-card__answer">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
        break;

      default:
        break;
    }
  });

  flushList('end');

  return elements;
};

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={articleUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Международная Премия Лидеров бизнеса" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <section className="article-hero">
        <div className="overlay"></div>
        <div className="text-content">
          <h3>Международная Премия Лидеров бизнеса</h3>
          <h1>Новости</h1>
        </div>
      </section>

      <section className="article-page-section">
        <div className="article-container">
          <article className="article-page">
            <div className="article-meta">
              <span className="article-date">{article.date}</span>
            </div>

            <h1 className="article-page-title">{article.title}</h1>

            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              className="article-page-image"
            />

            <div className="article-page-content">
              {renderContent(article.content)}
            </div>

            <div className="article-author">{article.author}</div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Article;