
import { getAllArticles, getMeta } from '../../db';
import { Request, Response } from 'express';  
import * as RSS from 'rss';
import { translateService } from '../../web/utils/helpers';

/**
 * Handle generateRSS -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function generateRSSHandler(request: Request, response: Response) {
    const meta = await getMeta();
    const articles = await getAllArticles();
    const articleSlug = translateService(meta.siteConfigurations.language, 'articleSlug');
    const feedOptions = {
        title: meta.siteConfigurations.siteTitle,
        description: meta.siteConfigurations.siteDescription,
        feed_url: meta.siteConfigurations.domainName + '/rss/feed',
        //site_url: meta.siteConfigurations.domainName,
        managingEditor: meta.siteConfigurations.emailUrl,
        webMaster: meta.siteConfigurations.emailUrl,
        copyright: meta.siteConfigurations.siteTitle,
        language: meta.siteConfigurations.language,
        categories: meta.categories.articleCategories,
    }
    const feed = new RSS(feedOptions);
    articles.forEach(async (article) => {
        const itemOptions = {
            title:  article.title,
            description: `<img src='${article.articleImage}'><p>${article.description}</p>`,
            url: meta.siteConfigurations.domainName + articleSlug + article.slug,
            categories: article.categories,
            date: new Date((article.published as any).seconds * 1000), 
        }
        feed.item(itemOptions);
    });
    const xml = feed.xml();
    response.header('Content-Type', 'application/xml');
    response.send(xml);
}