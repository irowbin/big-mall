import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoaded } from '../../store/selector/shop/shop-selector'
import Collection from '../collection/collection.component'
import { connect } from 'react-redux'
import WithSpinner from '../with-spinner/with-spinner.component'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
})

const collectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection)
export default collectionContainer
