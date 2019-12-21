from django.shortcuts import render
from django.http import HttpResponse
import pandas as pd
import numpy as np
import matplotlib
import seaborn as sb
import matplotlib.pyplot as plt
import matplotlib.cm as cmx
import matplotlib.colors as colors
import sklearn
from sklearn import linear_model
import sklearn.metrics as metrics
from sklearn import preprocessing
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression as Lin_Reg
from sklearn.linear_model import RidgeCV
from sklearn.linear_model import LassoCV
from sklearn.ensemble import RandomForestRegressor
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import train_test_split 
import pylab
import scipy.stats as stats
import json

# different price coefficient in a week
coefficient = {
    "nyc": [1.0, 1.003480368098722, 1.0031599768413688, 1.0022892374210775, 1.0248695400908974, 1.025772363617129, 1.0004653144412459],
    "london": [1.0, 1.003480368098722, 1.0031599768413688, 1.0022892374210775, 1.0248695400908974, 1.025772363617129, 1.0004653144412459],
    "paris": [1.0, 1.003480368098722, 1.0031599768413688, 1.0022892374210775, 1.0248695400908974, 1.025772363617129, 1.0004653144412459],
    "beijing": [1.0, 1.003480368098722, 1.0031599768413688, 1.0022892374210775, 1.0248695400908974, 1.025772363617129, 1.0004653144412459],
    "tokyo": [1.0, 1.003480368098722, 1.0031599768413688, 1.0022892374210775, 1.0248695400908974, 1.025772363617129, 1.0004653144412459]
}

standardize_stat = {
    "nyc": '{"accommodates": {"mean": 2.817083363182654, "std": 1.761970738437282}, "bedrooms": {"mean": 1.2673066361009624, "std": 0.6152880622623258}, "bathrooms": {"mean": 1.1422499223917664, "std": 0.4059347097370321}, "beds": {"mean": 1.5732741122812044, "std": 1.0345467570567484}, "amenities": {"mean": 21.108651527091244, "std": 10.111189797545686}, "reviews_per_month": {"mean": 1.1447558325572713, "std": 1.6499110482795671}, "availability_365": {"mean": 112.15545526183824, "std": 131.7008456107491}, "minimum_nights": {"mean": 7.141987248370227, "std": 20.78460379915744}}',
    "london": '{"accommodates": {"mean": 3.1646591678729368, "std": 1.9066520711083035}, "bedrooms": {"mean": 1.4645356635370048, "std": 0.7993182983606703}, "bathrooms": {"mean": 1.2843388534016813, "std": 0.5443568336641081}, "beds": {"mean": 1.7576127807067636, "std": 1.129789036766749}, "amenities": {"mean": 20.273489063890253, "std": 9.586814386564633}, "reviews_per_month": {"mean": 0.8922761981912779, "std": 1.2949421968892536}, "availability_365": {"mean": 113.08051685900585, "std": 132.64019065890912}, "minimum_nights": {"mean": 4.0513273396103635, "std": 15.09398919586798}}',
    "paris": '{"accommodates": {"mean": 3.263246492985972, "std": 1.5815950072308365}, "bedrooms": {"mean": 1.3530861723446894, "std": 0.67131275589056}, "bathrooms": {"mean": 1.1329659318637275, "std": 0.39097460675600904}, "beds": {"mean": 1.8109619238476955, "std": 1.091264309018361}, "amenities": {"mean": 18.73436873747495, "std": 8.720202119349489}, "reviews_per_month": {"mean": 0.9382831663326593, "std": 1.3587694791141556}, "availability_365": {"mean": 78.7755511022044, "std": 119.31106967142695}, "minimum_nights": {"mean": 5.077995991983968, "std": 48.99434518914625}}',
    "beijing":  '{"accommodates": {"mean": 3.650296110547938, "std": 2.8432746879443367}, "bedrooms": {"mean": 1.588753134503548, "std": 1.1398761192038882}, "bathrooms": {"mean": 1.342781305020541, "std": 0.9096338559174431}, "beds": {"mean": 2.101691298084618, "std": 1.9285948284623753}, "amenities": {"mean": 23.081470415621833, "std": 12.130911936802143}, "reviews_per_month": {"mean": 0.7960305180600804, "std": 1.3604002821335133}, "availability_365": {"mean": 226.88144907432107, "std": 140.01153194091845}, "minimum_nights": {"mean": 2.97188283625887, "std": 21.23388402475548}}',
    "tokyo": '{"accommodates": {"mean": 4.286725162751203, "std": 3.024909047520034}, "bedrooms": {"mean": 1.4154165487310124, "std": 0.8762424460289658}, "bathrooms": {"mean": 1.2928106425134447, "std": 0.8898963309581372}, "beds": {"mean": 2.8681951127464855, "std": 2.2003796894328187}, "amenities": {"mean": 23.55382583262572, "std": 9.14583464657224}, "reviews_per_month": {"mean": 1.7914557977167742, "std": 1.6958677303686573}, "availability_365": {"mean": 147.755448627229, "std": 97.68065587131484}, "minimum_nights": {"mean": 3.1096329842437966, "std": 8.56910882455249}}'
}

