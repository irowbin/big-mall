import { Component } from 'react'
import './homepage.component.scss'
import Directory from '../../components/directory/directory.component'
import { fetchShopCollectionStart } from '../../store/action/shop/shop-action'
import { connect } from 'react-redux'

class HomePage extends Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props
    fetchCollectionStart()
  }

  render() {
    return (
      <div className="container mx-auto">
        <Directory />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchShopCollectionStart()),
})
export default connect(null, mapDispatchToProps)(HomePage)
