import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { ARKit } from 'react-native-arkit';

import Practice from './Practice';

export default class App extends Component {
  state = {
    objects: [],
    rotation: 0
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ARKit
          style={{ flex: 1 }}
          debug
          // enable plane detection (defaults to Horizontal)
          planeDetection={ARKit.ARPlaneDetection.Horizontal}

          // enable light estimation (defaults to true)
          lightEstimationEnabled
          // get the current lightEstimation (if enabled)
          // it fires rapidly, so better poll it from outside with
          // ARKit.getCurrentLightEstimation()
          onLightEstimation={e => console.log(e.nativeEvent)}

          // event listener for (horizontal) plane detection
          onPlaneDetected={anchor => console.log(anchor)}

          // event listener for plane update
          onPlaneUpdated={anchor => console.log(anchor)}

          // arkit sometimes removes detected planes
          onPlaneRemoved={anchor => console.log(anchor)}

          // event listeners for all anchors, see [Planes and Anchors](#planes-and-anchors)
          onAnchorDetected={anchor => console.log(anchor)}
          onAnchorUpdated={anchor => console.log(anchor)}
          onAnchorRemoved={anchor => console.log(anchor)}

          // you can detect images and will get an anchor for these images
          detectionImages={[{ resourceGroupName: 'DetectionImages' }]}


          onARKitError={console.log} // if arkit could not be initialized (e.g. missing permissions), you will get notified here
        >
          {this.state.objects.map(position => <Practice position={position} rotation={this.state.rotation} />)}
        </ARKit>
      </View>
    );
  }

  componentDidMount() {
    this.seedLogos();
    setInterval(() => this.setState({ rotation: this.state.rotation + Math.PI / 100 }), 50);
  }

  seedLogos() {
    const objects = [];
    for (let i = 0; i < 10; i++) objects.push({ x: Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1), y: Math.random() * 2, z: Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1) });
    this.setState({ objects });
  }
}
AppRegistry.registerComponent('art_museum', () => App);
