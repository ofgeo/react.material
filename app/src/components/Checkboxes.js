import React, {Component} from 'react';
import Layout from './shared/Layout'
import {Checkbox} from '@react.material/checkbox'

export default class extends Component {
  render() {
    return (
        <Layout title="Checkbox">
          Checkboxes Demo
          <div>
            <Checkbox/>
          </div>
        </Layout>
    )
  }
}