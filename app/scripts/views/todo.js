/*global backboneWithYo, Backbone, JST*/

backboneWithYo.Views = backboneWithYo.Views || {};

(function () {
    'use strict';

    backboneWithYo.Views.TodoView = Backbone.View.extend({

        template: JST['app/scripts/templates/todo.ejs']

    });

})();
