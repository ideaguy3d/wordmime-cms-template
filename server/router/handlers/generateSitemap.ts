
import { getAllArticles, getMeta } from '../../db';
import { Request, Response } from 'express';  
import { translateService } from '../../web/utils/helpers';
import { Article, Meta } from '../../../models';
import { getImageUrl } from '../../web/utils/factories';
const { SitemapStream, streamToPromise } = require( 'sitemap' );
const { Readable } = require( 'stream' );

/**
 * Handle generateSitemap -request
 * @param request - Express request
 * @param response  - Express response
 */
export async function generateSitemapHandler(request: Request, response: Response) {
    const meta = await getMeta();
    const articles = await getAllArticles();
    const articleSlug = translateService(meta.siteConfigurations.language, 'articleSlug');
    let urls: any = [
        { url: meta.siteConfigurations.domainName, changefreq: 'daily', priority: 1 }
    ]
    articles.forEach(article => {
        urls.push({ 
            url: meta.siteConfigurations.domainName + articleSlug + article.slug, 
            changefreq: 'daily', 
            priority: 1,
            img: generateArticleImagesForSitemap(meta, article)
        })
    })
    const stream = new SitemapStream( { hostname: meta.siteConfigurations.domainName } )
    const xml = await new Promise<any>((resolve, reject) => {
        streamToPromise(Readable.from(urls).pipe(stream)).then((data) =>
            resolve(data.toString())
        )
    });
    response.header('Content-Type', 'application/xml');
    return response.send(xml);
}

function generateArticleImagesForSitemap(meta: Meta, article: Article): ImgSchema[] {
    let allImages: ImgSchema[] = [
        {
            url: getImageUrl(meta,  article.articleImage),
            caption: article.description,
            title: article.title
        }
    ];
    article.content.forEach(content => {
        if(content.type === 'image') {
            const imgSchema: ImgSchema = {
                url: getImageUrl(meta, content.contents),
                caption: content.caption ? content.caption : content.description,
                title: content.title ? content.title : ''
            }
            allImages.push(imgSchema)
        }
    })
    return allImages;
}

export interface ImgSchema {
    url: string;
    caption: string;
    title: string;
    geoLocation?: string;
    license?: string;
}