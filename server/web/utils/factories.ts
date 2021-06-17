import { 
    Article, Meta, Sponsor 
} from '../../../models';
import { Content } from '../../../models/article';
import { slug, transformTimestamp, translateService } from './helpers';
import { css } from './css';


function categoryFactory(meta: Meta, categories: string[]) {
    let html = ``;
    const categoryPageSlug = translateService(meta.siteConfigurations.language, 'categoryPageSlug');
    categories.forEach(category => {
        html = html + `<a class="category" href="${categoryPageSlug}${slug(category)}" title="${category}">${category}</a>`;
    });
    return html;
}

function articleCardFactory(meta: Meta, articles: Article[]) {
    let html = "";
    const articleSlug = translateService(meta.siteConfigurations.language, 'articleSlug');
    articles.forEach(article => {
        html = html +   `<article class="article-card">
                            <a href="${articleSlug}${article.slug}">
                                <img loading="lazy" src="${getImageUrl(meta, article.articleImage)}" alt="${article.title}" class="article-card-image">
                            </a>
                            <a href="${articleSlug}${article.slug}">
                                <h2 class="article-card-title">${article.title}</h2>
                            </a>
                            <div class="meta">
                                <p class="published"><i class="icon-clock"></i> ${transformTimestamp(meta, article.published)}</p>
                            </div>
                            <div class="article-card-categories">
                                ${categoryFactory(meta, article.categories)}
                            </div>
                            <p class="article-card-description text">${article.description}</p>
                            <div class="read-more-area">
                                <a href="${articleSlug}${article.slug}" class="button read-more">${translateService(meta.siteConfigurations.language, 'readMore')}</a>
                            </div>
                        </article>`;
    })
    return html 
}

function generateSponsor(sponsorData: Sponsor) {
  return `
  <div id="sponsor">
    <h2>${sponsorData.title}</h2>
    <div id="sponsor-info">
        <img width="395px" alt="${sponsorData.title}" height="303px" loading="lazy" src="${sponsorData.imageSrc}">
        <p class="text">${sponsorData.html}</p>
    </div>
  </div>
  `
}

function generateListItems(meta: Meta, articles: Article[]) {
  let html = '';
  const articleSlug = translateService(meta.siteConfigurations.language, 'articleSlug');
  for(let i = 0; i < articles.length; i++) {
    let article = articles[i];
    let colon = i < articles.length - 1 ? ',' : '';
    html = html + `{
      "@type":"ListItem",
      "position":${i+1},
      "url": "${meta.siteConfigurations.domainName}${articleSlug}${article.slug}"
    }` + colon;
  }
  return html;
}

function generateArticleImageUrls(meta, article: Article) {
  let og = getImageUrl(meta, article.articleImage);
  let html = '"' + (og) + '"';
  article.content.forEach(content => {
    if(content.type === 'image') {
        const url = getImageUrl(meta, content.contents);
        html = html + ', "' + (url) + '"';
    }
  });
  return html;
}

function getImageUrl(meta: Meta, downloadURL: string) {
  if(downloadURL.includes('firebasestorage')) return downloadURL;
  else {
    const url = downloadURL.charAt(0) == '/' ? downloadURL : ('/' + downloadURL);
    return "https://storage.googleapis.com/" + meta.siteConfigurations.storageName + url;
  }
}

