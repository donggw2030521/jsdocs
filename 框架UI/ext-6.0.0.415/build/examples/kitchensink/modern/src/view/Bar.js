/**
 * Demonstrates how to use Ext.chart.BarChart
 */
Ext.define('KitchenSink.view.BarChart', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.chart.CartesianChart', 
        'Ext.chart.interactions.PanZoom',
        'Ext.chart.series.Bar', 
        'Ext.chart.axis.Numeric', 
        'Ext.chart.axis.Category'
    ],

    controller: {
        type: 'chart',
        defaultVisibleRange: {
            left: [0, 1]
        }
    },

    layout: 'fit',
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        cls: 'charttoolbar',
        items: [{
            xtype: 'spacer'
        }, {
            iconCls: 'settings',
            text: 'Theme',
            handler: 'onThemeChange'
        }, {
            iconCls: 'refresh',
            text: 'Refresh',
            handler: function() {
                Ext.getStore('Pie').generateData(15);
            }
        }, {
            text: 'Reset',
            handler: 'onReset'
        }]
    }, {
        xtype: 'cartesian',
        store: 'Pie',
        background: 'white',
        flipXY: true,
        interactions: [{
            type: 'panzoom'
        }, {
            type: 'itemhighlight'
        }],
        series: [{
            type: 'bar',
            xField: 'name',
            yField: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'],
            highlightCfg: {
                strokeStyle: 'red',
                lineWidth: 3
            },
            style: {
                lineWidth: 2,
                maxBarWidth: 30,
                stroke: 'rgb(40,40,40)'
            }
        }],
        axes: [{
            type: 'numeric',
            position: 'bottom',
            fields: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'],
            grid: {
                even: {
                    lineWidth: 1
                },
                odd: {
                    stroke: '#fff'
                }
            },
            label: {
                rotate: {
                    degrees: -30
                }
            },
            maxZoom: 1
        }, {
            type: 'category',
            position: 'left',
            fields: 'name',
            maxZoom: 4
        }]
    }],

    initialize: function() {
        this.callParent();
        Ext.getStore('Pie').generateData(15);
        var toolbar = Ext.ComponentQuery.query('toolbar', this)[0],
            interaction = Ext.ComponentQuery.query('interaction', this)[0];
        if (toolbar && interaction && !interaction.isMultiTouch()) {
            toolbar.add(interaction.getModeToggleButton());
        }
    },

    refreshData: function() {
        
    }
});