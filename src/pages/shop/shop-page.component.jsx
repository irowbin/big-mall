import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {Route} from "react-router-dom";
import Collection from "../../components/collection/collection.component";

const ShopPage = ({match}) => {
    return (
        <div className='container-fluid'>
            <Route  exact path={`${match.path}`} component={CollectionOverview} />
            <Route   path={`${match.path}/:collectionId`}  component={Collection} />
        </div>
    )
}
export default ShopPage