function generateHeader(meta: Meta, externalUrl?: string, externalTitle?: string) {
    const blogTitle = translateService(meta.siteConfigurations.language, 'blogTitle');
    return  `<header>
                <div id="left">
                  <a href="/" title="${meta.siteConfigurations.siteName}" rel="noopener" id="logo-text" class="desktop">${meta.siteConfigurations.siteName}</a>
                  <i class="icon-menu social-icon mobile" id="hamburger" onclick="toggleMobileMenu()"></i>

                  <nav class="nav desktop">
                  </nav>
                  <div class="mobile hide" id="mobile-nav-container">
                    <nav class="nav-menu">
                    </nav>
                  </div>
                </div>
                ${externalUrl && externalTitle ? 
                    `<a href="${externalUrl}" target="_blank" class="link nav-item" rel="noopener" title="${externalTitle}" article="All" style="background-color: #f3f3f3;padding: 20px 0px 20px 15px;">${externalTitle} <i class="icon-right-open-big social-icon"></i></a>`
                  : 
                    `${meta.siteConfigurations.defaultExternalTitle && meta.siteConfigurations.defaultExternalUrl ? 
                      `<a href="${meta.siteConfigurations.defaultExternalUrl}" target="_blank" class="link nav-item" rel="noopener" title="${meta.siteConfigurations.defaultExternalTitle}" article="All" style="background-color: #f3f3f3;padding: 20px 0px 20px 15px;">${meta.siteConfigurations.defaultExternalTitle} <i class="icon-right-open-big social-icon"></i></a>` 
                    : ''}
                  `}

            </header>`
}

function generateFooter(meta: Meta, imgUrl?: string, imgTitle?: string, externalUrl?: string, externalTitle?: string) {
  return  `<footer>
                <div class='subscribe'>
                  ${imgUrl ? `<img width="120px" height="120px" src="${imgUrl}" alt="${imgTitle}" title="${imgTitle}" style="width: 120px; border-radius: 50%; margin-bottom: 15px;">` : ''}
                  <h3 style="font-size: 30px; color: white; margin-bottom: 15px">${meta.siteConfigurations.siteName}</h3>
                  <p style="font-size: 18px">${meta.siteConfigurations.siteDescription}</p>
                  ${externalUrl && externalTitle ? 
                    `<a href='${externalUrl}' class='button read-more' target="_blank" rel="noreferrer" style='padding: 10px 20px;'>${externalTitle}</a>`
                  : 
                    `${meta.siteConfigurations.defaultExternalTitle && meta.siteConfigurations.defaultExternalUrl ? 
                      `<a href='${meta.siteConfigurations.defaultExternalUrl}' class='button read-more' target="_blank" rel="noreferrer" style='padding: 10px 20px;'>${meta.siteConfigurations.defaultExternalTitle}</a>` 
                    : ''}
                  `}
                </div>
                <div class='icons'>
                    ${meta.siteConfigurations.twitterUrl ? `
                        <a href="${meta.siteConfigurations.twitterUrl}" target="_blank" rel="noreferrer" title="${meta.siteConfigurations.siteTitle} Twitter">
                            <i class="icon-twitter social-icon"></i>
                        </a>` : ''
                    }
                    ${meta.siteConfigurations.youtubeUrl ? `
                        <a href="${meta.siteConfigurations.youtubeUrl}" target="_blank" rel="noreferrer" title="${meta.siteConfigurations.siteTitle} Youtube">
                            <i class="icon-youtube social-icon"></i>
                        </a>` : ''
                    }
                    ${meta.siteConfigurations.pinterestUrl ? `
                        <a href="${meta.siteConfigurations.pinterestUrl}" target="_blank" rel="noreferrer" title="${meta.siteConfigurations.siteTitle} Pinterest">
                            <i class="icon-pinterest social-icon"></i>
                        </a>` : ''
                    }
                    ${meta.siteConfigurations.instagramUrl ? `
                        <a href="${meta.siteConfigurations.instagramUrl}" target="_blank" rel="noreferrer" title="${meta.siteConfigurations.siteTitle} Instagram" >
                            <i class="icon-instagram social-icon"></i>
                        </a>` : ''
                    }
                    ${meta.siteConfigurations.facebookUrl ? `
                        <a href="${meta.siteConfigurations.facebookUrl}" target="_blank" rel="noreferrer" title="${meta.siteConfigurations.siteTitle} Facebook">
                            <i class="icon-facebook social-icon"></i>
                        </a>` : ''
                    }
                    ${meta.siteConfigurations.emailUrl ? `
                        <a href="mailto:${meta.siteConfigurations.emailUrl}" title="${meta.siteConfigurations.siteTitle} mail" rel="nofollow">
                            <i class="icon-mail-alt social-icon"></i>
                        </a>` : ''
                    }
                    <a href="${meta.siteConfigurations.domainName}/rss/feed" title="${meta.siteConfigurations.siteTitle} RSS Feed">
                        <i class="icon-rss social-icon"></i>
                    </a>
                </div>
            </footer>`
}

