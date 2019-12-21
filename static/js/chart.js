const seasonalData = {
    chart: {
        caption: "Seasonal Room Prices from 2019 to 2020",
        yaxisname: "Prices of rooms",
        xaxisname: "Date",
        forceaxislimits: "1",
        pixelsperpoint: "0",
        pixelsperlabel: "30",
        compactdatamode: "1",
        dataseparator: "|",
        theme: "candy"
    },
    categories: [
        { category: dateList }
    ],
    dataset: [
        {seriesname: "Median", data: medianList},
        {seriesname: "Average", data: avgList}
    ]
};

FusionCharts.ready(function() {
    var myChart = new FusionCharts({
        type: "zoomline",
        renderAt: "seasonal-chart",
        width: "44%",
        height: "290",
        dataFormat: "json",
        dataSource: seasonalData
    }).render();
});

const distributionData = {
    chart: {
        caption: "Room Type Distribution",
        showpercentvalues: "1",
        defaultcenterlabel: "Room type Distribution",
        aligncaptionwithcanvas: "0",
        captionpadding: "5",
        decimals: "1",
        plottooltext:
        "<b>$percentValue</b> of the rooms are <b>$label</b>",
        theme: "candy"
    },
    data: [
        {label: "Entire home", value: entire},
        {label: "Private room", value: private},
        {label: "Hotel room", value: hotel},
        {label: "Shared room", value: share}
    ]
};

FusionCharts.ready(function() {
    var myChart = new FusionCharts({
        type: "pie2d",
        renderAt: "distribution-chart",
        width: "22%",
        height: "230",
        dataFormat: "json",
        dataSource: distributionData
    }).render();
});

const priceData = {
    chart: {
        caption: "Price Data for Different Types",
        xaxisname: "Price range",
        yaxisname: "% Of all listings",
        captionpadding: "2",
        plottooltext:
        "<b>$dataValue</b>% of the <b>$seriesName</b>s' prices are in $label",
        theme: "candy",
        drawcrossline: "1"
    },
    categories: [{category: priceCategory.split("|").map(x=>({label:x}))}],
    dataset: [
        {seriesname: "Entire room", data: entireList.split("|").map(x=>({value:x}))},
        {seriesname: "Private room", data: privateList.split("|").map(x=>({value:x}))},
        {seriesname: "Hotel room", data: hotelList.split("|").map(x=>({value:x}))},
        {seriesname: "Shared room", data: shareList.split("|").map(x=>({value:x}))},
    ]
};

FusionCharts.ready(function() {
    var myChart = new FusionCharts({
        type: "stackedcolumn2d",
        renderAt: "price-range-chart",
        width: "22%",
        height: "230",
        dataFormat: "json",
        dataSource: priceData
    }).render();
});


const regionData = {
    chart: {
      showvalues: "0",
      caption: "Neighbourhood Listings and Prices",
      plottooltext: "Number of $seriesName listings in $label is <b>$dataValue</b>",
      showhovereffect: "1",
      yaxisname: "Number of listings",
      pYAxisMinValue: "0",
      pYAxisMaxValue: maxCount,
      theme: "candy"
    },
    categories: [{category: regionCategory.split("|").map(x=>({label:x}))}],
    dataset: [
      {seriesname: "Entire room", data: entireRegionList.split("|").map(x=>({value:x}))},
      {seriesname: "Private room", data: privateRegionList.split("|").map(x=>({value:x}))},
      {seriesname: "Hotel room", data: hotelRegionList.split("|").map(x=>({value:x}))},
      {seriesname: "Shared room", data: shareRegionList.split("|").map(x=>({value:x}))},
      {
        seriesname: "Average price",
        plottooltext: `The average price of $label is <b>$dataValue</b>`,
        renderas: "Line",
        parentYAxis: "S",
        data: regionPrice.split("|").map(x=>({value: x}))
      }
    ]
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "stackedcolumn2dlinedy",
      renderAt: "region-price-chart",
      width: "44%",
      height: "260",
      dataFormat: "json",
      dataSource: regionData
    }).render();
  });

  