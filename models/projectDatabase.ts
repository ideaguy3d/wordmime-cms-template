import { 
    Advertiser, 
    Media, 
    Article, 
    Meta, 
    UserModel,
    Subscriber
} from '.';

/**
 * Project Firestore database model
 */
export interface ProjectDatabase {
    articles: Article[];
    users: UserModel[];
    meta: Meta;
    media: Media;
    advertisers: Advertiser[];
    subscribers: Subscriber[];
}