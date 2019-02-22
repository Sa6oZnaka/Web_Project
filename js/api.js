
	        $.get("https://api.coinmarketcap.com/v2/ticker/", function(data, status){
		        for(var key in data.data){
		            var coin = data.data[key];

		            if(coin.name == "Bitcoin"){
		              	var Btc_price = coin.quotes.USD.price;
		              	Btc_price = Math.floor(Btc_price*100)/100;
			    		document.getElementById("BTC_USD").innerHTML = Btc_price;
		            }
		            if(coin.name == "Ethereum"){
		  				var Eth_price = coin.quotes.USD.price;
		  				Eth_price = Math.floor(Eth_price*100)/100;
			    		document.getElementById("ETH_USD").innerHTML = Eth_price;
		            }
		        }
        	});
	        
       