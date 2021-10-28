sap.ui.define([
    "sap/ui/core/ComponentContainer"
],
    /**
    *
    * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
    */
    function (ComponentContainer) {
        new ComponentContainer({
            name: "clicksoft.sapui5",
            settings: {
                id: "sapui5"
            },
            asyn: true

        }).placeAt("content");
    });