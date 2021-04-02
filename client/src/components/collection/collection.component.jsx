import React, { useContext, useEffect, useState } from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { ShopContext } from '../../provider/shop/shop-provider'

const Collection = ({ match }) => {
  const [collection, setCollection] = useState({ title: '', items: [] })
  const { state } = useContext(ShopContext)
  const { sections } = state
  useEffect(() => {
    if (!sections) return
    const data = sections[match.params.collectionId]
    setCollection(data)
  }, [sections, match.params.collectionId])
  const { title, items } = collection
  return (
      <div className='container'>
        <CollectionPreview items={items}
                           title={title} />
      </div>
  )
}
// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// })
export default Collection
