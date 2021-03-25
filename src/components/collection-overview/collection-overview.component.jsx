import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect'
import {selectDirectorySection} from "../../store/selector/directory/directory-selector";

const CollectionOverview = ({sections}) => (
    <div className='container-fluid'>
        <div className="row mt-4">
            {
                sections.map(({id, ...rest}) =>
                    <div key={id}
                         className="col-md-12 mb-4">
                        <CollectionPreview  {...rest} />
                    </div>)
            }
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(CollectionOverview)
