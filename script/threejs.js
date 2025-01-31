
// window.addEventListener('load', init);


// import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';
function rendering() {
    const canvas = document.createElement('canvas');
    // const canvas = document.createElement('div');
    canvas.id='home-canvas'
    document.body.appendChild(canvas);
    
    // const renderer = new THREE.WebGLRenderer({ alpha:true });
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);
    renderer.setClearColor( 0x000000, 0 );
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1,1000);
    camera.position.z =5;
    
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    
    const cube = new THREE.Mesh(geometry, material);

    const geometry2 = new THREE.BufferGeometry(); 
    const positions = new Float32Array( [
        -1.0, -1.0,  0.0, // v0
         1.0, -1.0,  0.0, // v1
         1.0,  1.0,  0.0, // v2
    
         1.0,  1.0,  0.0, // v3
        -1.0,  1.0,  0.0, // v4
        -1.0, -1.0,  0.0  // v5
    ] );
    // geometry2.setFromPoints(positions);
    geometry2.setAttribute('position', new THREE.Float32BufferAttribute( positions, 3 ) );
    geometry2.computeVertexNormals();
    // geometry2.faces.push( new THREE.Face3( 0, 1, 2 ) );
    // const material2 = new THREE.LineBasicMaterial( { color: 0x00aaff } );
    const object = new THREE.Mesh( geometry2, new THREE.MeshNormalMaterial() );
    // const geometry2 = new THREE.BufferGeometry().setFromPoints( points );
    // const line = new THREE.Line( geometry2, material2 );
    // const poly = new THREE.

    scene.add(cube);
    scene.add(object);
    
    function animate() {
    requestAnimationFrame(animate); 
    
    object.rotation.z +=0.01;

    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;

    renderer.render(scene,camera); 
    }
    // canvas.appendChild( renderer.domElement );
    animate(); 
}