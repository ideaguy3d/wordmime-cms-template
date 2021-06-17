export interface Store {
    storeItems: StoreItem[]
}

export interface StoreItem {
    title: string;
    slug: string;
    itemImage: string;
    images: string[];
    description: string;
    published: string;
    edited: string;
    created: string;
    html: string;
    categories: string[];
    provider: string;
    brand: string;
}