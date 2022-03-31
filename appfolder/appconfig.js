var app = angular.module("myApp", ["ngRoute", "pascalprecht.translate"]);
app.config(function ($routeProvider, $translateProvider) {
    var en_translations = {
        "Home": "Home",
        "About": "About",
        "Countries": "Countries",
        "English": "English",
        "Hindi": "Hindi",
        "Welcome": "Welcome to Countries App",
        "AboutAuthor": "About the Author",
        "Name": "Shubhansh Shukla",
        "Email" : "Email",
        "Apiunavailable": "Data is currently unavailable. Please try after sometime."
    }
    var sp_translations = {
        "Home": "होम",
        "About": "हमारे बारे में",
        "Countries": "देश",
        "English": "अंग्रेज़ी",
        "Hindi": "हिंदी",
        "Welcome": "देश ऐप में आपका स्वागत है",
        "AboutAuthor": "लेखक की जानकारी",
        "Name": "शुभांश  शुक्ला",
        "Email" : "ईमेल",
        "Apiunavailable": "डेटा वर्तमान में अनुपलब्ध है, कृपया कुछ देर बाद प्रयास करें।"
    }
    $translateProvider.translations('en', en_translations);
    $translateProvider.translations('hi', sp_translations);
    $translateProvider.preferredLanguage('en');

    $routeProvider
        .when("/home", {
            template: "<h1>{{'Welcome' | translate}}</h1>",
            controller: "homectrl"
        })
        .when("/about", {
            template: "<h1>{{'AboutAuthor' | translate}}</h1><h2>{{'Name' | translate}}</h2><a href='mailto:shukla.shubhansh@gmail.com'>{{'Email' | translate}}: shukla.shubhansh@gmail.com</a>",
            controller: "aboutctrl"
        })
        .when("/countries", {
            template: "<div><div ng-if='erroroccured' class='countriesparent errortemplate'><h2>{{'Apiunavailable'|translate}}</h2></div><div ng-if='!erroroccured' class='countriesparent'><input type='text' placeholder='Search' id='searchbox' class='searchcountry' ng-model= 'searchfield' /><section class='parentlist'><div class='listitem' ng-repeat='countries in allcountries' ng-if='allcountries[$index].name.official.toUpperCase().indexOf(searchfield.toUpperCase())>-1 || allcountries[$index].capital[0].toUpperCase().indexOf(searchfield.toUpperCase())>-1 || allcountries[$index].region.toUpperCase().indexOf(searchfield.toUpperCase())>-1'><h4>{{countries.name.official+' - '+obj.values(countries.name.nativeName)[0].official}}</h4><p><b>Capital: </b>{{countries.capital[0]}}<p><b>Region: </b>{{countries.region}}</p><p><b>Currency:</b> {{obj.values(countries.currencies)[0].symbol}}</p></p><img src = {{countries.flags.png}} class='flags'/></div></section></div></div>",
            controller: "countriesctrl"
        })
        .otherwise({
            template: "<h1>Welcome to Countries App</h1>",
            controller: 'homectrl'
        });
});