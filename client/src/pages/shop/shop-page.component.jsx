import { Route } from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../../provider/shop/shop-provider'
import { fetchShopCollectionStart } from '../../store/action/shop/shop-action'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import Collection from '../../components/collection/collection.component'

const ShopPage = ({ match }) => {
  const {dispatch} = useContext(ShopContext)
  useEffect(() => {
   dispatch(fetchShopCollectionStart())
  }, [])

  return (
    <div className='container-fluid'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
      />
      {/*we use higher order component to conditionally render spinner and component.
                render prop uses the same functionalities as normal component which takes same props*/}
      <Route
        path={`${match.path}/:collectionId`}
        component={Collection}
      />
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchCollectionStart: () => dispatch(fetchShopCollectionStart())
// })
export default ShopPage
