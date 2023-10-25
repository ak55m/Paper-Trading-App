// import React from 'react';
// import { View, Text } from 'react-native';

// function WatchlistScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Watchlist Screen!!</Text>
//     </View>
//   );
// }

// export default WatchlistScreen;

// This code is for the watchlist
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


function WatchlistScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Mapping object for stock symbols to stock names
  const stockNameMapping = {
    AAPL: 'Apple Inc',
    TSLA: 'Tesla Inc',
    MSFT: 'Microsoft Corp',
    // Add more mappings as needed
  };

  const handleSearch = () => {
    if (searchQuery) {
      setLoading(true);

      // Make a GET request to your Django backend API to fetch stock data
      axios.get(`http://localhost:8000/api/v1.0/user/stocksearch/?query=${searchQuery}`)
        .then((response) => {
          // Add the received stock data to the state
          console.log('price:', response.data);

          if (response.data["bars.h"]) {
            const symbol = searchQuery;
            const name = stockNameMapping[symbol] || symbol; // Use the mapping or the symbol if no mapping found
            setStockData([{
              symbol: searchQuery,
              name,
              price: response.data["bars.h"].toString(), // Assuming this is the price
              priceChange: "+100", // Placeholder
              percentageChange: "(10%)", // Placeholder
              multiplier: "2x", // Placeholder
              unitPrice: "$500.00" // Placeholder
            }]);
          }
        })
        .catch((error) => {
          console.error('Error fetching stock data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // Listen for the "Submit" event when Enter is pressed
  const handleSearchSubmit = () => {
    handleSearch();
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Searchbar
        placeholder="Search for stock"
        onChangeText={(query) => setSearchQuery(query)}
        value={searchQuery}
        style={{
          elevation: 0,
          backgroundColor: '#147EFB10',
          margin: 8,
          borderRadius: 8,
        }}
        onIconPress={handleSearchSubmit} // Trigger the search when the search icon is pressed
        onSubmitEditing={handleSearchSubmit} // Trigger the search when Enter is pressed
      />
      {loading ? (
        <ActivityIndicator size="large" color="#147EFB" style={{ flex: 1, justifyContent: 'center' }} />
      ) : (
          <FlatList
            data={stockData}
            keyExtractor={(item) => item.symbol}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  {/* Placeholder for Logo - You can replace with an actual logo */}
                  <Ionicons name="logo-microsoft" size={24} color="grey" style={{ marginRight: 10 }} />
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text>{item.multiplier} • {item.unitPrice}</Text>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${item.price}</Text>
                  <Text style={{ color: item.priceChange.startsWith('+') ? 'green' : 'red' }}>
                    {item.priceChange} {item.percentageChange}
                  </Text>
                </View>
              </View>

              
            )}
          />

          
      )}
    </View>
  );
}

export default WatchlistScreen;







//  api_key:  CKVXBYMXJF00Y5IC813A
// api_secret:  GN5bcfIsFdNjpu1lQaDXeQiKoyg3VFIXRqbT5sbW