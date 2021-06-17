import { db } from '../connection';
import { SiteConfiguration, Meta } from '../../../models';
import { Categories } from '../../../models/meta';

/**
 * Gets site meta
 */
export async function getMeta() {
    const siteConfigurations: any = await db.collection("meta").doc("siteConfigurations").get();
    const categories: any = await db.collection("meta").doc("categories").get();
    const siteConfigurationsData: SiteConfiguration = siteConfigurations.data();
    const categoriesData: Categories = categories.data();
    return {
        siteConfigurations: siteConfigurationsData,
        categories: categoriesData
    } as Meta;
}