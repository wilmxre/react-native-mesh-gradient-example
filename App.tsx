import React from 'react';
import { StyleSheet, View } from 'react-native';
import MeshGradient from './MeshGradient';

const coordinates = {
  x: 0.0,
  y: 0.5,
  z: 1.0
}

export default function App() {
    return (
        <View style={styles.container}>
            <MeshGradient
                style={{}}
                width={400}
                height={400}
                points={[
                    [coordinates.x, coordinates.x], [coordinates.y, 0], [coordinates.z, coordinates.x],
                    [coordinates.x, coordinates.y], [coordinates.y, coordinates.y], [coordinates.z, coordinates.y],
                    [coordinates.x, coordinates.z], [coordinates.y, coordinates.z], [coordinates.z, coordinates.z]
                ]}
                colors={[
                    '#3ff094', '#44dd', '#ff7698',
                    '#FFA500', '#FFFFFF', '#0000FF',
                    '#FFFF00', '#008000', '#F5FFFA'
                ]}
                background="#FFFFFF"
                smoothsColors={true}
                colorSpace='device'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
