// Set the object as the module exports
module.exports = {

    /*  Name      log
     *  Purpose   To log a message to the browsers console.
     *  @params   {string}    message    The message to be output.
     *            {string}    sEvent     The type of message.            
    */     
    log: function(message, type) {
        // Check if console.log exists.
        if (console && console.log) {            
            // Variable to hold style.
            var style = "padding: 3px;";

            // Switch the type to determine style.
            switch (type) {
                // View render.
                case 'viewRender':
                    style += 'background: #C0EAC0; color: #78CC78;';
                break;
                // Object initiation.
                case 'initiated':
                    style += 'background: #8DC1E0; color: #659EBC;';
                break;
                // Error.
                case 'error':
                    style += 'background: #D9534F; color: #ffffff;';
                break;
                // Debug.
                case 'debug':
                    style += 'background: #F0AD4E; color: #ffffff;';
                break;
                // Route change.
                case 'routeChange':
                    style += 'background: #F7F7F9; color: #CECEEF;';
                break;
                // Route change.
                case 'dataFetch':
                    style += 'background: #878F94; color: #6E757B;';
                break;                   
                // Default.
                default:
                    style += 'background: #F0AD4E; color: #ffffff;';
                break;
            }
            // END switch.

            // Log the message.
            console.log('%c '+ message +' ', style);
        }
        // END if console.log.
    }
    /**********************************************************************/  

};