import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.actions";
import {
  CollectionItemButton,
  CollectionItemContainer,
  CollectionItemFooter,
  CollectionItemImage,
  NameContainer,
  PriceContainer,
} from "./collection-items.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <CollectionItemImage className="image" imageUrl={imageUrl} />
      <CollectionItemFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionItemFooter>
      <CollectionItemButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
