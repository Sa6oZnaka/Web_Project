var Eth_price,
	Btc_price;

var Eth_change,
	Btc_change;

$.get("https://api.coinmarketcap.com/v2/ticker/", function(data, status){
	for(var key in data.data){
		var coin = data.data[key];

		if(coin.name == "Bitcoin"){
		    Btc_price = coin.quotes.USD.price;
		    Btc_price = Math.floor(Btc_price*100)/100;

		   	Btc_change = coin.quotes.USD.percent_change_24h;
		}
		if(coin.name == "Ethereum"){
		  	Eth_price = coin.quotes.USD.price;
		  	Eth_price = Math.floor(Eth_price*100)/100;

			Eth_change = coin.quotes.USD.percent_change_24h
		}
	}
});
	        

       
