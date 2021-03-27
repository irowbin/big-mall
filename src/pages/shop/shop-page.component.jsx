import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {Route} from "react-router-dom";
import React, {Component} from 'react'
import Collection from "../../components/collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {fetchShopCollectionAsync,} from "../../store/action/shop/shop-action";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectErrorMessage, selectIsCollectionLoaded, selectIsFetching} from "../../store/selector/shop/shop-selector";

const CollectionWithSpinner = WithSpinner(Collection)
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)

class ShopPage extends Component {
    componentDidMount() {
        const {fetchCollectionAsync} = this.props
        fetchCollectionAsync()
    }

    render() {
        const {match, isFetching, isCollectionLoaded} = this.props
        return (
            <div className='container-fluid'>
                <Route exact
                       path={`${match.path}`}
                       render={
                           (props) =>
                               <CollectionOverviewWithSpinner
                                   isLoading={isFetching}
                                   {...props}/>
                       }
                />
                {/*we use higher order component to conditionally render spinner and component.
                render prop uses the same functionalities as normal component which takes same props*/}
                <Route path={`${match.path}/:collectionId`}
                       render={(props) =>
                           <CollectionWithSpinner
                               isLoading={!isCollectionLoaded || isFetching}
                               {...props}/>}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
    errorMessage: selectErrorMessage,
    isCollectionLoaded: selectIsCollectionLoaded
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionAsync: () => dispatch(fetchShopCollectionAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
