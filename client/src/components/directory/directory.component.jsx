import MenuItem from '../menu-items/menu-item.component'
import { ShopContext } from '../../provider/shop/shop-provider'
import { useContext } from 'react'
import Spinner from '../spinner/spinner.component'

const Directory = () => {
  const { state } = useContext(ShopContext)
  const { sections } = state
  if (!sections) return <Spinner isLoading={!sections} noBackdrop/>
  return (
    <div className='row mt-5'>
      {Object.values(sections)?.reverse().map(({ id, url, ...rest }, index) => (
        <div key={id}
             className={`mb-4 ${index > 2 ? 'col-md-6' : 'col-md-4'}`}>
          <div className='card'
               style={{ height: '330px' }}>
            <img
              className='card-img'
              src={url}
              alt='product'
              style={{ height: '100%' }}
            />
            <MenuItem key={id} {...rest} />
          </div>
        </div>
      ))}
    </div>
  )
}
// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySection,
// })
export default Directory
