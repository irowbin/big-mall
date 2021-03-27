import {createSelector} from 'reselect'

const selectCollections = state => state.shop

export const selectCollection = param => createSelector([selectCollections], collection => collection.sections[param])

