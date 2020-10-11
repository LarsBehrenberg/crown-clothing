import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// Components
import CollectionPreview from '../collection-preview/collection-preview.component'

// Styles
import './collections-overview.styles.scss'

// Utils
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({ collections }) => (
  <>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