function generateSw(version) {
    const sw = `
    self.addEventListener("install", function(event) {
        self.skipWaiting();
        // console.log('WORKER: install event in progress.');
        event.waitUntil(
          /* The caches built-in is a promise-based API that helps you cache responses,
             as well as finding and deleting them.
          */
          caches
            /* You can open a cache by name, and this method returns a promise. We use
               a versioned cache name here so that we can remove old cache entries in
               one fell swoop later, when phasing out an older service worker.
            */
            .open('${version}' + 'fundamentals')
            .then(function(cache) {
              /* After the cache is opened, we can fill it with the offline fundamentals.
                 The method below will add all resources we've indicated to the cache,
                 after making HTTP requests for each of them.
              */
              return cache.addAll([
                '/'
              ]);
            })
            .then(function() {
              // console.log('WORKER: install completed');
            })
        );
      });
    
    self.addEventListener("activate", function(event) {
        /* Just like with the install event, event.waitUntil blocks activate on a promise.
           Activation will fail unless the promise is fulfilled.
        */
        // console.log('WORKER: activate event in progress.');
      
        event.waitUntil(
          caches
            /* This method returns a promise which will resolve to an array of available
               cache keys.
            */
            .keys()
            .then(function (keys) {
              // We return a promise that settles when all outdated caches are deleted.
              return Promise.all(
                keys
                  .filter(function (key) {
                    // Filter by keys that don't start with the latest version prefix.
                    return !key.startsWith('${version}');
                  })
                  .map(function (key) {
                    /* Return a promise that's fulfilled
                       when each outdated cache is deleted.
                    */
                    return caches.delete(key);
                  })
              );
            })
            .then(function() {
              // console.log('WORKER: activate completed.');
            })
        );
      });
    
    self.addEventListener("fetch", function(event) {
        // console.log('WORKER: fetch event in progress.');
      
        /* We should only cache GET requests, and deal with the rest of method in the
           client-side, by handling failed POST,PUT,PATCH,etc. requests.
        */
        if (event.request.method !== 'GET') {
          /* If we don't block the event as shown below, then the request will go to
             the network as usual.
          */
          // console.log('WORKER: fetch event ignored.', event.request.method, event.request.url);
          return;
        }
        /* Similar to event.waitUntil in that it blocks the fetch event on a promise.
           Fulfillment result will be used as the response, and rejection will end in a
           HTTP response indicating failure.
        */
        event.respondWith(
          caches
            /* This method returns a promise that resolves to a cache entry matching
               the request. Once the promise is settled, we can then provide a response
               to the fetch request.
            */
            .match(event.request)
            .then(function(cached) {
              /* Even if the response is in our cache, we go to the network as well.
                 This pattern is known for producing "eventually fresh" responses,
                 where we return cached responses immediately, and meanwhile pull
                 a network response and store that in the cache.
                 Read more:
                 https://ponyfoo.com/articles/progressive-networking-serviceworker
              */
              var networked = fetch(event.request)
                // We handle the network request with success and failure scenarios.
                .then(fetchedFromNetwork, unableToResolve)
                // We should catch errors on the fetchedFromNetwork handler as well.
                .catch(unableToResolve);
      
              /* We return the cached response immediately if there is one, and fall
                 back to waiting on the network as usual.
              */
              // console.log('WORKER: fetch event', cached ? '(cached)' : '(network)', event.request.url);
              return cached || networked;
      
              function fetchedFromNetwork(response) {
                /* We copy the response before replying to the network request.
                   This is the response that will be stored on the ServiceWorker cache.
                */
                var cacheCopy = response.clone();
      
                // console.log('WORKER: fetch response from network.', event.request.url);
      
                caches
                  // We open a cache to store the response for this request.
                  .open('${version}' + 'pages')
                  .then(function add(cache) {
                    /* We store the response for this request. It'll later become
                       available to caches.match(event.request) calls, when looking
                       for cached responses.
                    */
                    cache.put(event.request, cacheCopy);
                  })
                  .then(function() {
                    // console.log('WORKER: fetch response stored in cache.', event.request.url);
                  });
      
                // Return the response so that the promise is settled in fulfillment.
                return response;
              }
      
              /* When this method is called, it means we were unable to produce a response
                 from either the cache or the network. This is our opportunity to produce
                 a meaningful response even when all else fails. It's the last chance, so
                 you probably want to display a "Service Unavailable" view or a generic
                 error response.
              */
              function unableToResolve () {
                /* There's a couple of things we can do here.
                   - Test the Accept header and then return one of the offlineFundamentals
                     e.g: return caches.match('/some/cached/image.png')
                   - You should also consider the origin. It's easier to decide what
                     "unavailable" means for requests against your origins than for requests
                     against a third party, such as an ad provider
                   - Generate a Response programmaticaly, as shown below, and return that
                */
      
                // console.log('WORKER: fetch request failed in both cache and network.');
      
                /* Here we're creating a response programmatically. The first parameter is the
                   response body, and the second one defines the options for the response.
                */
                return new Response('<h1>Service Unavailable</h1>', {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: new Headers({
                    'Content-Type': 'text/html'
                  })
                });
              }
            })
        );
      });`
    return sw;
}

