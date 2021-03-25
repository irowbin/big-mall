import {createSelector} from 'reselect'

const selectCollections = state => state.directory

export const selectCollection = param => createSelector([selectCollections], collection => collection.sections[param])

