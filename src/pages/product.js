import React from 'react';
import { WebView } from 'react-native-webview';


const Product = () => (
  <WebView source={{ uri: navigation.state.params.product.url }} />
);

Product.options = ({ navigation }) => ({
  title: navigation.state.params.product.title,
});

export default Product;