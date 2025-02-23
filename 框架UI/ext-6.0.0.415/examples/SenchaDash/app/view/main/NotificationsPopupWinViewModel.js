/*
 * File: app/view/main/NotificationsPopupWinViewModel.js
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

Ext.define('SenchaDash.view.main.NotificationsPopupWinViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainnotificationspopupwin',

    requires: [
        'Ext.data.Store'
    ],

    stores: {
        notificationsstore: {
            model: 'SenchaDash.model.PersonalInfoModel',
            data: [
                {
                    name: 'New comments waiting approval',
                    status: '15 minutes ago',
                    icon: 'unde'
                },
                {
                    name: 'HDD is Full',
                    status: '50 minutes ago',
                    icon: 'commodi'
                },
                {
                    name: 'Write a news article',
                    status: 'Last update 8 hours ago',
                    icon: 'corporis'
                },
                {
                    name: 'Comment Sorting',
                    status: 'Last update 8 hours ago',
                    icon: 'rerum'
                },
                {
                    name: 'New user registered',
                    status: '4 minutes ago',
                    icon: 'voluptas'
                }
            ]
        }
    }

});