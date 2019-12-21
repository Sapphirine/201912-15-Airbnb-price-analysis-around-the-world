const neighbourhood = {
  nyc: ['Allerton', 'Arden Heights', 'Arrochar', 'Arverne', 'Astoria', 'Bath Beach', 'Battery Park City', 'Bay Ridge', 'Bay Terrace', 'Bay Terrace, Staten Island', 'Baychester', 'Bayside', 'Bayswater', 'Bedford-Stuyvesant', 'Belle Harbor', 'Bellerose', 'Belmont', 'Bensonhurst', 'Bergen Beach', 'Boerum Hill', 'Borough Park', 'Breezy Point', 'Briarwood', 'Brighton Beach', 'Bronxdale', 'Brooklyn Heights', 'Brownsville', "Bull's Head", 'Bushwick', 'Cambria Heights', 'Canarsie', 'Carroll Gardens', 'Castle Hill', 'Castleton Corners', 'Chelsea', 'Chinatown', 'City Island', 'Civic Center', 'Claremont Village', 'Clason Point', 'Clifton', 'Clinton Hill', 'Co-op City', 'Cobble Hill', 'College Point', 'Columbia St', 'Concord', 'Concourse', 'Concourse Village', 'Coney Island', 'Corona', 'Country Club', 'Crown Heights', 'Cypress Hills', 'DUMBO', 'Ditmars Steinway', 'Dongan Hills', 'Douglaston', 'Downtown Brooklyn', 'Dyker Heights', 'East Elmhurst', 'East Flatbush', 'East Harlem', 'East Morrisania', 'East New York', 'East Village', 'Eastchester', 'Edenwald', 'Edgemere', 'Elmhurst', 'Eltingville', 'Emerson Hill', 'Far Rockaway', 'Fieldston', 'Financial District', 'Flatbush', 'Flatiron District', 'Flatlands', 'Flushing', 'Fordham', 'Forest Hills', 'Fort Greene', 'Fort Hamilton', 'Fresh Meadows', 'Gerritsen Beach', 'Glendale', 'Gowanus', 'Gramercy', 'Graniteville', 'Grant City', 'Gravesend', 'Great Kills', 'Greenpoint', 'Greenwich Village', 'Grymes Hill', 'Harlem', "Hell's Kitchen", 'Highbridge', 'Hollis', 'Holliswood', 'Howard Beach', 'Howland Hook', 'Huguenot', 'Hunts Point', 'Inwood', 'Jackson Heights', 'Jamaica', 'Jamaica Estates', 'Jamaica Hills', 'Kensington', 'Kew Gardens', 'Kew Gardens Hills', 'Kingsbridge', 'Kips Bay', 'Laurelton', 'Lighthouse Hill', 'Little Italy', 'Little Neck', 'Long Island City', 'Longwood', 'Lower East Side', 'Manhattan Beach', 'Marble Hill', 'Mariners Harbor', 'Maspeth', 'Melrose', 'Middle Village', 'Midland Beach', 'Midtown', 'Midwood', 'Mill Basin', 'Morningside Heights', 'Morris Heights', 'Morris Park', 'Morrisania', 'Mott Haven', 'Mount Eden', 'Mount Hope', 'Murray Hill', 'Navy Yard', 'Neponsit', 'New Brighton', 'New Dorp Beach', 'New Springville', 'NoHo', 'Nolita', 'North Riverdale', 'Norwood', 'Oakwood', 'Olinville', 'Ozone Park', 'Park Slope', 'Parkchester', 'Pelham Bay', 'Pelham Gardens', 'Port Morris', 'Port Richmond', "Prince's Bay", 'Prospect Heights', 'Prospect-Lefferts Gardens', 'Queens Village', 'Randall Manor', 'Red Hook', 'Rego Park', 'Richmond Hill', 'Richmondtown', 'Ridgewood', 'Riverdale', 'Rockaway Beach', 'Roosevelt Island', 'Rosebank', 'Rosedale', 'Rossville', 'Schuylerville', 'Sea Gate', 'Sheepshead Bay', 'Shore Acres', 'Silver Lake', 'SoHo', 'Soundview', 'South Beach', 'South Ozone Park', 'South Slope', 'Springfield Gardens', 'Spuyten Duyvil', 'St. Albans', 'St. George', 'Stapleton', 'Stuyvesant Town', 'Sunnyside', 'Sunset Park', 'Theater District', 'Throgs Neck', 'Todt Hill', 'Tompkinsville', 'Tottenville', 'Tremont', 'Tribeca', 'Two Bridges', 'Unionport', 'University Heights', 'Upper East Side', 'Upper West Side', 'Van Nest', 'Vinegar Hill', 'Wakefield', 'Washington Heights', 'West Brighton', 'West Farms', 'West Village', 'Westchester Square', 'Westerleigh', 'Whitestone', 'Williamsbridge', 'Williamsburg', 'Willowbrook', 'Windsor Terrace', 'Woodhaven', 'Woodlawn', 'Woodside'],
  london: ['Barking and Dagenham', 'Barnet', 'Bexley', 'Brent', 'Bromley', 'Camden', 'City of London', 'Croydon', 'Ealing', 'Enfield', 'Greenwich', 'Hackney', 'Hammersmith and Fulham', 'Haringey', 'Harrow', 'Havering', 'Hillingdon', 'Hounslow', 'Islington', 'Kensington and Chelsea', 'Kingston upon Thames', 'Lambeth', 'Lewisham', 'Merton', 'Newham', 'Redbridge', 'Richmond upon Thames', 'Southwark', 'Sutton', 'Tower Hamlets', 'Waltham Forest', 'Wandsworth', 'Westminster'],
  beijing: ['东城区', '丰台区 / Fengtai', '大兴区 / Daxing', '密云县 / Miyun', '平谷区 / Pinggu', '延庆县 / Yanqing', '怀柔区 / Huairou', '房山区', '昌平区', '朝阳区 / Chaoyang', '海淀区', '石景山区', '西城区', '通州区 / Tongzhou', '门头沟区 / Mentougou', '顺义区 / Shunyi'],
  tokyo: ['Adachi Ku', 'Akiruno Shi', 'Akishima Shi', 'Arakawa Ku', 'Bunkyo Ku', 'Chiyoda Ku', 'Chofu Shi', 'Chuo Ku', 'Edogawa Ku', 'Fuchu Shi', 'Fussa Shi', 'Hachijo Machi', 'Hachioji Shi', 'Hamura Shi', 'Higashikurume Shi', 'Higashimurayama Shi', 'Hino Shi', 'Hinohara Mura', 'Inagi Shi', 'Itabashi Ku', 'Katsushika Ku', 'Kita Ku', 'Kodaira Shi', 'Koganei Shi', 'Kokubunji Shi', 'Komae Shi', 'Koto Ku', 'Kunitachi Shi', 'Machida Shi', 'Meguro Ku', 'Minato Ku', 'Mitaka Shi', 'Miyake Mura', 'Musashimurayama Shi', 'Musashino Shi', 'Nakano Ku', 'Nerima Ku', 'Niijima Mura', 'Nishitokyo Shi', 'Ogasawara Mura', 'Okutama Machi', 'Ome Shi', 'Oshima Machi', 'Ota Ku', 'Setagaya Ku', 'Shibuya Ku', 'Shinagawa Ku', 'Shinjuku Ku', 'Suginami Ku', 'Sumida Ku', 'Tachikawa Shi', 'Taito Ku', 'Tama Shi', 'Toshima Ku'],
  paris: ['Batignolles-Monceau', 'Bourse', 'Buttes-Chaumont', 'Buttes-Montmartre', 'Entrepôt', 'Gobelins', 'Hôtel-de-Ville', 'Louvre', 'Luxembourg', 'Ménilmontant', 'Observatoire', 'Opéra', 'Palais-Bourbon', 'Panthéon', 'Passy', 'Popincourt', 'Reuilly', 'Temple', 'Vaugirard', 'Élysée']
}

