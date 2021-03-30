import { useEffect } from 'react'
import './homepage.component.scss'
import Directory from '../../components/directory/directory.component'
import { fetchShopCollectionStart } from '../../store/action/shop/shop-action'
import { connect } from 'react-redux'

const HomePage = ({ fetchCollectionStart }) => {

  useEffect(() => {
    fetchCollectionStart()
  }, [fetchCollectionStart])
  return (
    <div className='container mx-auto'>
      <Directory />
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchShopCollectionStart())
})
export default connect(null, mapDispatchToProps)(HomePage)
