document.addEventListener("DOMContentLoaded", function() {
    const errorMessage = document.getElementById("error-message");
    const gotchaMessage = document.getElementById("gotcha-message");
    const container = document.getElementById("container");
    const commandInput = document.getElementById("command-input");
    const output = document.getElementById("output");

    // Show gotcha message after 2 seconds
    setTimeout(() => {
        errorMessage.style.display = "none";
        gotchaMessage.style.display = "block";
    }, 2000);

    // Show main content after another 2 seconds
    setTimeout(() => {
        gotchaMessage.style.display = "none";
        container.style.display = "block";
        init3DCharacter(); // Initialize the 3D character
    }, 4000);

    // Handle command input
    commandInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const command = commandInput.value.trim().toLowerCase();
            commandInput.value = "";
            processCommand(command);
        }
    });

    function processCommand(command) {
        switch (command) {
            case "help":
                output.innerHTML = "Available commands:<br>hello - friendly greeting<br>ls - list directory contents";
                break;
            case "hello":
                output.innerHTML = "Hello there! How are you doing?";
                break;
            case "ls":
                output.innerHTML = "about, projects, details, skills, contact";
                break;
            default:
                output.innerHTML = `Command not found: ${command}`;
        }
    }

    function init3DCharacter() {
        // Set up the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('character').appendChild(renderer.domElement);

        // Load 3D model (Assuming you have a .glb or .gltf model of Navi)
        const loader = new THREE.GLTFLoader();
        loader.load('path_to_your_model.glb', function(gltf) {
            scene.add(gltf.scene);
            animate();
        });

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
    }
});
