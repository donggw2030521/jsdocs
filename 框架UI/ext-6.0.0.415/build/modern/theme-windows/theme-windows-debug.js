Ext.define('Ext.theme.windows.Component', {
    override: 'Ext.Component'
}, function() {
    Ext.namespace('Ext.theme.is').Windows = true;
    Ext.theme.name = 'Windows';
});

Ext.define('Ext.theme.windows.Sheet', {
    override: 'Ext.Sheet',
    config: {
        enter: 'top',
        exit: 'top'
    }
});

Ext.define('Ext.theme.windows.ActionSheet', {
    override: 'Ext.ActionSheet',
    config: {
        top: 0,
        bottom: null
    }
});

Ext.define('Ext.theme.windows.field.Field', {
    override: 'Ext.field.Field',
    config: {
        labelAlign: 'top'
    }
});

Ext.define('Ext.theme.windows.MessageBox', {
    override: 'Ext.MessageBox',
    config: {
        ui: 'light',
        showAnimation: {
            type: 'fadeIn'
        },
        hideAnimation: {
            type: 'fadeOut'
        }
    }
});

Ext.define('Ext.theme.windows.dataview.List', {
    override: 'Ext.dataview.List',
    config: {
        itemHeight: 44
    }
});

Ext.define('Ext.theme.windows.dataview.NestedList', {
    override: 'Ext.dataview.NestedList',
    config: {
        itemHeight: 42
    }
});

Ext.define('Ext.theme.windows.field.Checkbox', {
    override: 'Ext.field.Checkbox',
    config: {
        labelAlign: 'left'
    }
});

Ext.define('Ext.theme.windows.picker.Slot', {
    override: 'Ext.picker.Slot',
    config: {
        title: 'choose an item'
    }
});

Ext.define('Ext.theme.windows.picker.Picker', {
    override: 'Ext.picker.Picker',
    config: {
        height: '100%',
        toolbarPosition: 'bottom',
        toolbar: {
            xtype: 'toolbar',
            layout: {
                type: 'hbox',
                pack: 'center'
            }
        },
        doneButton: {
            iconCls: 'check2',
            ui: 'round',
            text: ''
        },
        cancelButton: {
            iconCls: 'delete',
            ui: 'round',
            text: ''
        }
    }
});

Ext.define('Ext.theme.windows.field.Select', {
    override: 'Ext.field.Select',
    config: {
        pickerSlotAlign: 'left'
    }
});

Ext.define('Ext.theme.windows.picker.Date', {
    override: 'Ext.picker.Date',
    config: {
        doneButton: {
            iconCls: 'check2',
            ui: 'round',
            text: ''
        }
    }
});

Ext.define('Ext.theme.windows.field.Toggle', {
    override: 'Ext.field.Toggle',
    config: {
        labelAlign: 'left'
    }
});

Ext.define('Ext.theme.windows.grid.Grid', {
    override: 'Ext.grid.Grid',
    config: {
        itemHeight: 60
    }
});

