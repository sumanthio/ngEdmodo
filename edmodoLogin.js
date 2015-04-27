
/*
 * angular-Edmodo-directive v0.0.1
 * ♡ CopyHeart 2015 by Sumanth http://sumanthio.firebaseapp.com
 * Copying is an act of love. Please copy.
 */

angular.module('ngEdmodo', []).
    directive('edmodoLogin', function ($window) {
    return {
            restrict: 'E',
            template: ' <a ng-click="trackEvent();" href="https://api.edmodo.com/oauth/authorize?client_id={{clientId}}'+
            '&amp;redirect_uri={{redirectURI}}'+
            '&amp;scope=basic+read_groups+read_user_email+read_connections+create_messages&amp;response_type=code">'+
            '<button class="login-edmodo-button">'+
            '<img id="edmodo-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41205/edmodo-icon_1.png"/>'+
            '<div id="vertical-divider"></div>'+
            '<p>Sign in with <span id="edmodo">Edmodo</span></p>'+
            '</button>'+
            '</a>',
            link: function (scope, element, attrs) {
                scope.clientId = ""; //Your  app's id
                scope.redirectURI="";// Your app's callback

                /*Cases for your environments.... to change the key and secret dynamically...!*/
                switch (window.location.protocol+'//'+window.location.host){
                    case ('http://yourapp'):
                        scope.clientId = /*"Your Application id given by Edmodo"*/;
                        scope.redirectURI="https://yourapp/edmodo_login";
                        break;
                    case ('http://yourapps_other_instance'):
                        scope.clientId = /*"Your Application id given by Edmodo"*/;
                        scope.redirectURI="https://yourapp's_other_instance/edmodo_login";
                        break;
                    case ('https://yourapps_other_instance'):
                        scope.clientId = /*"Your Application id given by Edmodo"*/;
                        scope.redirectURI="https://yourapp's_one_other_instance/edmodo_login";
                        break;
                    /*default:
                     scope.clientId = "Dont need to set one defaultly";*/

                }

                scope.trackEvent = function () {
                    $window.ga('send', 'event', 'Button', 'Click', 'Edmodo Button Clicked');
                };

            }
        };
    });