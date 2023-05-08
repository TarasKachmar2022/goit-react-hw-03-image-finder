import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  ImageGalleryLi,
  ImageGalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props.item;
    return (
      <ImageGalleryLi>
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageGalleryLi>
    );
  }
}

export default ImageGalleryItem;
