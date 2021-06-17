export interface Reaction {
    uid: string;
    type: string;
    docId: string;
    created: Date;
    html?: string;
    reaction?: string;
    articleId?: string;
    authorDisplayName?: string;
    authorPhotoUrl?: string;
}