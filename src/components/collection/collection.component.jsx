import React from 'react'
import { selectCollection } from '../../store/selector/collection/collection-selector'
import { connect } from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview.component'

const Collection = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className="container">
      <CollectionPreview items={items} title={title} />
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})
export default connect(mapStateToProps)(Collection)
