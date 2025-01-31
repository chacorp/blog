
// window.addEventListener('load', init);


// import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';
function rendering() {
    // canvas 엘리먼트 생성
    const canvas = document.createElement('canvas');
    canvas.id='home-canvas'
    document.body.appendChild(canvas);
    
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.width, canvas.height);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1,1000);
    camera.position.z =5;
    
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color:"white" });
    
    const cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);

    function animate() {
    requestAnimationFrame(animate); 
    
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;

    renderer.render(scene,camera); 
    }

    animate(); 
}