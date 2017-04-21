import { injectReducer } from '../../store/reducers'

export default (store) => ({
  // path : 'calculator',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Equation = require('./containers/EquationDisplayContainer').default
      const reducer = require('./modules/equationDisplay').default

      /*  Add the reducer to the store on key 'equation'  */
      injectReducer(store, { key: 'equation', reducer })

      /*  Return getComponent   */
      cb(null, Equation)

    /* Webpack named bundle   */
    }, 'equation')
  }
})
