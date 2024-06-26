import { View, FlatList } from 'react-native';
import products from '@/assets/data/products';
import ProductItemList from '@/src/components/ProductListItem';




export default function MenuScreen() {
  return (
    <FlatList
    data={products} 
    renderItem={({item})=>  <ProductItemList product={item} />}
    numColumns={2}
    contentContainerStyle={{gap:10, padding:10}}
    columnWrapperStyle={{gap:10}}
    />
  );
}
