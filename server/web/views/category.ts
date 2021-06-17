import { 
    articleCardFactory, 
    categoryFactory, 
    generateCss, 
    generateFooter, 
    generateHeader, 
    generatePreload, 
    generateScripts,
    generateListItems
} from '../utils/factories';
import { Article, Meta } from '../../../models';
import { translateService } from '../utils/helpers';

export const categoryView = (meta: Meta, articles: Article[], category: string, slug: string) => {
    const cards = articleCardFactory(meta, articles);
    const categories = categoryFactory(meta, meta.categories.articleCategories);
    const title = category + translateService(meta.siteConfigurations.language, 'categoryPageTitle');
    const description = translateService(meta.siteConfigurations.language, 'categoryPageDesc') + category;
    const url = meta.siteConfigurations.domainName + translateService(meta.siteConfigurations.language, 'categoryPageSlug') + slug;
    const header = generateHeader(meta);
    const footer = generateFooter(meta);
    const scripts = generateScripts();
    const styles = generateCss();
    const preload = generatePreload();
    const listItems = generateListItems(meta, articles);
    return `<!doctype html>
        <html lang="en">
        <head>
    
            <title>${title}</title>
            <meta property="og:title" content="${title}">
            <meta property="og:site_name" content="${meta.siteConfigurations.siteName}">
            <meta property="og:type" content="website">
            <meta property="og:url" content="${url}">
            <meta property="og:description" content="${description}">
            <meta property="og:image" content="${meta.siteConfigurations.domainName + '/public/assets/images/og.jpg'}" />
    
            <meta name="description" content="${description}">
            <meta name="theme-color" content="${meta.siteConfigurations.primaryColor}">
            <meta name="application-name" content="${meta.siteConfigurations.siteName}">
            <meta name="apple-mobile-web-app-title" content="${meta.siteConfigurations.siteTitle}">
    
            <link rel="canonical" href="${url}" />
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
            <script type="application/ld+json">
                {
                    "@context" : "http://schema.org",
                    "@type": "CollectionPage",
                    "name": "${title}",
                    "url": "${url}",
                    "description": "${description}",
                    "image": "${meta.siteConfigurations.domainName + '/public/images/og.jpg'}",
                    "mainEntity" : {
                        "@type":"ItemList",
                        "itemListElement":[${listItems}]
                    }
                }
            </script>
            ${styles}
        </head>
        <body>
            ${header}
            <div class="main-container">
                <div class="container">
                    <h1 style="text-align: center;">${title}</h1>
                    <br>
                    <p class="page-description">${description}.</p>
                    <br>
                    <div class="posts-container">
                        <div class="cards" id="cards">
                            ${cards}
                        </div>
                    </div>
                    <div class="category-container">
                        <h2>${translateService(meta.siteConfigurations.language, 'allCategories')}</h2>
                        <div class="categories">
                            ${categories}
                        </div>
                    </div>
                </div>
            </div>
            ${footer}
        </body>
        ${scripts}
        </html>
    `
}