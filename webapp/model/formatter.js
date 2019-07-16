/*eslint linebreak-style: ["error", "windows"]*/
sap.ui.define(function () {
    "use strict";
    return {
    	
        formatRecDate: function (value) {
        	
           	if(value){
				return value;
			}else{
				return 'Received';
			}
			
        },
        
         formatDocId: function (value) {
        	
           	if(value){
				return value;
			}else{
				return 'Attach Document';
			}
			
        },
        
         formatNote: function (value) {
        	
           	if(value){
				return value;
			}else{
				return 'Add Note';
			}
			
        }
    };
});