const property = {
  nyc: ['Aparthotel', 'Apartment', 'Barn', 'Bed and breakfast', 'Boat', 'Boutique hotel', 'Bungalow', 'Cabin', 'Camper/RV', 'Casa particular (Cuba)', 'Castle', 'Cave', 'Condominium', 'Cottage', 'Dome house', 'Earth house', 'Farm stay', 'Guest suite', 'Guesthouse', 'Hostel', 'Hotel', 'House', 'Houseboat', 'Loft', 'Nature lodge', 'Other', 'Resort', 'Serviced apartment', 'Tent', 'Timeshare', 'Tiny house', 'Townhouse', 'Villa', 'Yurt'],
  london: ['Aparthotel', 'Apartment', 'Barn', 'Bed and breakfast', 'Boat', 'Boutique hotel', 'Bungalow', 'Bus', 'Cabin', 'Camper/RV', 'Casa particular (Cuba)', 'Chalet', 'Condominium', 'Cottage', 'Dome house', 'Dorm', 'Earth house', 'Farm stay', 'Guest suite', 'Guesthouse', 'Hostel', 'Hotel', 'House', 'Houseboat', 'Hut', 'Island', 'Lighthouse', 'Loft', 'Minsu (Taiwan)', 'Nature lodge', 'Other', 'Plane', 'Ryokan (Japan)', 'Serviced apartment', "Shepherd's hut (U.K., France)", 'Tent', 'Tiny house', 'Townhouse', 'Treehouse', 'Villa', 'Yurt'],
  beijing: ['Aparthotel', 'Apartment', 'Barn', 'Bed and breakfast', 'Boutique hotel', 'Bungalow', 'Cabin', 'Camper/RV', 'Campsite', 'Casa particular (Cuba)', 'Castle', 'Cave', 'Chalet', 'Condominium', 'Cottage', 'Dome house', 'Dorm', 'Earth house', 'Farm stay', 'Guest suite', 'Guesthouse', 'Hostel', 'Hotel', 'House', 'Houseboat', 'Hut', 'Igloo', 'In-law', 'Kezhan (China)', 'Loft', 'Minsu (Taiwan)', 'Nature lodge', 'Other', 'Pension (South Korea)', 'Resort', 'Ryokan (Japan)', 'Serviced apartment', 'Tent', 'Tiny house', 'Townhouse', 'Treehouse', 'Villa', 'Yurt'],
  tokyo: ['Aparthotel', 'Apartment', 'Bed and breakfast', 'Boutique hotel', 'Bungalow', 'Cabin', 'Camper/RV', 'Condominium', 'Dome house', 'Dorm', 'Earth house', 'Guest suite', 'Guesthouse', 'Hostel', 'Hotel', 'House', 'Hut', 'Loft', 'Nature lodge', 'Other', 'Resort', 'Ryokan (Japan)', 'Serviced apartment', 'Tent', 'Tiny house', 'Townhouse', 'Villa'],
  paris: ['Aparthotel', 'Apartment', 'Bed and breakfast', 'Boat', 'Boutique hotel', 'Bungalow', 'Cabin', 'Camper/RV', 'Campsite', 'Casa particular (Cuba)', 'Cave', 'Condominium', 'Cottage', 'Farm stay', 'Guest suite', 'Guesthouse', 'Hostel', 'Hotel', 'House', 'Houseboat', 'Igloo', 'Loft', 'Other', 'Serviced apartment', 'Tiny house', 'Townhouse', 'Villa']
}

