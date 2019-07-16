sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"underwritingWorkbenchunderwritingWorkbench//model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("underwritingWorkbenchunderwritingWorkbench.controller.MainView", {
		
		formatter: formatter,
		
		onInit: function () {
		
			this.oFuncOverview = new sap.ui.model.json.JSONModel("model/uwWorkbench.json");
			this.getView().setModel(this.oFuncOverview, "myModel");
			
		},
		
		insuredSelect: function(event){
			
			var oContext = event.getParameter("rowContext");
		    var insuredId = this.getView().getModel().getProperty("insuredId", oContext);
		    
		    // Call service to get insuerd specific requirements
		    // Bind Requirements Table control with data
		    
		},
		
		msgAgent: function() {
			
		},
		
		updateRequirement: function() {
			
		},
		
		// Add Requirement popup
		addRequirement : function(){
			this._addRequirementDialog().open();
		},
		
		cancelNewRequirement : function() {
           this._addRequirementDialog().close();
        },
        
        addNewRequirement : function() {
          // Pick up new value, and update model
        },
		
		 _addRequirementDialog : function() {
            // create a fragment with dialog, and pass the selected data
            if (!this.dialog) {
                // This fragment can be instantiated from a controller as follows:
                this.dialog = sap.ui.xmlfragment(
                		"addReqDialog",
                		"underwritingWorkbenchunderwritingWorkbench.view.AddRequirementDialog",
                		this);
                //debugger;
            }
            //debugger;
            return this.dialog;
        },

	});
});