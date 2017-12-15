import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

export default class extends Component {
  render() {
    return (
        <div style={{height: "100%"}}>
          <Helmet>
            <title>NotFound</title>
            <meta name="description" content="No component found."/>
          </Helmet>


          <div style={{
            display: "inline-block",
            width: "100%",
            height: "100%",
            textAlign: "center"
          }}>
            {/*<div style={{display: "inline-block", verticalAlign: "middle", height: "100%"}}/>*/}
            <div style={{
              display: "inline-block",
              verticalAlign: "middle",
              maxWidth: "256px",
              maxHeight: "256px",
              width: "100%",
              height: "100%",
              paddingBottom: "100px"
            }}>
              <svg xmlns="http://www.w3.org/2000/svg"
                   width="100%"
                   height="100%"
                   fill="#424242"
                   viewBox="0 0 24 24">
                <path
                    d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </div>
            <div style={{display: "inline-block", verticalAlign: "middle", height: "100%"}}/>
          </div>

        </div>
    )
  }
}