import {createSelector} from 'reselect'

const shopSelect = state => state.shop

export const selectDirectorySection = createSelector([shopSelect], directory=> Object.values(directory.sections).reverse())

export const  selectIsFetching = createSelector(
    [shopSelect],
    shop =>shop.isFetching
)
export const  selectErrorMessage = createSelector(
    [shopSelect],
    shop =>shop.errorMessage
)

export const  selectIsCollectionLoaded = createSelector(
    [selectDirectorySection],
    shop =>shop.some(s=>s)
)
