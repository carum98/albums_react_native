import styled from '@emotion/native';
import React, {Component} from 'react';
import IPhoto from '../../models/IPhoto';

export interface ImageItemProps {
  item: IPhoto;
}

class ImageItem extends Component<ImageItemProps> {
  render() {
    const Container = styled.View`
      margin: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100px;
    `;

    const Images = styled.Image`
      height: 100px;
      width: 100px;
      border-radius: 10px;
    `;

    const ImageName = styled.Text`
      color: grey;
    `;

    return (
      <Container>
        <Images source={{uri: `${this.props.item.thumbnailUrl}`}} />
        <ImageName numberOfLines={2} ellipsizeMode="tail">
          {this.props.item.title}
        </ImageName>
      </Container>
    );
  }
}

export default ImageItem;