function generateScripts() {
  return  `
          <script>
            function toggleMobileMenu() {
              var element = document.getElementById("mobile-nav-container");
              element.classList.toggle("hide");
            }

            var elements = document.getElementsByClassName("link");
            var sendClickEvent = function() {
                var title = this.getAttribute("title");
                var target = this.getAttribute("href");
                var parent = this.getAttribute("article");
                gtag('event', 'link_click', {
                    event_category: parent, 
                    event_label: title, 
                    event_action: 'link_click'
                })
            };
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', sendClickEvent, false);
            }
            if('serviceWorker' in navigator) {
                navigator.serviceWorker
                    .register('/sw.js')
                    .then(registration => {
                      });
            }
            function isScrolledIntoView(el) {
                var rect = el.getBoundingClientRect();
                var elemTop = rect.top;
                var elemBottom = rect.bottom;
                isVisible = elemTop < window.innerHeight;
                return isVisible;
            }
            // Subscribe to email list
            function subscribe() {
                var http = new XMLHttpRequest();
                var url = '/addSubscriber';
                var email = document.getElementById('subscribe-email').value;
                if(email.length < 5) return;
                var body = JSON.stringify({ data: email });
                http.open('POST', url, true);
                //Send the proper header information along with the request
                http.setRequestHeader('Content-type', 'application/json');
                http.onreadystatechange = function() {
                    if(http.readyState == 4 && http.status == 200) {
                        document.getElementById('subscribe-email').value = '';
                        gtag('event', 'new_subscriber', {
                            event_category: 'email', 
                            event_label: 'New subscriber', 
                            event_action: 'new_subscriber'
                        })
                    }
                }
                http.send(body);
            }
          </script>
          `
}

function generateCss() {
  let allCss = '<style>' + css;
  allCss = allCss + '</style>';
  return allCss;
}

function generatePreload() {
  let allPreloads = '';
  allPreloads = allPreloads + '<link rel="preconnect" href="https://www.google-analytics.com">';
  return allPreloads;
}

export { 
    articleCardFactory, 
    categoryFactory, 
    generateScripts,
    generateHeader,
    generateFooter,
    generateSw,
    generateCss,
    generatePreload,
    generateSponsor,
    generateListItems,
    generateArticleImageUrls,
    getImageUrl
}