import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import Routes from "./routes/Routes";
import Layout from "./components/layout/Layout";
import './style/override.css'


ReactDOM.render(
    (
        <Layout>
            <Routes/>
        </Layout>
    ),
    document.getElementById('root')
)