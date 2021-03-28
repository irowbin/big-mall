import {Route} from 'react-router-dom';
import React, {Component} from 'react'
import {fetchShopCollectionAsync,} from '../../store/action/shop/shop-action';
import {connect} from 'react-redux';
import collectionContainer from '../../components/collection/collection-container.component';
import collectionOverviewContainer from '../../components/collection-overview/collection-overview-container.component';

class ShopPage extends Component {
    componentDidMount() {
        const {fetchCollectionAsync} = this.props
        fetchCollectionAsync()
    }

    render() {
        const {match} = this.props
        return (
            <div className='container-fluid'>
                <Route exact
                       path={`${match.path}`}
                       component={collectionOverviewContainer}
                />
                {/*we use higher order component to conditionally render spinner and component.
                render prop uses the same functionalities as normal component which takes same props*/}
                <Route path={`${match.path}/:collectionId`}
                       component={collectionContainer}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionAsync: () => dispatch(fetchShopCollectionAsync())
})
export default connect(null, mapDispatchToProps)(ShopPage)
