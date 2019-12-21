# How to lease my place in a reasonable price? : Airbnb price analysis around the world
EECS6893 Big data analysis final project

Project ID: 201912-15

Team members: Minxuan Gao(mg4115), Xinyan Zhang(xz2878), Mengyuan Su(ms5904)

## Run the program
It is a Django-based application, so after downloading the source code, you can run `python manage.py runserver` in your terminal and visit it locally.

## Data processing
### Data modeling
* data_modeling
* seasonality

### Visualization:
* preprocess_vis_data
* csv2geojson: https://github.com/mapbox/csv2geojson
* geojson-merge: https://github.com/mapbox/geojson-merge

## Tools and framework:
### Modeling
Linear Regression, Ridge Regression, Lasso Regression, Bayes Ridge Regression, Random Forest Regressor, XGBoost

### Technologies Used
Scikit learn, Pandas, Numpy, Jupyter Notebook, Matplotlib, Seaborn, Scipy

### System
* Spark: https://spark.apache.org/docs/latest/api/python/index.html
* Django: https://www.djangoproject.com/
* Leaflet.js: https://leafletjs.com/
* FusionCharts: https://www.fusioncharts.com/
* SemanticUI: https://semantic-ui.com/
* stamen maps: http://maps.stamen.com

## Data source
### Airbnb data
* Inside Airbnb: http://insideairbnb.com/get-the-data.html

### Neighbourhood data
* NYC: https://github.com/veltman/snd3/blob/master/data/nyc-neighborhoods.geo.json
* London: https://github.com/blackmad/neighborhoods
* Paris: https://github.com/blackmad/neighborhoods
* Tokyo: https://github.com/utisz/compound-cities/tree/master/tokyo
* Beijing: https://github.com/longwosion/geojson-map-china