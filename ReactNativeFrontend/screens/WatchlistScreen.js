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
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Searchbar, Snackbar } from 'react-native-paper';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToWatchlist } from '../ReduxActions/authActions.js';

function WatchlistScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [stockData, setStockData] = useState([]);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const stockList = [
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'MSFT', name: 'Microsoft Corp' },
    { symbol: 'TSLA', name: 'Tesla Inc.' },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.' },
    { symbol: 'COKE', name: 'Coca-Cola Consolidated, Inc.' },
    { symbol: 'GM', name: 'General Motors Company' },
    { symbol: 'GE', name: 'General Electric Company' },
    // your existing stockList
  ];

  const handleSearch = (query) => {
    if (query) {
      // Filter stocks based on the search query
      const filteredStocks = stockList.filter(
        (stock) => stock.name.toLowerCase().includes(query.toLowerCase())
      );
      setStockData(filteredStocks);
    } else {
      // Clear the results when the search query is empty
      setStockData([]);
    }
  };

  // const handleAddToWatchlist = (symbol) => {
  //   if (isAuthenticated) {
  //     console.log(symbol);
  //     // Dispatch the addToWatchlist action with the stock symbol
  //     dispatch(addToWatchlist(symbol));
  //     setSnackbarVisible(true);
  //   } else {
  //     // Show a snackbar or message prompting the user to log in
  //     setSnackbarVisible(true);
  //   }
  // };

  const closeSnackbar = () => {
    setSnackbarVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Searchbar
        placeholder="Search for stock"
        onChangeText={(query) => {
          setSearchQuery(query);
          handleSearch(query);
        }}
        value={searchQuery}
        style={{
          elevation: 5,
          backgroundColor: '#147EFB10',
          margin: 8,
          borderRadius: 8,
        }}
        onIconPress={() => handleSearch(searchQuery)}
      />

      {searchQuery && (
        <FlatList
          data={stockData}
          keyExtractor={(item) => item.symbol}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#E6E5DB',
              }}
            >
              <TouchableOpacity
                onPress={() => handleAddToWatchlist(item.symbol)}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <Ionicons name="add-circle-outline" size={24} color="black" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
              </TouchableOpacity>
              <Ionicons name="chevron-forward" size={24} color="#147EFB" />
            </View>
          )}
        />
      )}

      {/* Snackbar to show messages */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        style={{
          position: 'absolute',
          bottom: 150, // Adjust the bottom position as needed
          width: '95%',
          alignSelf: 'center', // Center horizontally
        }}
        action={{
          icon: 'close',
          onPress: closeSnackbar,
        }}
      >
        {/* {isAuthenticated ? 'Stock added to watchlist!' : 'Please log in to add stocks to watchlist.'} */}
      </Snackbar>
    </SafeAreaView>
  );
}

export default WatchlistScreen;






//  api_key:  CKVXBYMXJF00Y5IC813A
// api_secret:  GN5bcfIsFdNjpu1lQaDXeQiKoyg3VFIXRqbT5sbW