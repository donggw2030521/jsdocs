/**
 * Stacked bars are multi-series bar charts where categories are stacked next to each
 * other. This is typically done to visually represent the total of all categories for a
 * given period or value.
 */
Ext.define('KitchenSink.view.charts.bar.Stacked', {
    extend: 'Ext.Panel',
    xtype: 'bar-stacked',

    // <example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',

    layout: {
        type: 'vbox',
        pack: 'center'
    },
    // </example>

    width: 650,

    initComponent: function() {
        var me = this;
        //<example>
        me.tbar = [
            '->',
            {
                text: 'Preview',
                handler: function() {
                    me.down('cartesian').preview();
                }
            }
        ];
        //</example>
        me.items = [{
            xtype: 'cartesian',
            width: '100%',
            height: 500,
            legend: {
                docked: 'right'
            },
            store: {type: 'browsers'},
            insetPadding: 40,
            flipXY: true,
            sprites: [{
                type: 'text',
                text: 'Bar Charts - Stacked Bars',
                fontSize: 22,
                width: 100,
                height: 30,
                x: 40, // the sprite x position
                y: 20  // the sprite y position
            }, {
                type: 'text',
                text: 'Data: Browser Stats 2012',
                fontSize: 10,
                x: 12,
                y: 480
            }, {
                type: 'text',
                text: 'Source: http://www.w3schools.com/',
                fontSize: 10,
                x: 12,
                y: 495
            }],
            axes: [{
                type: 'numeric',
                position: 'bottom',
                adjustByMajorUnit: true,
                fields: 'data1',
                grid: true,
                renderer: function (v) { return v + '%'; },
                minimum: 0
            }, {
                type: 'category',
                position: 'left',
                fields: 'month',
                grid: true
            }],
            series: [{
                type: 'bar',
                axis: 'bottom',
                title: [ 'IE', 'Firefox', 'Chrome', 'Safari' ],
                xField: 'month',
                yField: [ 'data1', 'data2', 'data3', 'data4' ],
                stacked: true,
                style: {
                    opacity: 0.80
                },
                highlight: {
                    fillStyle: 'yellow'
                },
                tooltip: {
                    trackMouse: true,
                    renderer: function(tooltip, record, item) {
                        var fieldIndex = Ext.Array.indexOf(item.series.getYField(), item.field),
                            browser = item.series.getTitle()[fieldIndex];

                        tooltip.setHtml(browser + ' on ' + record.get('month') + ': ' +
                            record.get(item.field) + '%');
                    }
                }
            }]
        //<example>
        }, {
            style: 'margin-top: 10px;',
            xtype: 'gridpanel',
            columns : {
                defaults: {
                    sortable: false,
                    menuDisabled: true,
                    renderer: function(v) { return v + '%'; } 
                },
                items: [
                    { text: 'Month', dataIndex: 'month', renderer: function(v) { return v } },
                    { text: 'IE', dataIndex: 'data1' },
                    { text: 'Firefox', dataIndex: 'data2' },
                    { text: 'Chrome', dataIndex: 'data3' },
                    { text: 'Safari', dataIndex: 'data4' }
                ]
            },
            store: {type: 'browsers'},
            width: '100%'
        //</example>
        }];

        this.callParent();
    }
});
