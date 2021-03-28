import {Component} from 'react'
import './homepage.component.scss'
import Directory from '../../components/directory/directory.component'
import {fetchShopCollectionAsync} from '../../store/action/shop/shop-action';
import {connect} from 'react-redux';

class HomePage extends Component{
    componentDidMount() {
        const {fetchCollectionAsync} = this.props
        fetchCollectionAsync()
    }

    render() {
       return (
           <div className='container mx-auto'>
               <Directory/>
           </div>
       )
   }
}
const mapDispatchToProps = dispatch => ({
    fetchCollectionAsync: () => dispatch(fetchShopCollectionAsync())
})
export default  connect(null,mapDispatchToProps)(HomePage)
