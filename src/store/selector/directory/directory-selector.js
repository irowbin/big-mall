import {createSelector} from 'reselect'

const directorySelect = state => state.directory

export const selectDirectorySection = createSelector([directorySelect], directory=> Object.values(directory.sections))
