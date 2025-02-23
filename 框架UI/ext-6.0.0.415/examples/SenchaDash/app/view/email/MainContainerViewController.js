/*
 * File: app/view/email/MainContainerViewController.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SenchaDash.view.email.MainContainerViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.emailmaincontainer',

    setCurrentView: function(viewclass, extraParams) {
            var emailRight=this.getView().query("#emailRightContainer")[0];
            var vmdata=this.getViewModel().data;
            if(vmdata.currentView) {
                vmdata.currentView.destroy();
            }

            // check for extraParams
            extraParams = extraParams ? extraParams : {};
            vmdata.currentView = Ext.create(viewclass, extraParams);
            emailRight.getLayout().setActiveItem(vmdata.currentView);
    },

    init: function() {
        this.setCurrentView("SenchaDash.view.email.InboxPanel");
    },

    onMenuClick: function(menu, item, e, eOpts) {
        if((item !== undefined) && ('viewToOpen' in item)) {
            this.setCurrentView("SenchaDash.view." + item.viewToOpen);
        }
    }

});
