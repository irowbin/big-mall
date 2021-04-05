import React from 'react'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { ShopContext } from '../../provider/shop/shop-provider'
import Spinner from '../spinner/spinner.component'

const Collection = ({ match }) => {
  return (
    <div className='container'>
      <ShopContext.Consumer>
        {
          ({ state }) => {
            const { isFetching, sections } = state
            if (isFetching) return <Spinner isLoading
                                            noBakcdrop />
            if (!sections) return <div> No collections</div>
            const data = sections[match.params.collectionId]
            if (!data) return <div>No items for {match.params.collectionId} </div>
            const { title, items } = data
            return <CollectionPreview items={items}
                                      title={title} />
          }
        }
      </ShopContext.Consumer>
    </div>
  )
}
// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// })
export default Collection
