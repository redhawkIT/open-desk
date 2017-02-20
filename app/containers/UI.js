import React from 'react'
// import 'font-awesome/scss/font-awesome.scss'

import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import NavItems from '../components/NavItems'

module.exports = React.createClass({
  getInitialState: function () {
    return {
      defaultTitle: <span>Open Industry | <em>the open source management platform</em></span>,
      pageTitle: ''
    }
  },

  setTitle: function (page) {
    this.setState({pageTitle: page})
  },

  render () {
    return (
      <div>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <NavigationDrawer
          navItems={NavItems}
          mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
          desktopDrawerType={NavigationDrawer.DrawerTypes.FULL_HEIGHT}
          toolbarTitle={this.state.pageTitle ? this.state.pageTitle : this.state.defaultTitle}
          drawerTitle={<span className='md-text--theme-primary'>Messaging</span>}
        >
          {React.cloneElement(this.props.children, {setTitle: this.setTitle})}
        </NavigationDrawer>
      </div>
    )
  }
})
