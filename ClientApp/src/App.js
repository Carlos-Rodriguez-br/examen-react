import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Shared/Layout';
import CatalogContainer from './components/Catalog/CatalogContainer';
import ChartContainer from './components/Chart/ChartContiner';
import MapContainer from './components/Map/MapContainer';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={CatalogContainer} />
        <Route path='/resume-graphic' component={ChartContainer} />
        <Route path='/map-resume' component={MapContainer} />
      </Layout>
    );
  }
}
