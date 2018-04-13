import React, { Component } from 'react';
import { ARKit } from 'react-native-arkit';

export default class Practice extends Component {
  render() {
    return (
      <ARKit.Group position={this.props.position} eulerAngles={{ y: this.props.rotation, z: Math.PI }}>
        <ARKit.Shape
          scale={0.01}
          material={{ color: '#88e14e' }}
          shape={{
            pathSvg: `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36">
                <path class="st0" d="M13.1 23.1c5.5-.5 9.7-5 10.3-10.3H13.1v10.3z"/>
              </svg>
            `,
            pathFlatness: 0.1,
            extrusion: 10
          }}
          position={{ x: 0, y: 0, z: 0 }}
        />
        <ARKit.Shape
          scale={0.01}
          material={{ color: '#55cdff' }}
          shape={{
            pathSvg: `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36">
                <path class="st0" d="M13.1 10.3h10.3C22.9 4.9 18.6.5 13.1 0v10.3z"/>
              </svg>
            `,
            pathFlatness: 0.1,
            extrusion: 10
          }}
          position={{ x: 0, y: 0, z: 0 }}
        />
        <ARKit.Shape
          scale={0.01}
          material={{ color: '#67b1f9' }}
          shape={{
            pathSvg: `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36">
                <path id="NW-pie-piece" class="st0" d="M10.5,0C5.1,0.5,0.8,4.9,0.3,10.3h10.3V0z"/>
              </svg>
            `,
            pathFlatness: 0.1,
            extrusion: 10
          }}
          position={{ x: 0, y: 0, z: 0 }}
        />
        <ARKit.Shape
          scale={0.01}
          material={{ color: '#fe7777' }}
          shape={{
            pathSvg: `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36">
                <path id="circle" class="st0" d="M10.8,18c0,3-2.4,5.4-5.4,5.4S0,21,0,18s2.4-5.4,5.4-5.4S10.8,15,10.8,18"/>
              </svg>
            `,
            pathFlatness: 0.1,
            extrusion: 10
          }}
          position={{ x: 0, y: 0, z: 0 }}
        />
        <ARKit.Shape
          scale={0.01}
          material={{ color: '#8293b9' }}
          shape={{
            pathSvg: `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36">
                <path id="SW-pie-piece" class="st0" d="M10.5,25.7H0.3c0.5,5.4,4.9,9.7,10.3,10.3V25.7z"/>
              </svg>
            `,
            pathFlatness: 0.1,
            extrusion: 10
          }}
          position={{ x: 0, y: 0, z: 0 }}
        />
      </ARKit.Group>
    );
  }
}
