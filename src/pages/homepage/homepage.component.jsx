import { useContext, useEffect } from 'react'
import './homepage.component.scss'
import Directory from '../../components/directory/directory.component'
import { ShopContext } from '../../provider/shop/shop-provider'
import { fetchShopCollectionStart } from '../../store/action/shop/shop-action'

const HomePage = () => {
  const { dispatch } = useContext(ShopContext)
  useEffect(() => {
    dispatch(fetchShopCollectionStart())
  }, [])
  return (
    <div className='container mx-auto'>
      <Directory />
    </div>
  )
}
// const mapDispatchToProps = (dispatch) => ({
//   fetchCollectionStart: () => dispatch(fetchShopCollectionStart())
// })
export default HomePage
