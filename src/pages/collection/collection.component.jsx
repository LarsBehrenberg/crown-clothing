import React from 'react'
import { connect } from 'react-redux'

// Utils
import { selectShopCollectionById } from '../../redux/shop/shop.selectors'

// Components
import CollectionItem from '../../components/collection-item/collection-item.component'

// Styles
import './collection.styles.scss'

const CollectionPage = ({ collection }) => {
  const { items, title } = collection
  return (
    <div className="collection-page">
      {console.log(collection)}
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollectionById(ownProps.match.params.collectionId)(
    state
  ),
})

export default connect(mapStateToProps)(CollectionPage)
