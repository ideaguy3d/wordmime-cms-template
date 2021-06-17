import { SiteConfiguration } from '.';

export interface Meta {
    categories: Categories;
    siteConfigurations: SiteConfiguration;
}

export interface Categories {
    articleCategories: string[];
    storeCategories: string[];
}