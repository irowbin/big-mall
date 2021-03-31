import MenuItem from '../menu-items/menu-item.component'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection } from '../../store/selector/shop/shop-selector'
import { connect } from 'react-redux'

const Directory = ({ sections }) => (
  <div className="row mt-5">
    {sections.map(({ id, url, ...rest }, index) => (
      <div key={id} className={`mb-4 ${index > 2 ? 'col-md-6' : 'col-md-4'}`}>
        <div className="card" style={{ height: '330px' }}>
          <img
            className="card-img"
            src={url}
            alt="Bologna"
            style={{ height: '100%' }}
          />
          <MenuItem key={id} {...rest} />
        </div>
      </div>
    ))}
  </div>
)
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
})
export default connect(mapStateToProps)(Directory)
