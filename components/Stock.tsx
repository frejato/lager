import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import config from "../config/config.json";

export default function Stock() {
    let [fontsLoaded] = useFonts({
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Lagerförteckning</Text>
            <StockList />
        </View>
    );
}

function StockList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
            .then(response => response.json())
            .then(result => setProducts(result.data));
    }, []);

    const list = products.map((product, index) => <Text style={styles.list} key={index}>{product.name} - <Text style={styles.amount} key={index}>{product.stock}</Text> st</Text>);

    return (
        <View style={styles.base}>
            <Text style={styles.info}>Namn - Saldo</Text>
            {list}
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#412234',
        width: 300,
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 24,
        borderRadius: 10,
        marginTop: 24,
    },
    heading: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Lato_400Regular',
    },
    list: {
        fontFamily: 'Lato_400Regular',
        color: '#fff',
        fontSize: 16,
        paddingLeft: 15,
        paddingTop: 6,
    },
    info: {
        textAlign: 'center',
        fontFamily: 'Lato_400Regular',
        alignItems: 'center',
        color: '#fff',
        fontSize: 16,
        textDecorationStyle: 'solid',
        textDecorationColor: '#fff',
        textDecorationLine: 'underline',
        paddingTop: 12,
    },
    amount: {
        fontWeight: 'bold',
        color: '#ffc857',
    }
});