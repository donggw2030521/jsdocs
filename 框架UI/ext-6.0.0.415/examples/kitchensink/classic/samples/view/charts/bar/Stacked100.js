/**
 * 100% stacked bars are bar charts where categories are stacked
 * on top of each other. The value of each category is recalculated so that
 * it represents a share of the whole, which is the full stack and is equal
 * to 100 by default.
 */
Ext.define('KitchenSink.view.charts.bar.Stacked100', {
    extend: 'Ext.Panel',
    xtype: 'bar-stacked-100',

    // <example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',

    layout: {
        type: 'vbox',
        pack: 'center'
    },
    // </example>

    width: 650,

    items: [{
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
            text: 'Bar Charts - 100% Stacked Bars',
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
            fields: 'data1',
            position: 'bottom',
            grid: true,
            minimum: 0,
            maximum: 100,
            majorTickSteps: 10,
            renderer: function (v) { return v + '%'; }
        }, {
            type: 'category',
            fields: 'month',
            position: 'left',
            grid: true
        }],
        series: [{
            type: 'bar',
            fullStack: true,
            title: [ 'IE', 'Firefox', 'Chrome', 'Safari', 'Others' ],
            xField: 'month',
            yField: [ 'data1', 'data2', 'data3', 'data4', 'other' ],
            axis: 'bottom',
            stacked: true,
            style: {
                opacity: 0.80
            },
            highlight: {
                fillStyle: 'yellow'
            },
            tooltip: {
                trackMouse: true,
                renderer: function (tooltip, record, item) {
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
        columns: {
            defaults: {
                sortable: false,
                menuDisabled: true,
                renderer: function (v) { return v + '%'; }
            },
            items: [
                { text: 'Month', dataIndex: 'month', renderer: function (v) { return v; } },
                { text: 'IE', dataIndex: 'data1' },
                { text: 'Firefox', dataIndex: 'data2' },
                { text: 'Chrome', dataIndex: 'data3' },
                { text: 'Safari', dataIndex: 'data4' },
                { text: 'Other', dataIndex: 'other' }
            ]
        },
        store: {type: 'browsers'},
        width: '100%'
        //</example>
    }],

    tbar: [
        '->',
        {
            text: 'Preview',
            handler: function() {
                this.up('panel').down('cartesian').preview();
            }
        }
    ]
});
