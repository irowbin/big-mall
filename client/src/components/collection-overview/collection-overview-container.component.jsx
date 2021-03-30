import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsFetching } from '../../store/selector/shop/shop-selector'
import CollectionOverview from './collection-overview.component'
import { connect } from 'react-redux'
import WithSpinner from '../with-spinner/with-spinner.component'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
})

const collectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview)
export default collectionOverviewContainer
