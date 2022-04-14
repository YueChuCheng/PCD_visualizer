import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js';
import React, { useState } from 'react'
import { Scene, PerspectiveCamera } from 'three'


console.log(require('../Zaghetto.pcd'))

const PCDScene = () => {
    const [sceneState] = useState(() => {
        const scene = new Scene();
        const loader = new PCDLoader();
        loader.load(
            // resource URL
            './static/media/Zaghetto.a0f615df8ef7e5415870.pcd',

            // called when the resource is loaded
            function (points) {
                points.geometry.center();
                points.geometry.rotateX(Math.PI);
                points.material.size = 0.001;
                points.material.color.setHex(0xffffff);
                scene.add(points)
            },
        );

        const camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 40);
        camera.position.set(0, 0, 1);
        scene.add(camera);

        return scene
    })

    return (<scene>
        <primitive object={sceneState} />
    </scene>)

}

export default PCDScene