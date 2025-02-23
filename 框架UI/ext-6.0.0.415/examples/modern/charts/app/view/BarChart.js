Ext.define('Charts.view.BarChart', {
    extend: 'Ext.Panel',
    xtype: 'barchart',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.series.Bar',
        'Ext.chart.axis.Category'
    ],

    config: {
        cls: 'card1',
        layout: 'fit',
        items: [
            {
                xtype: 'cartesian',
                store: 'Bar',
                background: 'white',
                flipXY: true,

                colors: [
                    "blue"
                ],

                series: [
                    {
                        type: 'bar',
                        xField: 'name',
                        yField: ['amount']
                    }
                ],
                axes: [
                    {
                        type: 'category',
                        position: 'left',
                        fields: 'name'
                    }
                ]
            }
        ]
    }
});