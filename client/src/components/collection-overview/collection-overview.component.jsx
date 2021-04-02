import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { useContext } from 'react'
import { ShopContext } from '../../provider/shop/shop-provider'

const CollectionOverview = () => {
  const { state } = useContext(ShopContext)
  const { sections } = state
  return (
    <div className='container-fluid'>
      <div className='row mt-4'>
        {Object.values(sections || {}).map(({ id, ...rest }) => (
          <div key={id}
               className='col-md-12 mb-4'>
            <CollectionPreview {...rest} />
          </div>
        ))}
      </div>
    </div>
  )
}

// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySection,
// })

export default CollectionOverview
