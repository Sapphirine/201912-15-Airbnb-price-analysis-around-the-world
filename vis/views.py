from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd


def read_season_data(path):
    csv_data = pd.read_csv(path) 
    date = csv_data["Date"].map(lambda x:x[2:10]).values.tolist()
    avg = csv_data["avg_price"].map(lambda x:str(x)).values.tolist()
    median = csv_data["median_price"].map(lambda x:str(x)).values.tolist()

    return date, avg, median


def read_region_data(path):
    csv_data = pd.read_csv(path) 
    region = csv_data["neighbourhood"].values.tolist()
    entire = csv_data["Entire home/apt"].map(lambda x:str(x)).values.tolist()
    hotel = csv_data["Hotel room"].map(lambda x:str(x)).values.tolist()
    private = csv_data["Private room"].map(lambda x:str(x)).values.tolist()
    share = csv_data["Shared room"].map(lambda x:str(x)).values.tolist()
    price = csv_data["price"].map(lambda x:str(x)).values.tolist()

    return region, entire, hotel, private, share, price


def map(request):
    return render(request, 'map.html')


def vis_nyc(request):
    date_list, avg_list, median_list = read_season_data('static/data/nyc_season_stat.csv')
    region_list, entire_region, hotel_region, private_region, share_region, price_region = read_region_data('static/data/nyc_region.csv')

    data = {
        "date_list": '|'.join(date_list),
        "avg_list": '|'.join(avg_list),
        "median_list": '|'.join(median_list),
        "hotel": "0.9",
        "private": "45.17",
        "entire": "51.47",
        "shared": "2.46",
        "price_category": "0-100|100-200|200-300|300-400",
        "entire_list": "6.42|24.17|11.04|3.73",
        "private_list": "39.49|8.86|0.94|0.25",
        "hotel_list": "0.11|0.46|0.13|0.12",
        "share_list": "2.27|0.24|0.05|0.02",
        "region_category": '|'.join(region_list),
        "max_count": "3800",
        "entire_region_list": '|'.join(entire_region),
        "private_region_list": '|'.join(private_region),
        "hotel_region_list": '|'.join(hotel_region),
        "share_region_list": '|'.join(share_region),
        "region_price": '|'.join(price_region),
        "city": "nyc"
    }

    return render(request, 'vis.html', data)


def vis_london(request):
    date_list, avg_list, median_list = read_season_data('static/data/london_season_stat.csv')
    region_list, entire_region, hotel_region, private_region, share_region, price_region = read_region_data('static/data/london_region.csv')

    data = {
        "date_list": '|'.join(date_list),
        "avg_list": '|'.join(avg_list),
        "median_list": '|'.join(median_list),
        "hotel": "1.77",
        "private": "42.23",
        "entire": "55.25",
        "shared": "0.74",
        "price_category": "0-100|100-200|200-300|300-400",
        "entire_list": "17.51|25.78|7.36|2.72",
        "private_list": "41.70|2.31|0.34|0.13",
        "hotel_list": "0.52|0.62|0.19|0.08",
        "share_list": "0.68|0.04|0.01|0.01",
        "region_category": '|'.join(region_list),
        "max_count": "8000",
        "entire_region_list": '|'.join(entire_region),
        "private_region_list": '|'.join(private_region),
        "hotel_region_list": '|'.join(hotel_region),
        "share_region_list": '|'.join(share_region),
        "region_price": '|'.join(price_region),
        "city": "london"
    }

    return render(request, 'vis.html', data)


def vis_beijing(request):
    date_list, avg_list, median_list = read_season_data('static/data/beijing_season_stat.csv')
    region_list, entire_region, hotel_region, private_region, share_region, price_region = read_region_data('static/data/beijing_region.csv')

    data = {
        "date_list": '|'.join(date_list),
        "avg_list": '|'.join(avg_list),
        "median_list": '|'.join(median_list),
        "hotel": "0",
        "private": "33.67",
        "entire": "61.74",
        "shared": "4.58",
        "price_category": "0-300|300-600|600-1000|1000-10000",
        "entire_list": "9.32|32.85|9.99|9.58",
        "private_list": "20.35|7.89|2.94|2.49",
        "hotel_list": "0|0|0|0",
        "share_list": "4.14|0.25|0.1|0.1",
        "region_category": '|'.join(region_list),
        "max_count": "13000",
        "entire_region_list": '|'.join(entire_region),
        "private_region_list": '|'.join(private_region),
        "hotel_region_list": '|'.join(hotel_region),
        "share_region_list": '|'.join(share_region),
        "region_price": '|'.join(price_region),
        "city": "beijing"
    }

    return render(request, 'vis.html', data)


def vis_paris(request):
    date_list, avg_list, median_list = read_season_data('static/data/paris_season_stat.csv')
    region_list, entire_region, hotel_region, private_region, share_region, price_region = read_region_data('static/data/paris_region.csv')

    data = {
        "date_list": '|'.join(date_list),
        "avg_list": '|'.join(avg_list),
        "median_list": '|'.join(median_list),
        "hotel": "0",
        "private": "12.84",
        "entire": "84.36",
        "shared": "0.82",
        "price_category": "0-75|75-150|150-300|300-750",
        "entire_list": "23.29|41.16|15.67|4.24",
        "private_list": "9.73|2.6|0.42|0.1",
        "hotel_list": "0|0|0|0",
        "share_list": "0.72|0.07|0.01|0.01",
        "region_category": '|'.join(region_list),
        "max_count": "6000",
        "entire_region_list": '|'.join(entire_region),
        "private_region_list": '|'.join(private_region),
        "hotel_region_list": '|'.join(hotel_region),
        "share_region_list": '|'.join(share_region),
        "region_price": '|'.join(price_region),
        "city": "paris"
    }

    return render(request, 'vis.html', data)
    

def vis_tokyo(request):
    date_list, avg_list, median_list = read_season_data('static/data/tokyo_season_stat.csv')
    region_list, entire_region, hotel_region, private_region, share_region, price_region = read_region_data('static/data/tokyo_region.csv')

    data = {
        "date_list": '|'.join(date_list),
        "avg_list": '|'.join(avg_list),
        "median_list": '|'.join(median_list),
        "hotel": "10.5",
        "private": "20.6",
        "entire": "64.7",
        "shared": "4.19",
        "price_category": "0-10000|10000-20000|20000-30000|30000-40000",
        "entire_list": "18.32|30.12|9.52|2.61",
        "private_list": "15.47|6.25|1.23|0.31",
        "hotel_list": "7.09|3.49|0.58|0.05",
        "share_list": "4.70|0.26|0.01|0.0",
        "region_category": '|'.join(region_list),
        "max_count": "2000",
        "entire_region_list": '|'.join(entire_region),
        "private_region_list": '|'.join(private_region),
        "hotel_region_list": '|'.join(hotel_region),
        "share_region_list": '|'.join(share_region),
        "region_price": '|'.join(price_region),
        "city": "tokyo"
    }

    return render(request, 'vis.html', data)