const roomType = {
  nyc: ['Entire home/apt', 'Hotel room', 'Private room', 'Shared room'],
  london: ['Entire home/apt', 'Hotel room', 'Private room', 'Shared room'],
  beijing: ['Entire home/apt', 'Private room', 'Shared room'],
  tokyo: ['Entire home/apt', 'Hotel room', 'Private room', 'Shared room'],
  paris: ['Entire home/apt', 'Private room', 'Shared room']
}

const resList = res.split("|");

$("#city").change(function(){
  var selectVal = $("#city option:selected").val();
  var propertyTypes = property[selectVal].map(x=>"<option value='" + x + "'>" + x + "</option>");
  $("#property-type").attr('class', 'ui dropdown');
  $("#property-type").empty().append(propertyTypes);
  var neighbourhoodTypes = neighbourhood[selectVal].map(x=>"<option value='" + x + "'>" + x + "</option>");
  $("#neighbourhood").attr('class', 'ui dropdown');
  $("#neighbourhood").empty().append(neighbourhoodTypes);
  var roomTypes = roomType[selectVal].map(x=>"<option value='" + x + "'>" + x + "</option>");
  $("#room-type").attr('class', 'ui dropdown');
  $("#room-type").empty().append(roomTypes);
});

const predictionData = {
  chart: {
    caption: "Weekly Room Price Prediction Results",
    xaxisname: "Day",
    yaxisname: "Price",
    numberprefix: "$",
    yAxisMinValue: min,
    yAxisMaxValue: max,
    theme: "candy"
  },
  data: [
    {label: "Monday", value: resList[0]},
    {label: "Tuesday", value: resList[1]},
    {label: "Wednesday", value: resList[2]},
    {label: "Thursday", value: resList[3]},
    {label: "Friday", value: resList[4]},
    {label: "Saturday", value: resList[5]},
    {label: "Sunday", value: resList[6]}
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "column2d",
    renderAt: "seasonal-results",
    width: "100%",
    height: "100%",
    dataFormat: "json",

    dataSource: predictionData
  }).render();
});
