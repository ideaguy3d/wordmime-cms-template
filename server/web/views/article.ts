import { 
    articleCardFactory,
    categoryFactory,
    generateArticleImageUrls,
    generateCss,
    generateFooter, 
    generateHeader, 
    generatePreload, 
    generateScripts,
    generateSponsor,
    getImageUrl
} from '../utils/factories';
import { transformTimestamp, transformTimestampForUser, translateService } from '../utils/helpers';
import { Article, Meta, Sponsor, UserModel } from '../../../models';

function generateContent(contentArray, article: Article, meta: Meta) {
    let html = "";
    contentArray.forEach(content => {
        if(content.type == "heading") {
            html = html +   `<div>
                                <h2>${content.contents}</h2>
                            </div>`
        }
        if(content.type == "image") {
            html = html +   `<div>
                                <img src='${getImageUrl(meta, content.contents)}' width='700' height='525' loading='lazy' class='sisalto-kuva' alt='${content.description ? content.description : article.title}'>
                                <p class='kuva-teksti'>${content.description}</p>
                            </div>`
        }
        if(content.type == "text") {
            html = html +   `<div>
                                <p class='content-text'>${content.contents}</p>
                            </div>`
        }
    });
    return html;
}

export const articleView = (meta: Meta, article: Article, author: UserModel, relatedArticles: Article[], sponsor: Sponsor) => {
    const generatedContent = generateContent(article.content, article, meta);
    const categories = categoryFactory(meta, meta.categories.articleCategories);
    const articleSlug = translateService(meta.siteConfigurations.language, 'articleSlug');
    const header = generateHeader(meta, article.externalLinkUrl, article.externalLinkTitle);
    const footer = generateFooter(meta);
    const scripts = generateScripts();
    const styles = generateCss();
    const preload = generatePreload();
    const relatedArticlesContent = relatedArticles.length ? articleCardFactory(meta, relatedArticles) : '';
    return `
        <!doctype html>
        <html lang="en">
        <head>

            <title>${article.title}</title>
            <meta property="og:title" content="${article.title}">
            <meta property="og:site_name" content="${meta.siteConfigurations.siteName}">
            <meta property="og:type" content="website">
            <meta property="og:url" content="${meta.siteConfigurations.domainName}${articleSlug}${article.slug}">
            <meta property="og:description" content="${article.description}">
            <meta property="og:image" content="${getImageUrl(meta, article.articleImage)}" />

            <link rel="canonical" href="${meta.siteConfigurations.domainName}${articleSlug}${article.slug}" />
            <meta name="description" content="${article.description}">
            <meta name="theme-color" content="${meta.siteConfigurations.primaryColor}">
            <meta name="application-name" content="${meta.siteConfigurations.siteName}">
            <meta name="apple-mobile-web-app-title" content="${article.title}">
        
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="msapplication-navbutton-color" content="#ffffff">
            <meta name="msapplication-TileImage" content="/public/assets/icons/android-chrome-192x192.png">
            <meta name="msapplication-TileColor" content="#ffffff">
            <meta name="msapplication-tap-highlight" content="no">
            <meta name="msapplication-starturl" content="/">

            <meta charset="UTF-8">
            <meta name="mobile-web-app-capable" content="yes">
            <meta name="viewport" content="width=device-width">
            <meta name="apple-mobile-web-app-capable" content="yes">
            <meta name="apple-mobile-web-app-status-bar-style" content="black">

            <link rel="apple-touch-icon" sizes="180x180" href="/public/assets/icons/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/public/assets/icons/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/public/assets/icons/favicon-16x16.png">
            <link rel="mask-icon" href="/public/assets/icons/safari-pinned-tab.svg" color="#848d9c">
            <link rel="shortcut icon" href="/public/assets/icons/favicon.ico">
            <link rel="icon" type="image/x-icon" href="/public/assets/icons/favicon.ico">

            ${preload}

            <link rel="manifest" href="/public/assets/manifest.json">

            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-2048-2732.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-2732-2048.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-1668-2388.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-2388-1668.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-1668-2224.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-2224-1668.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-1536-2048.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-2048-1536.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-1242-2688.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-2688-1242.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-1125-2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-2436-1125.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-828-1792.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-1792-828.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-1242-2208.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-2208-1242.png" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-750-1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-1334-750.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-640-1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
            <link rel="apple-touch-startup-image" href="/public/assets/splash/apple-splash-1136-640.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)">

            ${meta.siteConfigurations.gtagId.length ? `
                <!-- Global site tag (gtag.js) - Google Analytics -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=${meta.siteConfigurations.gtagId}"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${meta.siteConfigurations.gtagId}');
                </script>
            ` : ''}
            ${meta.siteConfigurations.adsenseId.length ? `
                <script data-ad-client="${meta.siteConfigurations.adsenseId}" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            ` : ''}
            <script type="application/ld+json">
                { 
                    "@context": "https://schema.org", 
                    "@type": "BlogPosting",
                    "headline": "${article.title}",
                    "description": "${article.description}",
                    "datePublished": "${new Date((article.published as any).seconds * 1000).toISOString()}",
                    "dateCreated": "${new Date((article.created as any).seconds * 1000).toISOString()}",
                    "dateModified": "${new Date((article.edited as any).seconds * 1000).toISOString()}",
                    "mainEntityOfPage": "${meta.siteConfigurations.domainName}",
                    "image": [
                        ${generateArticleImageUrls(meta, article)}
                    ],
                    "author": {
                        "@type": "Person",
                        "name": "${author.displayName}",
                        "image": "${author.photoURL.includes('/storage/') ? meta.siteConfigurations.domainName + author.photoURL : author.photoURL}",
                        "email": "${author.email}"
                    },
                    "editor": {
                        "@type": "Person",
                        "name": "${author.displayName}",
                        "image": "${author.photoURL.includes('/storage/') ? meta.siteConfigurations.domainName + author.photoURL : author.photoURL}",
                        "email": "${author.email}"
                    },
                    "publisher": {
                        "@type": "Person",
                        "name": "${author.displayName}",
                        "image": "${author.photoURL.includes('/storage/') ? meta.siteConfigurations.domainName + author.photoURL : author.photoURL}",
                        "email": "${author.email}"
                    },
                    "url": "${meta.siteConfigurations.domainName}${articleSlug}${article.slug}",
                    "articleBody": "${generatedContent.replace(/"/g, "'")}"
                }
            </script>
            ${styles}
        </head>
        <body>
            ${header}
            <div class="main-container">
                <article class="container">
                    <div class="post-top">
                        <h1>${article.title}</h1>
                        <p class="text">${article.description}</p>
                        <div class="post-meta" id="post-meta-top">
                            <div>
                                <img src="${getImageUrl(meta, author.photoURL)}" alt="${author.displayName}" class="author-image" width="40px" height="40px">
                                <p class="author-name">${author.displayName}</p>
                            </div>
                            <p class="published"><i class="icon-edit"></i>${transformTimestampForUser(article.edited)}</p>
                        </div>
                    </div>
                    <div class="post-container">
                        ${generatedContent}
                    </div>
                    <div class="post-top">
                        <div class="post-meta">
                            <div>
                                <img src="${getImageUrl(meta, author.photoURL)}" alt="${author.displayName}" class="author-image" width="40px" height="40px">
                                <p class="author-name">${author.displayName}</p>
                            </div>
                            <p class="published"><i class="icon-clock"></i>${transformTimestamp(meta, article.published)}</p>
                        </div>
                    </div>
                </article>
            </div>
            <div id="disqus_thread"></div>
            ${relatedArticles.length ? `
                <div class="related-articles-container">
                    <h2 class="related-article-title">${translateService(meta.siteConfigurations.language, 'relatedArticles')}</h2>
                    <div class="related-articles">${relatedArticlesContent}</div>
                </div>` 
            : ''}
            <div class="category-container post-category-container">
                <h2>${translateService(meta.siteConfigurations.language, 'allCategories')}</h2>
                <div class="categories">
                    ${categories}
                </div>
            </div>
            ${footer}
        </body>
        ${scripts}
        <script>
            function manageCommunity() {
                document.removeEventListener('scroll', findCommunityElement);
                var disqus_config = function () {
                    this.page.url = "${meta.siteConfigurations.domainName}${articleSlug}${article.slug}";
                    this.page.identifier = "${article.slug}";
                };
                ${meta.siteConfigurations.disqusId.length ? `(function() {
                    var d = document, s = d.createElement('script');
                    s.src = "${meta.siteConfigurations.disqusId}";
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();` : ''};
            }
            document.addEventListener('scroll', findCommunityElement = function(e) {
                const el = document.getElementById('disqus_thread');
                const isWithinView = isScrolledIntoView(el);
                if(isWithinView) manageCommunity();
            });
        </script>
        </html>
    `
}