(function() {
    var animations = {
        text: 'Animations',
        card: false,
        id: 'animations',
        items: [{
            text: 'Slide',
            id: 'Slide',
            items: [{
                text: 'Slide Left',
                id: 'SlideLeft',
                view: 'SlideLeft',
                card: false,
                animation: {
                    type: 'slide'
                },
                leaf: true
            }, {
                text: 'Slide Right',
                card: false,
                id: 'SlideRight',
                view: 'SlideRight',
                animation: {
                    type: 'slide',
                    direction: 'right'
                },
                leaf: true
            }, {
                text: 'Slide Up',
                card: false,
                id: 'SlideUp',
                view: 'SlideUp',
                animation: {
                    type: 'slide',
                    direction: 'up'
                },
                leaf: true
            }, {
                text: 'Slide Down',
                card: false,
                id: 'SlideDown',
                view: 'SlideDown',
                animation: {
                    type: 'slide',
                    direction: 'down'
                },
                leaf: true
            }]
        }, {
            text: 'Fade',
            id: 'Fade',
            card: false,
            animation: {
                type: 'fade',
                duration: 500
            },
            leaf: true
        }]
    };

    if (!Ext.browser.is.AndroidStock2) {
        animations.items.push({
            text: 'Cover',
            id: 'Cover',
            items: [{
                text: 'Cover Left',
                card: false,
                view: 'CoverLeft',
                id: 'CoverLeft',
                animation: {
                    type: 'cover'
                },
                leaf: true
            }, {
                text: 'Cover Right',
                card: false,
                id: 'CoverRight',
                view: 'CoverRight',
                animation: {
                    type: 'cover',
                    direction: 'right'
                },
                leaf: true
            }, {
                text: 'Cover Up',
                card: false,
                view: 'CoverUp',
                id: 'CoverUp',
                animation: {
                    type: 'cover',
                    direction: 'up'
                },
                leaf: true
            }, {
                text: 'Cover Down',
                card: false,
                id: 'CoverDown',
                view: 'CoverDown',
                animation: {
                    type: 'cover',
                    direction: 'down'
                },
                leaf: true
            }]
        }, {
            text: 'Reveal',
            id: 'Reveal',
            items: [{
                text: 'Reveal Left',
                card: false,
                id: 'RevealLeft',
                view: 'RevealLeft',
                animation: {
                    type: 'reveal'
                },
                leaf: true
            }, {
                text: 'Reveal Right',
                card: false,
                id: 'RevealRight',
                view: 'RevealRight',
                animation: {
                    direction: 'right',
                    type: 'reveal'
                },
                leaf: true
            }, {
                text: 'Reveal Up',
                card: false,
                id: 'RevealUp',
                view: 'RevealUp',
                animation: {
                    direction: 'up',
                    type: 'reveal'
                },
                leaf: true
            }, {
                text: 'Reveal Down',
                card: false,
                id: 'RevealDown',
                view: 'RevealDown',
                animation: {
                    direction: 'down',
                    type: 'reveal'
                },
                leaf: true
            }]
        }, {
            text: 'Pop',
            id: 'Pop',
            card: false,
            animation: {
                type: 'pop'
            },
            leaf: true
        }, {
            text: 'Flip',
            id: 'Flip',
            card: false,
            animation: {
                type: 'flip'
            },
            leaf: true
        });
    }

    var root = {
        id: 'root',
        text: 'Kitchen Sink',
        items: [{
            text: 'User Interface',
            id: 'ui',
            cls: 'launchscreen',
            items: [{
                text: 'Buttons',
                leaf: true,
                id: 'buttons'
            }, {
                text: 'Forms',
                leaf: false,
                id: 'forms',
                items: [{
                    text: 'Form Panel',
                    leaf: true,
                    view: 'FormPanel',
                    id: 'formpanel'
                }, {
                    text: 'Sliders',
                    leaf: true,
                    view: 'Sliders',
                    id: 'sliders'
                }, {
                    text: 'Toolbar Inputs',
                    leaf: true,
                    view: 'ToolbarInput',
                    id: 'toolbarinput'
                }, {
                    text: 'PlaceHolderLabel',
                    leaf: true,
                    view: 'PlaceHolderLabel',
                    id: 'placeholderlabel'
                }]
            }, {
                text: 'DataViews',
                leaf: false,
                id: 'dataviews',
                items: [{
                    text: 'Basic',
                    leaf: true,
                    view: 'BasicDataView',
                    id: 'basicdataview'
                }, {
                    text: 'Horizontal',
                    leaf: true,
                    view: 'HorizontalDataView',
                    id: 'horizontaldataview'
                }, {
                    text: 'Inline',
                    leaf: true,
                    view: 'InlineDataView',
                    id: 'inlinedataview'
                }]
            }, {
                text: 'Lists',
                leaf: false,
                id: 'lists',
                items: [{
                    text: 'Basic',
                    leaf: true,
                    view: 'BasicList',
                    id: 'basiclist'
                }, {
                    text: 'Grouped',
                    leaf: true,
                    view: 'GroupedList',
                    id: 'groupedlist'
                }, {
                    text: 'Disclosure',
                    leaf: true,
                    view: 'DisclosureList',
                    id: 'disclosurelist'
                }]
            }, {
                text: 'Nested List',
                view: 'NestedList',
                leaf: true,
                id: 'nestedlist'
            }, {
                text: 'Icons',
                leaf: true,
                id: 'icons'
            }, {
                text: 'Toolbars',
                leaf: true,
                id: 'toolbars'
            }, {
                text: 'Carousel',
                leaf: true,
                id: 'carousel'
            }, {
                text: 'Tabs',
                leaf: true,
                id: 'tabs'
            }, {
                text: 'Bottom Tabs',
                view: 'BottomTabs',
                leaf: true,
                id: 'bottom-tabs'
            }, {
                text: 'Overlays',
                leaf: true,
                id: 'overlays'
            }, {
                text: 'Menus',
                leaf: true,
                id: 'menus'
            }]
        }]
    };

    root.items.push(animations, {
        text: 'Touch Events',
        id: 'touchevents',
        view: 'TouchEvents',
        leaf: true
    }, {
        text: 'Data',
        id: 'data',
        items: [{
            text: 'Nested Loading',
            view: 'NestedLoading',
            leaf: true,
            id: 'nestedloading'
        }, {
            text: 'JSONP',
            leaf: true,
            id: 'jsonp'
        }, {
            text: 'YQL',
            leaf: true,
            id: 'yql'
        }, {
            text: 'Ajax',
            leaf: true,
            id: 'ajax'
        }]
    }, {
        text: 'Media',
        id: 'media',
        items: [{
            text: 'Video',
            leaf: true,
            id: 'video'
        }, {
            text: 'Audio',
            leaf: true,
            id: 'audio'
        }]
    }, {
        text: 'Themes',
        id: 'theme',
        items: [{
            text: 'Auto Detect',
            view: 'ThemeAuto',
            leaf: true,
            id: 'autotheme'
        }, {
            text: 'BlackBerry 10',
            view: 'ThemeBB',
            leaf: true,
            id: 'bbtheme'
        }, {
            text: 'Cupertino',
            view: 'ThemeCupertino',
            leaf: true,
            id: 'cupertinotheme'
        }, {
            text: 'Cupertino Classic',
            view: 'ThemeCupertinoClassic',
            leaf: true,
            id: 'cupertinoclassictheme'
        }, {
            text: 'Mountain View',
            view: 'ThemeMountainView',
            leaf: true,
            id: 'mountainviewtheme'
        }, {
            text: 'Modern Neptune',
            view: 'ThemeModernNeptune',
            leaf: true,
            id: 'modernneptunetheme'
        }, {
            text: 'Windows',
            view: 'ThemeWindows',
            leaf: true,
            id: 'windowstheme'
        }, {
            text: 'Neptune',
            view: 'ThemeNeptune',
            leaf: true,
            id: 'neptunetheme'
        }, {
            text: 'Neptune Touch',
            view: 'ThemeNeptuneTouch',
            leaf: true,
            id: 'neptunetouchtheme'
        }, {
            text: 'Crisp',
            view: 'ThemeCrisp',
            leaf: true,
            id: 'crisptheme'
        }, {
            text: 'Crisp Touch',
            view: 'ThemeCrispTouch',
            leaf: true,
            id: 'crisptouchtheme'
        }, {
            text: 'Classic',
            view: 'ThemeClassic',
            leaf: true,
            id: 'classictheme'
        }, {
            text: 'Gray',
            view: 'ThemeGray',
            leaf: true,
            id: 'graytheme'
        }]
    }, {
        text: 'Graphics',
        id: 'graphics',
        items: [{
            text: 'Cartesian Charts',
            id: 'CartesianChart',
            items: [{
                text: 'Column Chart',
                view: 'ColumnChart',
                leaf: true,
                id: 'ColumnChart',
                limit: 1
            }, {
                text: 'Area Chart',
                view: 'AreaChart',
                leaf: true,
                id: 'AreaChart',
                limit: 1
            }, {
                text: 'Line Chart (zoomable)',
                view: 'LineChart',
                leaf: true,
                id: 'LineChart',
                limit: 1
            }, {
                text: 'Line Chart (with icons)',
                view: 'LineChartWithMarker',
                leaf: true,
                id: 'LineChartWithMarker',
                limit: 1
            }, {
                text: 'Line Chart (with renderer)',
                view: 'LineChartWithRenderer',
                leaf: true,
                id: 'LineChartWithRenderer',
                limit: 1
            }, {
                text: 'Column Chart (with renderer)',
                view: 'ColumnChartWithRenderer',
                leaf: true,
                id: 'ColumnChartWithRenderer',
                limit: 1
            }, {
                text: 'Bar Chart',
                view: 'BarChart',
                leaf: true,
                id: 'BarChart',
                limit: 1
            }, {
                text: 'Column Chart (stacked)',
                view: 'ColumnChartStacked',
                leaf: true,
                id: 'ColumnChartStacked',
                limit: 1
            }, {
                text: 'Column Chart (3D)',
                view: 'ColumnChart3D',
                leaf: true,
                id: 'ColumnChart3D',
                limit: 1
            }, {
                text: 'Scatter Chart',
                view: 'ScatterChart',
                leaf: true,
                id: 'ScatterChart',
                limit: 1
            }, {
                text: 'Candlestick Chart',
                view: 'CandlestickChart',
                leaf: true,
                id: 'CandlestickChart',
                limit: 1
            }, {
                text: 'OHLC Chart',
                view: 'OHLCChart',
                leaf: true,
                id: 'OHLCChart',
                limit: 1
            }, {
                text: 'Plot Chart',
                view: 'PlotChart',
                leaf: true,
                id: 'PlotChart',
                limit: 1
            }, {
                text: 'Bubble Chart',
                view: 'BubbleChart',
                leaf: true,
                id: 'BubbleChart',
                limit: 1
            }]
        }, {
            text: 'Polar Charts',
            id: 'PolarChart',
            items: [{
                text: 'Pie Chart',
                view: 'PieChart',
                leaf: true,
                id: 'PieChart',
                limit: 1
            }, {
                text: 'Pie Chart (3D)',
                view: 'PieChart3D',
                leaf: true,
                id: 'PieChart3D',
                limit: 1
            }, {
                text: 'Radar Chart',
                view: 'RadarChart',
                leaf: true,
                id: 'RadarChart',
                limit: 1
            }, {
                text: 'Gauge Chart',
                view: 'GaugeChart',
                leaf: true,
                id: 'GaugeChart',
                limit: 1
            }]
        }, {
            text: 'Draw Component',
            id: 'Draw',
            items: [{
                text: 'Touch Paint',
                view: 'FreeDraw',
                leaf: true,
                id: 'FreeDraw',
                limit: 1
            }, {
                text: 'Vector Icons',
                view: 'VectorIcons',
                leaf: true,
                id: 'VectorIcons',
                limit: 1
            }]
        }]
    });

    Ext.define('KitchenSink.store.Demos', {
        alias: 'store.Demos',
        extend: 'Ext.data.TreeStore',
        requires: ['KitchenSink.model.Demo'],

        config: {
            model: 'KitchenSink.model.Demo',
            root: root,
            defaultRootProperty: 'items'
        }
    });
})();