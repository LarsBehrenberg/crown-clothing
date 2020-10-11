import React from 'react'
import { connect } from 'react-redux'

// Utils
import { selectShopCollectionById } from '../../redux/shop/shop.selectors'

// Components
import CollectionItem from '../../components/collection-item/collection-item.component'

// Styles
import './collection.styles.scss'

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    {console.log(collection)}
    <h2>Collection page</h2>
    {collection.items.map((item) => (
      <CollectionItem key={item.id} item={item} />
    ))}
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollectionById(ownProps.match.params.collectionId)(
    state
  ),
})

export default connect(mapStateToProps)(CollectionPage)
