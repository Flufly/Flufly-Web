// var time = new Date().getTime();
//      $(document.body).bind("mousemove keypress", function(e) {
//          time = new Date().getTime();
//      });
//
//      function refresh() {
//          if(new Date().getTime() - time >= 1  )
//              window.location.reload(true);
//          else
//              setTimeout(refresh, 10000);
//      }
//
//      setTimeout(refresh, 10000); <!-- to refresh, still could be improved -->


// var coinName = [];
// var priceInUsd = [];
// var symbol = [];
// var percentChanceHour = [];
// var percentChanceDay = [];
// var percentChanceWeek = [];
// var hour;
$(document).ready(function(){
  $.ajax({
    url:"https://api.coinmarketcap.com/v1/ticker/?limit=10"
  }).done(function(coin){
    // for (var i = 0; i < 10; i++) {
    //   coinName[i]=coin[i].name;
    //   priceInUsd[i]=coin[i].price_usd;
    //   symbol[i]=coin[i].symbol;
    //   percentChanceHour[i]=coin[i].percent_change_1h;
    //   percentChanceDay[i]=coin[i].percent_change_24h;
    //   percentChanceWeek[i]=coin[i].percent_change_7d;
    // }

    $.each(coin,function(index,coin){ // for each would

      $('#coins').append(`
        <div class="round alert  alert-secondary"> <!-- Div Start for Coin -->
          <div class="row">
            <div class="col">
              <img src="img/coin${coin.rank}.png" class="float-left">
            </div>
            <div class="col">
              <h4 class="text-info">${coin.symbol}</h4><br>${coin.symbol}&nbsp;|&nbsp;${coin.name}
              </div>
            <div class="col">
              <div class="col">
                <span class="test badge badge-secondary btn-block">1h &nbsp; : &nbsp;<span id="value1H${coin.rank}"> ${coin.percent_change_1h}</span></span><br>
                <span class="test badge badge-secondary btn-block">24h : &nbsp; <span id="value24H${coin.rank}"> ${coin.percent_change_24h}</span></span><br>
                <span class="test badge badge-secondary btn-block">7d &nbsp; : &nbsp; <span id="value7D${coin.rank}"> ${coin.percent_change_7d}</span></span><br>
              </div>
            </div>
            <div class="col"><center>
              <h1><span class="inline-block text-dark">$&nbsp;${coin.price_usd}</span></h1>
              </center>
            </div>
            <div class="col badge ">
            <button type="button" class="round btn btn-info">Notify me !</button><br><br>
            <p>updates coming soon</p>
            </div>
          </div>
        </div> <!-- Coin with Index 0 -->
      `)
    });
    // Styling based on condition
    for (var i = 1; i <= 10; i++) {
      // For 1H
      if (document.getElementById("value1H"+[i]).innerText < 0) {
        document.getElementById("value1H"+[i]).style.color="#ff0000"
      }
      else if (document.getElementById("value1H"+[i]).innerText > 0) {
        document.getElementById('value1H'+[i]).style.color="#00ff00"
      }
      // For 24H
      if (document.getElementById("value24H"+[i]).innerText < 0) {
        document.getElementById("value24H"+[i]).style.color="#ff0000"
      }
      else if (document.getElementById("value24H"+[i]).innerText > 0) {
        document.getElementById('value24H'+[i]).style.color="#00ff00"
      }
      // For 7D
      if (document.getElementById("value7D"+[i]).innerText < 0) {
        document.getElementById("value7D"+[i]).style.color="#ff0000"
      }
      else if (document.getElementById("value7D"+[i]).innerText > 0) {
        document.getElementById('value7D'+[i]).style.color="#00ff00"
      }
    }
  });
});




// console.log(coinName);
// console.log(priceInUsd);
// console.log(symbol);
// console.log(percentChanceHour);
// console.log(percentChanceDay);
// console.log(percentChanceWeek);