class model:

    def __init__(self, model):
        self.model = model
        self.x_train = None
        self.y_train = None
        self.x_test = None
        self.y_test = None
        self.y_pred_train = None
        self.y_pred_test = None
        self.train_score = None
        self.test_score = None
        self.train_score_log = None
        self.test_score_log = None

    def data_split(self, x, y, test_size):
        self.x_train, self.x_test, self.y_train, self.y_test = train_test_split(x, y, test_size=test_size)

    def score_reg(self):
        return self.train_score, self.test_score

    def score_log(self):
        self.train_score_log = metrics.r2_score(np.exp(self.y_train), np.exp(self.y_pred_train))
        self.test_score_log = metrics.r2_score(np.exp(self.y_test), np.exp(self.y_pred_test))
        return self.train_score_log, self.test_score_log

    def data_frame_convert(self):
        df_train = pd.DataFrame({'y_pred': self.y_pred_train, 'y_real': self.y_train})
        df_test = pd.DataFrame({'y_pred_test': self.y_pred_test, 'y_real_test': self.y_test})
        return self.train_score, self.test_score, df_train, df_test

    def data_frame_convert_log(self):
        df_train = pd.DataFrame({'y_pred': np.exp(self.y_pred_train), 'y_real': np.exp(self.y_train)})
        df_test = pd.DataFrame({'y_pred_test': np.exp(self.y_pred_test), 'y_real_test': np.exp(self.y_test)})
        return self.train_score_log, self.test_score_log, df_train, df_test

    def fit_model(self, x, y, test_size):
        self.data_split(x, y, test_size)
        self.model = self.model.fit(self.x_train, self.y_train)
        self.train_score = self.model.score(self.x_train, self.y_train)
        self.test_score = self.model.score(self.x_test, self.y_test)
        self.y_pred_train = self.model.predict(self.x_train)
        self.y_pred_test = self.model.predict(self.x_test)

    def predict_helper(self, x):
        return self.model.predict(x)


class predictModel:

    def __init__(self, x, y, model_arg):
        self.x = x
        self.y = y
        self.model_arg = model_arg
        self.model = model(self.model_arg)
        self.model.fit_model(x, y, 0.3)

    def to_predict(self, x_input, columns_list, standardize_dict):
        x_to_predict = ["0"] * len(columns_list)

        for i in range(0, 8):
            mean = standardize_dict[columns_list[i]]["mean"]
            std = standardize_dict[columns_list[i]]["std"]
            x_to_predict[i] = str(round((float(x_input[columns_list[i]]) - mean) / std, 9))

        x_to_predict[columns_list.index(x_input["neighbourhood_cleansed"])] = "1"
        x_to_predict[columns_list.index(x_input["room_type"])] = "1"
        x_to_predict[columns_list.index(x_input["bed_type"])] = "1"
        x_to_predict[columns_list.index(x_input["property_type"])] = "1"
        x_to_predict[columns_list.index(x_input["host_is_superhost"])] = "1"
        if "review_scores_rating" in x_input:
            x_to_predict[columns_list.index(convert_scores_buckets(x_input["review_scores_rating"]))] = "1"
        else:
            x_to_predict[-1] = '1'

        x_df = pd.DataFrame([x_to_predict], columns=columns_list)
        return self.model.predict_helper(x_df)


#convert review_scores_rating into buckets
def convert_scores_buckets(val):
    if val == 'No Reviews':
        return 'No Reviews'

    val = float(val)
    if val >= 95.0:
        return '95-100'
    elif val >= 90.0 and val < 95.0:
        return '90-94'
    elif val >= 85.0 and val < 90.0:
        return '85-89'
    elif val >= 80.0 and val < 85.0:
        return '80-84'
    elif val >= 70.0 and val < 80.0:
        return '70-79'
    elif val >= 60.0 and val < 70.0:
        return '60-69'
    elif val >= 50.0 and val < 60.0:
        return '50-59'
    elif val >= 40.0 and val < 50.0:
        return '40-49'
    elif val >= 30.0 and val < 40.0:
        return '30-39'
    elif val >= 20.0 and val < 30.0:
        return '20-29'
    elif val >= 10.0 and val < 20.0:
        return '10-19'
    elif val < 10.0:
        return '0-9'


def price_predict(input, city):
    standardize_dict = json.loads(standardize_stat[city])
    data = pd.read_csv("static/data/" + city + "_clean.csv")
    columns = data.columns.tolist()[1:-2]

    # split into x and y (note that we do not include id and host_id as predictors)
    x = data.iloc[:, 1:-2]
    y = data.iloc[:, -2]
    predictM = predictModel(x, y, Lin_Reg(fit_intercept=True))
    res = predictM.to_predict(input, columns, standardize_dict)
    return res.tolist()[0]


def predict(request):
    values = {"res": "150|160|170|180|190|200|210", "min": "100", "max": "250"}
    if request.method == 'POST':
        city = request.POST.get('city')
        x_input = {
            "accommodates": request.POST.get('accomendate-num'), 
            "bathrooms": request.POST.get('bathroom-num'), 
            "bedrooms": request.POST.get('bedroom-num'), 
            "beds": request.POST.get('bed-num'), 
            "amenities": 15, 
            "minimum_nights": request.POST.get('minimum-nights'),
            "availability_365": 365,
            "reviews_per_month": 0, 
            "neighbourhood_cleansed": request.POST.get('neighbourhood'),
            "room_type": request.POST.get('room-type'), 
            "host_is_superhost": "f", 
            "bed_type": request.POST.get('bed-type'), 
            "review_scores_rating": request.POST.get('rating'),
            "property_type": request.POST.get('property-type')
        }
        res = price_predict(x_input, city)
        prices = [str(x * res) for x in coefficient[city]]
        values = {"res": '|'.join(prices), "min": str(res - 15), "max": str(res + 10)}
        return render(request, 'predictor.html', values)
        
    return render(request, 'predictor.html', values)
