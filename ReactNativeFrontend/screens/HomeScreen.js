import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import axios from 'axios';

function HomeScreen({ navigation }) {
  const [stockData, setStockData] = useState([]);
  const [stockName, setStockName] = useState('Microsoft'); // Initial stock name to search

  useEffect(() => {
    // Define your Alpha Vantage API key
    const apiKey = '4QWPCEJLI7T2K16Z';

    // Create a mapping of stock names to symbols (you can extend this mapping)
    const stockMapping = {
      'Microsoft': 'MSFT',
      'Apple': 'AAPL',
      // Add more mappings as needed
    };

    // Get the symbol based on the stock name
    const symbol = stockMapping[stockName];

    // Make a GET request to Alpha Vantage's Time Series Intraday endpoint using the symbol
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`
      )
      .then((response) => {
        // Log the API response data to the console
        // console.log('Alpha Vantage Data:', response.data);
        // Set the stock data in state
        setStockData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [stockName]);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        /> */}
        <Text>Search for stock by name:</Text>
        <TextInput
          value={stockName}
          onChangeText={(text) => setStockName(text)}
          placeholder="Enter stock name"
        />
        {stockData && (
          <Text>Stock Data: {JSON.stringify(stockData)}</Text>
        )}
      </View>
    </ScrollView>

  );
}

export default HomeScreen;