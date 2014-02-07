/*global backboneWithYo, Backbone*/

backboneWithYo.Collections = backboneWithYo.Collections || {};

(function () {
    'use strict';

    backboneWithYo.Collections.TodosCollection = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage('backbone-generator-todos'),

        initialize: function () {
            this.model = backboneWithYo.Models.TodoModel;
        }

    });

})();
