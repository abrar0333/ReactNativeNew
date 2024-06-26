import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Product } from '@/assets/types';


export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';


type ProductItemListProps = {
    product: Product;
}

const ProductItemList = ({product} : ProductItemListProps)=>{
  return (
    <View style={styles.container}>
    <Image 
    source={{uri: product.image || defaultPizzaImage}} 
    style={styles.image}
    resizeMode='contain'
    />
    <Text style={styles.title}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </View>
  );
}

export default ProductItemList;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius: 20,
    flex:1,
    maxWidth: "50%"
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10
  },
  price:{
    fontSize:16,
    fontWeight:"bold",
    color: Colors.light.tint
  },
  image:{
    width:"100%",
    aspectRatio:1
  }
});
