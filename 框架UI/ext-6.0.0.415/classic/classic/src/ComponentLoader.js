/**
 * This class is used to load content via Ajax into a {@link Ext.Component}. In general 
 * this class will not be instanced directly, rather a loader configuration will be passed to the
 * constructor of the {@link Ext.Component}.
 *
 * ## HTML Renderer
 *
 * By default, the content loaded will be processed as raw html. The response text
 * from the request is taken and added to the component. This can be used in
 * conjunction with the {@link #scripts} option to execute any inline scripts in
 * the resulting content. Using this renderer has the same effect as passing the
 * {@link Ext.Component#html} configuration option.
 *
 * ## Data Renderer
 *
 * This renderer allows content to be added by using JSON data and a {@link Ext.XTemplate}.
 * The content received from the response is passed to the {@link Ext.Component#update} method.
 * This content is run through the attached {@link Ext.Component#tpl} and the data is added to
 * the Component. Using this renderer has the same effect as using the {@link Ext.Component#data}
 * configuration in conjunction with a {@link Ext.Component#tpl}.
 *
 * ## Component Renderer
 *
 * This renderer can only be used with a {@link Ext.container.Container} and subclasses. It allows for
 * Components to be loaded remotely into a Container. The response is expected to be a single/series of
 * {@link Ext.Component} configuration objects. When the response is received, the data is decoded
 * and then passed to {@link Ext.container.Container#method-add}. Using this renderer has the same effect as specifying
 * the {@link Ext.container.Container#cfg-items} configuration on a Container.
 *
 * ## Custom Renderer
 *
 * A custom function can be passed to handle any other special case, see the {@link #renderer} option.
 *
 * ## Example Usage
 *
 *     var cmp = Ext.create('Ext.Component', {
 *         renderTo: Ext.getBody(),
 *         tpl: '{firstName} - {lastName}',
 *         loader: {
 *             url: 'myPage.php',
 *             renderer: 'data',
 *             params: {
 *                 userId: 1
 *             }
 *         }
 *     });
 *
 *     // call the loader manually (or use autoLoad:true instead)
 *     cmp.getLoader().load();
 */
Ext.define('Ext.ComponentLoader', {

    /* Begin Definitions */

    extend: 'Ext.ElementLoader',

    statics: {
        Renderer: {
            Data: function(loader, response, active){
                var success = true;
                try {
                    loader.getTarget().update(Ext.decode(response.responseText));
                } catch (e) {
                    success = false;
                }
                return success;
            },

            Component: function(loader, response, active){
                var success = true,
                    target = loader.getTarget(),
                    items = [];

                //<debug>
                if (!target.isContainer) {
                    Ext.raise({
                        target: target,
                        msg: 'Components can only be loaded into a container'
                    });
                }
                //</debug>

                try {
                    items = Ext.decode(response.responseText);
                } catch (e) {
                    success = false;
                }

                if (success) {
                    target.suspendLayouts();
                    if (active.removeAll) {
                        target.removeAll();
                    }
                    target.add(items);
                    target.resumeLayouts(true);
                }
                return success;
            }
        }
    },

    /* End Definitions */

    /**
     * @cfg {Ext.Component/String} target The target {@link Ext.Component} for the loader.
     * If a string is passed it will be looked up via the id.
     */
    target: null,

    /**
     * @cfg {Boolean/Object} loadOnRender
     * `true` to have the loader make a request when the {@link #target} is rendered. If the target is
     * already rendered, a load will take place immediately.
     * This argument can also be a set of options that will be passed to {@link #method-load} when it is called.
     */
    loadOnRender: false,

    /**
     * @cfg {Boolean/Object} loadMask True or a {@link Ext.LoadMask} configuration to enable masking during loading.
     */
    loadMask: false,

    /**
     * @cfg {Boolean} scripts True to parse any inline script tags in the response. This only used when using the html
     * {@link #renderer}.
     */

    /**
     * @cfg {String/Function} renderer

The type of content that is to be loaded into, which can be one of 3 types:

+ **html** : Loads raw html content, see {@link Ext.Component#html}
+ **data** : Loads raw html content, see {@link Ext.Component#data}
+ **component** : Loads child {Ext.Component} instances. This option is only valid when used with a Container.

Alternatively, you can pass a function which is called with the following parameters.

+ loader - Loader instance
+ response - The server response
+ active - The active request

The function must return false is loading is not successful. Below is a sample of using a custom renderer:

    new Ext.Component({
        loader: {
            url: 'myPage.php',
            renderer: function(loader, response, active) {
                var text = response.responseText;
                loader.getTarget().setHtml('The response is ' + text);
                return true;
            }
        }
    });
     */
    renderer: 'html',

    /**
     * Set a {Ext.Component} as the target of this loader. Note that if the target is changed,
     * any active requests will be aborted.
     * @param {String/Ext.Component} target The component to be the target of this loader. If a string is passed
     * it will be looked up via its id.
     */
    setTarget: function(target) {
        var me = this;

        if (Ext.isString(target)) {
            target = Ext.getCmp(target);
        }

        if (me.target && me.target !== target) {
            me.abort();
        }
        me.target = target;
        if (target && me.loadOnRender) {
            if (target.rendered) {
                me.doLoadOnRender();
            } else {
                me.mon(target, 'render', me.doLoadOnRender, me);
            }
        }
    },

    doLoadOnRender: function() {
        var loadOnRender = this.loadOnRender;
        this.load(Ext.isObject(loadOnRender) ? loadOnRender : null);
    },

    // inherit docs
    removeMask: function(){
        this.target.setLoading(false);
    },

    /**
     * Add the mask on the target
     * @private
     * @param {Boolean/Object} mask The mask configuration
     */
    addMask: function(mask){
        this.target.setLoading(mask);
    },


    setOptions: function(active, options){
        active.removeAll = Ext.isDefined(options.removeAll) ? options.removeAll : this.removeAll;
    },

    /**
     * Gets the renderer to use
     * @private
     * @param {String/Function} renderer The renderer to use
     * @return {Function} A rendering function to use.
     */
    getRenderer: function(renderer){
        if (Ext.isFunction(renderer)) {
            return renderer;
        }

        var renderers = this.statics().Renderer;
        switch (renderer) {
            case 'component':
                return renderers.Component;
            case 'data':
                return renderers.Data;
            default:
                return Ext.ElementLoader.Renderer.Html;
        }
    }
});
