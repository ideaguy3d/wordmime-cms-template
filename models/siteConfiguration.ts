export interface SiteConfiguration {
    primaryColor: string;
    accentColor: string;
    siteName: string;
    siteTitle: string;
    siteDescription: string;
    domainName: string;
    startYear: string;
    language: string;
    gtagId?: string;
    adsenseId?: string;
    disqusId?: string;
    twitterUrl?: string;
    facebookUrl?: string;
    emailUrl?: string;
    adminEmail?: string;
    adminEmailPassword?: string;
    youtubeUrl?: string;
    pinterestUrl: string;
    instagramUrl?: string;
    sw?: string;
    defaultExternalUrl?: string;
    defaultExternalTitle?: string;
    storageName?: string;
}