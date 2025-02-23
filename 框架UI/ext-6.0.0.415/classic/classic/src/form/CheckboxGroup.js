/**
 * A {@link Ext.form.FieldContainer field container} which has a specialized layout for arranging
 * {@link Ext.form.field.Checkbox} controls into columns, and provides convenience
 * {@link Ext.form.field.Field} methods for {@link #getValue getting}, {@link #setValue setting},
 * and {@link #validate validating} the group of checkboxes as a whole.
 *
 * # Validation
 *
 * Individual checkbox fields themselves have no default validation behavior, but
 * sometimes you want to require a user to select at least one of a group of checkboxes. CheckboxGroup
 * allows this by setting the config `{@link #allowBlank}:false`; when the user does not check at
 * least one of the checkboxes, the entire group will be highlighted as invalid and the
 * {@link #blankText error message} will be displayed according to the {@link #msgTarget} config.
 *
 * # Layout
 *
 * The default layout for CheckboxGroup makes it easy to arrange the checkboxes into
 * columns; see the {@link #columns} and {@link #vertical} config documentation for details. You may also
 * use a completely different layout by setting the {@link #layout} to one of the other supported layout
 * types; for instance you may wish to use a custom arrangement of hbox and vbox containers. In that case
 * the checkbox components at any depth will still be managed by the CheckboxGroup's validation.
 *
 *     @example
 *     Ext.create('Ext.form.Panel', {
 *         title: 'Checkbox Group',
 *         width: 300,
 *         height: 125,
 *         bodyPadding: 10,
 *         renderTo: Ext.getBody(),
 *         items:[{
 *             xtype: 'checkboxgroup',
 *             fieldLabel: 'Two Columns',
 *             // Arrange checkboxes into two columns, distributed vertically
 *             columns: 2,
 *             vertical: true,
 *             items: [
 *                 { boxLabel: 'Item 1', name: 'rb', inputValue: '1' },
 *                 { boxLabel: 'Item 2', name: 'rb', inputValue: '2', checked: true },
 *                 { boxLabel: 'Item 3', name: 'rb', inputValue: '3' },
 *                 { boxLabel: 'Item 4', name: 'rb', inputValue: '4' },
 *                 { boxLabel: 'Item 5', name: 'rb', inputValue: '5' },
 *                 { boxLabel: 'Item 6', name: 'rb', inputValue: '6' }
 *             ]
 *         }]
 *     });
 */
