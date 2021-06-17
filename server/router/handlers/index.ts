/**
 * Admin handlers
 */
import { loginHandler } from './admin/login';
import { updateSiteConfigurationsHandler } from './admin/updateSiteConfigurations';
import { createTempUserHandler } from './admin/createTempUser';
import { getAllUsersHandler } from './admin/getAllUsers';
import { saveMediaDataHandler } from './admin/saveMediaData';
import { getAllMediaHandler } from './admin/getAllMedia';
import { createArticleHandler } from './admin/createArticle';
import { updateArticleHandler } from './admin/updateArticle';
import { updateUserHandler } from './admin/updateUser';
import { addArticleCategoryHandler } from './admin/addArticleCategory';
import { createAdvertiserHandler } from './admin/createAdvertiser';
import { getAllAdvertisersHandler } from './admin/getAllAdvertisers';
import { getSubscribersHandler } from './admin/getSubscribers';
import { removeCategoryHandler } from './admin/removeCategory';
import { createSponsorHandler } from './admin/createSponsor';
import { getAllSponsorsHandler } from './admin/getAllSponsors';
import { updateAdvertiserHandler } from './admin/updateAdvertiser';

/**
 * Public handlers
 */
import { getAllArticlesHandler } from './getAllArticles';
import { getMetaHandler } from './getMeta';
import { getUserHandler } from './getUser';
import { generateSitemapHandler } from './generateSitemap';
import { generateRSSHandler } from './generateRSS';
import { addSubscriberHandler } from './addSubscriber';
import { addReactionHandler } from './addReaction';
import { removeReactionHandler } from './removeReaction';
import { getAllReactionsByArticleIdHandler } from './getAllReactionsByArticleId';

export {
    loginHandler,
    getAllArticlesHandler,
    updateSiteConfigurationsHandler,
    getMetaHandler,
    createTempUserHandler,
    getAllUsersHandler,
    saveMediaDataHandler,
    getAllMediaHandler,
    createArticleHandler,
    updateArticleHandler,
    addArticleCategoryHandler,
    updateUserHandler,
    getUserHandler,
    generateSitemapHandler,
    generateRSSHandler,
    createAdvertiserHandler,
    getAllAdvertisersHandler,
    getSubscribersHandler,
    addSubscriberHandler,
    removeCategoryHandler,
    addReactionHandler,
    removeReactionHandler,
    getAllReactionsByArticleIdHandler,
    createSponsorHandler,
    getAllSponsorsHandler,
    updateAdvertiserHandler
}