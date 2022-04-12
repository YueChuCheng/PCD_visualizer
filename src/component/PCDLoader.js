import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader';


const loader = new PCDLoader();




// load a resource
const Pcdloader = () => loader.load('./pcd_data/Zaghetto.pcd', function (points) {
    console.log(points)
    points.geometry.center();
    points.geometry.rotateX(Math.PI);
    return <mesh material={points}><meshBasicMaterial color={0x00ff00} /></mesh>
    // scene.add(points);

    // render();

});
// const Pcdloader = () => loader.load(
//     // resource URL
//     './pcd_data/Zaghetto.pcd',
//     // called when the resource is loaded
//     function (mesh) {

//         scene.add(mesh);
//         // return <mesh material={mesh}><meshBasicMaterial color={0x00ff00} /></mesh>

//     },
//     // called when loading is in progresses
//     function (xhr) {

//         console.log((xhr.loaded / xhr.total * 100) + '% loaded');

//     },
//     // called when loading has errors
//     function (error) {

//         console.log('An error happened');

//     }
// );

export default Pcdloader