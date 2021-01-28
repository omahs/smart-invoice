import './App.scss';
import './sass/sharedStyles.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Web3ContextProvider } from './context/Web3Context';
import { CreateInvoice } from './pages/CreateInvoice';
import { FAQ } from './pages/FAQ';
import { Home } from './pages/Home';
import { Invoices } from './pages/Invoices';
import { ViewInvoice } from './pages/ViewInvoice';
import { Layout } from './shared/Layout';

export const App = () => {
  return (
    <div className="app">
      <Web3ContextProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/faq" exact component={FAQ} />
              <Route path="/create-invoice" exact component={CreateInvoice} />
              <Route path="/invoices" exact component={Invoices} />
              <Route path="/invoice/:invoiceId" exact component={ViewInvoice} />
            </Switch>
          </Layout>
        </Router>
      </Web3ContextProvider>
    </div>
  );
};