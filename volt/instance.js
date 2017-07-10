var Volt = (function() {
  var _props = {}

  function set(key, value) {
    _props[key] = value
  }

  function get(key) {
    return _props[key]
  }

  function init(options) {
    console.time()
    VoltState.init()
    var dom = VoltComponent.initMain(options.main)
    var mount = VoltDom.get(options.mount)
    VoltComponent.mountComponent(dom, mount)
    VoltRouter.init()
    console.timeEnd()
  }

  return {
    // Core api
    set: set,
    get: get,
    init: init,

    // State api
    state: VoltState.register,
    sync: VoltState.syncFields,
    getState: VoltState.get,
    setState: VoltState.set,

    // Route api
    route: VoltRouter.register,
    router: VoltRouter.router,
    beforeRoute: VoltRouter.beforeRoute,
    go: VoltRouter.go,

    // Action api
    action: VoltAction.register,
    dispatch: VoltAction.dispatch,

    // Component api
    component: VoltComponent.register,

    // Template api
    template: VoltTemplate.register,

    // Request api
    api: VoltRequest.api,
    request: VoltRequest.register,
    makeRequest: VoltRequest.makeRequest,
    beforeRequest: VoltRequest.beforeRequest,

    // Props api
    PropTypes: VoltProps.PropTypes,

    // Validation api
    validate: function() { return function() {} },
    validator: function(name, opts) {}
  }
})();