Ext.define('Ext.form.CheckboxGroup', {
    extend:'Ext.form.FieldContainer',
    mixins: {
        field: 'Ext.form.field.Field'
    },
    alias: 'widget.checkboxgroup',
    requires: [
        'Ext.layout.container.CheckboxGroup',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Base'
    ],

    /**
     * @cfg {String} name
     * @private
     */

    /**
     * @cfg {Ext.form.field.Checkbox[]/Object[]} items
     * An Array of {@link Ext.form.field.Checkbox Checkbox}es or Checkbox config objects to arrange in the group.
     */

    /**
     * @cfg {String/Number/Number[]} columns
     * Specifies the number of columns to use when displaying grouped checkbox/radio controls using automatic layout.
     * This config can take several types of values:
     *
     * - 'auto' - The controls will be rendered one per column on one row and the width of each column will be evenly
     *   distributed based on the width of the overall field container. This is the default.
     * - Number - If you specific a number (e.g., 3) that number of columns will be created and the contained controls
     *   will be automatically distributed based on the value of {@link #vertical}.
     * - Array - You can also specify an array of column widths, mixing integer (fixed width) and float (percentage
     *   width) values as needed (e.g., [100, .25, .75]). Any integer values will be rendered first, then any float
     *   values will be calculated as a percentage of the remaining space. Float values do not have to add up to 1
     *   (100%) although if you want the controls to take up the entire field container you should do so.
     */
    columns : 'auto',

    /**
     * @cfg {Boolean} vertical
     * True to distribute contained controls across columns, completely filling each column top to bottom before
     * starting on the next column. The number of controls in each column will be automatically calculated to keep
     * columns as even as possible. The default value is false, so that controls will be added to columns one at a time,
     * completely filling each row left to right before starting on the next row.
     */
    vertical : false,

    /**
     * @cfg {Boolean} allowBlank
     * False to validate that at least one item in the group is checked. If no items are selected at
     * validation time, {@link #blankText} will be used as the error text.
     */
    allowBlank : true,

    //<locale>
    /**
     * @cfg {String} blankText
     * Error text to display if the {@link #allowBlank} validation fails
     */
    blankText : "You must select at least one item in this group",
    //</locale>

    /**
     * @private
     */
    defaultType : 'checkboxfield',

    /**
     * @private
     */
    groupCls : Ext.baseCSSPrefix + 'form-check-group',

    /**
     * @private
     */
    extraFieldBodyCls: Ext.baseCSSPrefix + 'form-checkboxgroup-body',

    /**
     * @private
     */
    layout: 'checkboxgroup',

    componentCls: Ext.baseCSSPrefix + 'form-checkboxgroup',
    
    ariaRole: 'group',
    ariaEl: 'containerEl',
    
    // Checkbox and radio groups start as valid
    ariaRenderAttributes: {
        'aria-invalid': false
    },

    initComponent: function() {
        var me = this;
        me.callParent();
        me.initField();
    },
    
    initRenderData: function() {
        var me = this,
            data, ariaAttr, boxes, i, len, ids;
        
        data = me.callParent();
        
        // ariaEl is yet a string
        data.inputId = me.id + '-' + me.ariaEl;
        
        ariaAttr = data.ariaAttributes;
        
        if (ariaAttr) {
            boxes = me.getBoxes();
            ids = [];
            
            for (i = 0, len = boxes.length; i < len; i++) {
                ids.push(boxes[i].id + '-inputEl');
            }
            
            ariaAttr['aria-owns'] = ids.join(' ');
        }
        
        return data;
    },
    
    /**
     * Initializes the field's value based on the initial config. If the {@link #value} config is specified then we use
     * that to set the value; otherwise we initialize the originalValue by querying the values of all sub-checkboxes
     * after they have been initialized.
     * @protected
     */
    initValue: function() {
        var me = this,
            valueCfg = me.value;
        me.originalValue = me.lastValue = valueCfg || me.getValue();
        if (valueCfg) {
            me.setValue(valueCfg);
        }
    },

    /**
     * When a checkbox is added to the group, monitor it for changes
     * @param {Object} field The field being added
     * @protected
     */
    onAdd: function(field) {
        var me = this,
            items,
            len, i;

        if (field.isCheckbox) {
            me.mon(field, 'change', me.checkChange, me);
        } else if (field.isContainer) {
            items = field.items.items;
            for (i = 0, len = items.length; i < len; i++) {
                me.onAdd(items[i]);
            }
        }
        me.callParent(arguments);
    },

    onRemove: function(item) {
        var me = this,
            items,
            len, i;

        if (item.isCheckbox) {
            me.mun(item, 'change', me.checkChange, me);
        } else if (item.isContainer) {
            items = item.items.items;
            for (i = 0, len = items.length; i < len; i++) {
                me.onRemove(items[i]);
            }
        }
        me.callParent(arguments);
    },

     /**
      * @private
      * The group value is a complex object, compare using object serialization
      */
    isEqual: function(value1, value2) {
        var toQueryString = Ext.Object.toQueryString;
        return toQueryString(value1) === toQueryString(value2);
    },

    /**
     * Runs CheckboxGroup's validations and returns an array of any errors. The only error by default is if allowBlank
     * is set to false and no items are checked.
     * @return {String[]} Array of all validation errors
     */
    getErrors: function() {
        var errors = [];
        if (!this.allowBlank && Ext.isEmpty(this.getChecked())) {
            errors.push(this.blankText);
        }
        return errors;
    },

    /**
     * @private
     * Returns all checkbox components within the container
     * @param {String} [query] An additional query to add to the selector.
     */
    getBoxes: function(query) {
        return this.query('[isCheckbox]' + (query||''));
    },

    /**
     * @private
     * Convenience function which calls the given function for every checkbox in the group
     * @param {Function} fn The function to call
     * @param {Object} [scope] scope object
     */
    eachBox: function(fn, scope) {
        Ext.Array.forEach(this.getBoxes(), fn, scope || this);
    },

    /**
     * Returns an Array of all checkboxes in the container which are currently checked
     * @return {Ext.form.field.Checkbox[]} Array of Ext.form.field.Checkbox components
     */
    getChecked: function() {
        return this.getBoxes('[checked]');
    },

    /**
     * @private
     */
    isDirty: function(){
        var boxes = this.getBoxes(),
            b ,
            bLen  = boxes.length;

        for (b = 0; b < bLen; b++) {
            if (boxes[b].isDirty()) {
                return true;
            }
        }
    },

    /**
     * @private
     */
    setReadOnly: function(readOnly) {
        var boxes = this.getBoxes(),
            b,
            bLen  = boxes.length;

        for (b = 0; b < bLen; b++) {
            boxes[b].setReadOnly(readOnly);
        }

        this.readOnly = readOnly;
    },

    /**
     * Resets the checked state of all {@link Ext.form.field.Checkbox checkboxes} in the group to their originally
     * loaded values and clears any validation messages.
     * See {@link Ext.form.Basic}.{@link Ext.form.Basic#trackResetOnLoad trackResetOnLoad}
     */
    reset: function() {
        var me = this,
            hadError = me.hasActiveError(),
            preventMark = me.preventMark;
        me.preventMark = true;
        me.batchChanges(function() {
            var boxes = me.getBoxes(),
                b,
                bLen  = boxes.length;

            for (b = 0; b < bLen; b++) {
                boxes[b].reset();
            }
        });
        me.preventMark = preventMark;
        me.unsetActiveError();
        if (hadError) {
            me.updateLayout();
        }
    },

    resetOriginalValue: function(){
        var me    = this,
            boxes = me.getBoxes(),
            b,
            bLen  = boxes.length;

        for (b = 0; b < bLen; b++) {
            boxes[b].resetOriginalValue();
        }

        me.originalValue = me.getValue();
        me.checkDirty();
    },


    /**
     * Sets the value(s) of all checkboxes in the group. The expected format is an Object of name-value pairs
     * corresponding to the names of the checkboxes in the group. Each pair can have either a single or multiple values:
     *
     *   - A single Boolean or String value will be passed to the `setValue` method of the checkbox with that name.
     *     See the rules in {@link Ext.form.field.Checkbox#setValue} for accepted values.
     *   - An Array of String values will be matched against the {@link Ext.form.field.Checkbox#inputValue inputValue}
     *     of checkboxes in the group with that name; those checkboxes whose inputValue exists in the array will be
     *     checked and others will be unchecked.
     *
     * If a checkbox's name is not in the mapping at all, it will be unchecked.
     *
     * An example:
     *
     *     var myCheckboxGroup = new Ext.form.CheckboxGroup({
     *         columns: 3,
     *         items: [{
     *             name: 'cb1',
     *             boxLabel: 'Single 1'
     *         }, {
     *             name: 'cb2',
     *             boxLabel: 'Single 2'
     *         }, {
     *             name: 'cb3',
     *             boxLabel: 'Single 3'
     *         }, {
     *             name: 'cbGroup',
     *             boxLabel: 'Grouped 1'
     *             inputValue: 'value1'
     *         }, {
     *             name: 'cbGroup',
     *             boxLabel: 'Grouped 2'
     *             inputValue: 'value2'
     *         }, {
     *             name: 'cbGroup',
     *             boxLabel: 'Grouped 3'
     *             inputValue: 'value3'
     *         }]
     *     });
     *
     *     myCheckboxGroup.setValue({
     *         cb1: true,
     *         cb3: false,
     *         cbGroup: ['value1', 'value3']
     *     });
     *
     * The above code will cause the checkbox named 'cb1' to be checked, as well as the first and third checkboxes named
     * 'cbGroup'. The other three checkboxes will be unchecked.
     *
     * @param {Object} value The mapping of checkbox names to values.
     * @return {Ext.form.CheckboxGroup} this
     */
    setValue: function(value) {
        var me    = this,
            boxes = me.getBoxes(),
            b,
            bLen  = boxes.length,
            box, name,
            cbValue;

        me.batchChanges(function() {
            Ext.suspendLayouts();
            for (b = 0; b < bLen; b++) {
                box = boxes[b];
                name = box.getName();
                cbValue = false;

                if (value) {
                    if (Ext.isArray(value[name])) {
                        cbValue = Ext.Array.contains(value[name], box.inputValue);
                    } else {
                        // single value, let the checkbox's own setValue handle conversion
                        cbValue = value[name];
                    }
                }

                box.setValue(cbValue);
            }
            Ext.resumeLayouts(true);
        });
        return me;
    },


    /**
     * Returns an object containing the values of all checked checkboxes within the group. Each key-value pair in the
     * object corresponds to a checkbox {@link Ext.form.field.Checkbox#name name}. If there is only one checked checkbox
     * with a particular name, the value of that pair will be the String {@link Ext.form.field.Checkbox#inputValue
     * inputValue} of that checkbox. If there are multiple checked checkboxes with that name, the value of that pair
     * will be an Array of the selected inputValues.
     *
     * The object format returned from this method can also be passed directly to the {@link #setValue} method.
     *
     * NOTE: In Ext 3, this method returned an array of Checkbox components; this was changed to make it more consistent
     * with other field components and with the {@link #setValue} argument signature. If you need the old behavior in
     * Ext 4+, use the {@link #getChecked} method instead.
     */
    getValue: function() {
        var values = {},
            boxes  = this.getBoxes(),
            b,
            bLen   = boxes.length,
            box, name, inputValue, bucket;

        for (b = 0; b < bLen; b++) {
            box        = boxes[b];
            name       = box.getName();
            inputValue = box.inputValue;

            if (box.getValue()) {
                if (values.hasOwnProperty(name)) {
                    bucket = values[name];
                    if (!Ext.isArray(bucket)) {
                        bucket = values[name] = [bucket];
                    }
                    bucket.push(inputValue);
                } else {
                    values[name] = inputValue;
                }
            }
        }

        return values;
    },

    /*
     * Don't return any data for submit; the form will get the info from the individual checkboxes themselves.
     */
    getSubmitData: function() {
        return null;
    },

    /*
     * Don't return any data for the model; the form will get the info from the individual checkboxes themselves.
     */
    getModelData: function() {
        return null;
    },

    validate: function() {
        var me = this,
            errors,
            isValid,
            wasValid;

        if (me.disabled) {
            isValid = true;
        } else {
            errors = me.getErrors();
            isValid = Ext.isEmpty(errors);
            wasValid = me.wasValid;
            if (isValid) {
                me.unsetActiveError();
            } else {
                me.setActiveError(errors);
            }
        }
        if (isValid !== wasValid) {
            me.wasValid = isValid;
            me.fireEvent('validitychange', me, isValid);
            me.updateLayout();
        }

        return isValid;
    }
},
function() {
    this.borrow(Ext.form.field.Base, ['markInvalid', 'clearInvalid', 'setError']);
});

