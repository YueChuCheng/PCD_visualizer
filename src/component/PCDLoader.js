import { PCDLoader } from '../jsm/PCDLoader.js';

const loader = new PCDLoader();


console.log(require('../Zaghetto.pcd'))

// // load a resource
// const Pcdloader = () => loader.load('./static/media/Zaghetto.a0f615df8ef7e5415870.pcd', function (points) {

//     // points.geometry.center();
//     // points.geometry.rotateX(Math.PI);
//     return <mesh material={points}><meshBasicMaterial color={0x00ff00} /></mesh>
//     // scene.add(points);

//     // render();

// });
const Pcdloader = () => loader.load(
    // resource URL
    './static/media/Zaghetto.a0f615df8ef7e5415870.pcd',
    // called when the resource is loaded
    function (mesh) {

        // scene.add(mesh);
        return <mesh material={mesh}><meshBasicMaterial color={0x00ff00} /></mesh>

    },
    // called when loading is in progresses
    function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },
    // called when loading has errors
    function (error) {

        console.log('An error happened');

    }
);

export default Pcdloader