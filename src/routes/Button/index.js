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
      const Button = require('./containers/ButtonContainer').default
      const reducer = require('./modules/button').default

      /*  Add the reducer to the store on key 'button'  */
      injectReducer(store, { key: 'button', reducer })

      /*  Return getComponent   */
      cb(null, Button)

    /* Webpack named bundle   */
    }, 'button')
  }
})