// Wait for the document to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load 3D model
    const loader = new THREE.GLTFLoader();
    loader.load('models/old_computer.glb', function (gltf) {
        const model = gltf.scene;
        scene.add(model);
    });

    // Camera positioning
    camera.position.z = 5;

    // Render loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

    // Get the computer screen element
    const computerScreen = document.getElementById('computerScreen');

    // Add click event listener to computer screen
    computerScreen.addEventListener('click', function() {
        // Get the overlay element
        const overlay = document.getElementById('powershellCommands');
        
        // Toggle display of overlay
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none'; // Hide if already visible
        } else {
            overlay.style.display = 'block'; // Show if hidden
        }
    });
});

