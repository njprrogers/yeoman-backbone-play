/*global backboneWithYo, $*/


window.backboneWithYo = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        new this.Views.TodosView({
            collection: new this.Collections.TodosCollection()
        });
    }
};

$(document).ready(function () {
    backboneWithYo.init();
});
