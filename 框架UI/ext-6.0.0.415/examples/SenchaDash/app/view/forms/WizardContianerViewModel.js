/*
 * File: app/view/forms/WizardContianerViewModel.js
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

Ext.define('SenchaDash.view.forms.WizardContianerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.formswizardcontianer',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String'
    ],

    stores: {
        tagFieldStore: {
            data: [
                {
                    identifier: 729,
                    valueToShow: 'voluptas'
                },
                {
                    identifier: 339,
                    valueToShow: 'minus'
                },
                {
                    identifier: 83,
                    valueToShow: 'ea'
                },
                {
                    identifier: 798,
                    valueToShow: 'debitis'
                },
                {
                    identifier: 115,
                    valueToShow: 'accusantium'
                },
                {
                    identifier: 489,
                    valueToShow: 'recusandae'
                }
            ],
            fields: [
                {
                    type: 'int',
                    name: 'identifier'
                },
                {
                    type: 'string',
                    name: 'valueToShow'
                }
            ]
        }
    }

});