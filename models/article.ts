import { Reaction } from ".";

export interface Article {
    title: string;
    slug: string;
    articleImage: string;
    description: string;
    published: Date;
    edited: Date;
    created: Date;
    authorUID: string;
    categories: string[];
    content: Content[];
    docId?: string;
    relatedArticles?: string[];
    reactions?: Reaction[];
    sponsorDocId?: string;
    externalLinkUrl?: string;
    externalLinkTitle?: string;
}

export interface Content {
    type: "heading" | "text" | "image" | "ad";
    contents: string;
    description?: string;
    title?: string;
    caption?: string;
}