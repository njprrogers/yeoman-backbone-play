/*global backboneWithYo, Backbone*/

backboneWithYo.Models = backboneWithYo.Models || {};

(function () {
    'use strict';

    backboneWithYo.Models.TodoModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
