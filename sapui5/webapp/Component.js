//@ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "clicksoft/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
    * @param {typeof sap.ui.core.UIComponent} UIComponent
    * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
    */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("clicksoft.sapui5.component", {

            metadata: {
                manifest: "json"
                // "rootView": {
                //     "viewName": "clicksoft.sapui5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }
            },

            init: function () {
                //Call init function of parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model in the view
                this.setModel(Models.createRecipient());

                //set i18n model in the view

                var i18nModel = new ResourceModel({ bundleName: "clicksoft.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }

        });

    });