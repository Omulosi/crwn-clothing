import { createSelector } from "reselect";
import memoize from "lodash.memoize";
import { compose } from "redux";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    console.log(collections);
    console.log(collectionUrlParam);
    return collections ? collections[collectionUrlParam] : null;
  })
);
