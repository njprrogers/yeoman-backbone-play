/*global backboneWithYo, Backbone, JST*/

backboneWithYo.Views = backboneWithYo.Views || {};

(function () {
    'use strict';

    backboneWithYo.Views.TodosView = Backbone.View.extend({

        template: JST['app/scripts/templates/todos.ejs']

    });

})();
