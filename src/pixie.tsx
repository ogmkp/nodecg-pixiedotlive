import { h, render } from 'preact'

import PixieOverlay from './themes/pixie'

import './xsplit-api'

if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug')
}

render(<PixieOverlay />, document.getElementById('app')!)
