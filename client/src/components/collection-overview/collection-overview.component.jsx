import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { ShopContext } from '../../provider/shop/shop-provider'
import Spinner from '../spinner/spinner.component'

const CollectionOverview = () => {
  return (
    <div className='container-fluid'>
      <div className='row mt-4'>
        <ShopContext.Consumer>
          {
            ({ state }) => {
              const { sections, isFetching } = state
              if (isFetching) return <Spinner isLoading
                                              noBackdrop />
              else {
                return Object.values(sections || {}).map(({ id, ...rest }) => (
                  <div key={id}
                       className='col-md-12 mb-4'>
                    <CollectionPreview {...rest} />
                  </div>
                ))
              }
            }
          }
        </ShopContext.Consumer>
      </div>
    </div>
  )
}

// const mapStateToProps = createStructuredSelector({
//   sections: selectDirectorySection,
// })

export default CollectionOverview
