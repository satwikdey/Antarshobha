/**
 * Antarshobha Three.js 3D Elements
 * Sophisticated 3D visual enhancements for Interior Design Studio
 */

// Global Three.js variables
let heroScene, heroCamera, heroRenderer, heroGeometry;
let portfolioScene, portfolioCamera, portfolioRenderer;
let contactScene, contactCamera, contactRenderer;
let animationId;

// Animation parameters
const params = {
    mouseX: 0,
    mouseY: 0,
    windowHalfX: window.innerWidth / 2,
    windowHalfY: window.innerHeight / 2
};

// Initialize all 3D elements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHero3D();
    initPortfolio3D();
    initContact3D();
    initMouseInteraction();
    startAnimation();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
});

// ===========================
// Hero Section 3D Background
// ===========================

function initHero3D() {
    const heroContainer = document.querySelector('.hero');
    if (!heroContainer) return;

    // Create hero 3D container
    const hero3DContainer = document.createElement('div');
    hero3DContainer.id = 'hero-3d';
    hero3DContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
    `;
    heroContainer.appendChild(hero3DContainer);

    // Scene setup
    heroScene = new THREE.Scene();
    
    // Camera setup
    heroCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    heroCamera.position.z = 50;

    // Renderer setup
    heroRenderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true 
    });
    heroRenderer.setSize(window.innerWidth, window.innerHeight);
    heroRenderer.setClearColor(0x000000, 0);
    hero3DContainer.appendChild(heroRenderer.domElement);

    // Create floating geometric elements
    createFloatingGeometry();
    
    // Create particle system
    createParticleSystem();
    
    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    heroScene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xD4AF37, 0.8);
    directionalLight.position.set(50, 50, 50);
    heroScene.add(directionalLight);
}

function createFloatingGeometry() {
    const geometries = [
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.SphereGeometry(1.5, 16, 16),
        new THREE.ConeGeometry(1.5, 3, 8),
        new THREE.OctahedronGeometry(1.8)
    ];

    const materials = [
        new THREE.MeshPhongMaterial({ 
            color: 0xD4AF37, 
            transparent: true, 
            opacity: 0.7,
            shininess: 100
        }),
        new THREE.MeshPhongMaterial({ 
            color: 0x36454F, 
            transparent: true, 
            opacity: 0.6,
            shininess: 80
        }),
        new THREE.MeshPhongMaterial({ 
            color: 0x8FA68E, 
            transparent: true, 
            opacity: 0.8,
            shininess: 90
        })
    ];

    // Create multiple floating objects
    for (let i = 0; i < 12; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = materials[Math.floor(Math.random() * materials.length)].clone();
        
        const mesh = new THREE.Mesh(geometry, material);
        
        // Random positioning
        mesh.position.x = (Math.random() - 0.5) * 80;
        mesh.position.y = (Math.random() - 0.5) * 60;
        mesh.position.z = (Math.random() - 0.5) * 40;
        
        // Random rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        // Store original position for animation
        mesh.userData = {
            originalX: mesh.position.x,
            originalY: mesh.position.y,
            originalZ: mesh.position.z,
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            },
            floatSpeed: Math.random() * 0.02 + 0.01
        };
        
        heroScene.add(mesh);
    }
}

function createParticleSystem() {
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color1 = new THREE.Color(0xD4AF37);
    const color2 = new THREE.Color(0x8FA68E);
    
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Positions
        positions[i3] = (Math.random() - 0.5) * 100;
        positions[i3 + 1] = (Math.random() - 0.5) * 80;
        positions[i3 + 2] = (Math.random() - 0.5) * 60;
        
        // Colors
        const mixedColor = color1.clone().lerp(color2, Math.random());
        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
    }
    
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.5,
        transparent: true,
        opacity: 0.6,
        vertexColors: true,
        blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particles.userData = { isParticleSystem: true };
    heroScene.add(particles);
}

// ===========================
// Portfolio Section 3D Cards
// ===========================

function initPortfolio3D() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach((item, index) => {
        // Create 3D container for each portfolio item
        const canvas3D = document.createElement('div');
        canvas3D.className = 'portfolio-3d';
        canvas3D.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 2;
        `;
        
        const imageContainer = item.querySelector('.portfolio-image');
        imageContainer.style.position = 'relative';
        imageContainer.appendChild(canvas3D);
        
        // Create mini scene for each portfolio item
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        const rect = item.getBoundingClientRect();
        renderer.setSize(350, 250);
        renderer.setClearColor(0x000000, 0);
        canvas3D.appendChild(renderer.domElement);
        
        camera.position.z = 5;
        
        // Create floating frame
        const frameGeometry = new THREE.RingGeometry(1.5, 1.8, 16);
        const frameMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xD4AF37,
            transparent: true,
            opacity: 0.8
        });
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        scene.add(frame);
        
        // Store for animation
        item.userData = {
            scene: scene,
            camera: camera,
            renderer: renderer,
            frame: frame,
            index: index
        };
        
        // Add hover effects
        item.addEventListener('mouseenter', () => {
            frame.scale.set(1.1, 1.1, 1.1);
        });
        
        item.addEventListener('mouseleave', () => {
            frame.scale.set(1, 1, 1);
        });
    });
}

// ===========================
// Contact Section 3D Form
// ===========================

function initContact3D() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    // Create 3D background for contact form
    const contact3DContainer = document.createElement('div');
    contact3DContainer.id = 'contact-3d';
    contact3DContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        pointer-events: none;
    `;
    
    contactForm.style.position = 'relative';
    contactForm.appendChild(contact3DContainer);

    // Scene setup
    contactScene = new THREE.Scene();
    contactCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    contactRenderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true 
    });
    
    const formRect = contactForm.getBoundingClientRect();
    contactRenderer.setSize(formRect.width || 400, formRect.height || 500);
    contactRenderer.setClearColor(0x000000, 0);
    contact3DContainer.appendChild(contactRenderer.domElement);
    
    contactCamera.position.z = 10;

    // Create interactive grid
    createContactGrid();
}

function createContactGrid() {
    const gridSize = 10;
    const spacing = 1;
    
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const geometry = new THREE.SphereGeometry(0.05, 8, 8);
            const material = new THREE.MeshBasicMaterial({ 
                color: 0x8FA68E,
                transparent: true,
                opacity: 0.4
            });
            
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.x = (i - gridSize/2) * spacing;
            sphere.position.y = (j - gridSize/2) * spacing;
            sphere.position.z = 0;
            
            sphere.userData = {
                originalY: sphere.position.y,
                delay: (i + j) * 0.1
            };
            
            contactScene.add(sphere);
        }
    }
}

// ===========================
// Mouse Interaction
// ===========================

function initMouseInteraction() {
    document.addEventListener('mousemove', onDocumentMouseMove);
}

function onDocumentMouseMove(event) {
    params.mouseX = (event.clientX - params.windowHalfX) * 0.05;
    params.mouseY = (event.clientY - params.windowHalfY) * 0.05;
}

// ===========================
// Animation Loop
// ===========================

function startAnimation() {
    animate();
}

function animate() {
    animationId = requestAnimationFrame(animate);
    
    const time = Date.now() * 0.001;
    
    // Animate hero scene
    if (heroScene && heroCamera && heroRenderer) {
        animateHeroScene(time);
        heroRenderer.render(heroScene, heroCamera);
    }
    
    // Animate portfolio items
    animatePortfolioItems(time);
    
    // Animate contact scene
    if (contactScene && contactCamera && contactRenderer) {
        animateContactScene(time);
        contactRenderer.render(contactScene, contactCamera);
    }
}

function animateHeroScene(time) {
    // Camera movement based on mouse
    heroCamera.position.x += (params.mouseX - heroCamera.position.x) * 0.05;
    heroCamera.position.y += (-params.mouseY - heroCamera.position.y) * 0.05;
    heroCamera.lookAt(heroScene.position);
    
    // Animate floating objects
    heroScene.children.forEach(child => {
        if (child.userData && !child.userData.isParticleSystem) {
            // Rotation
            child.rotation.x += child.userData.rotationSpeed.x;
            child.rotation.y += child.userData.rotationSpeed.y;
            child.rotation.z += child.userData.rotationSpeed.z;
            
            // Floating motion
            child.position.y = child.userData.originalY + Math.sin(time * child.userData.floatSpeed) * 2;
            child.position.x = child.userData.originalX + Math.cos(time * child.userData.floatSpeed * 0.7) * 1;
        }
        
        if (child.userData && child.userData.isParticleSystem) {
            child.rotation.y = time * 0.1;
        }
    });
}

function animatePortfolioItems(time) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        if (item.userData && item.userData.scene) {
            const { scene, camera, renderer, frame, index } = item.userData;
            
            // Animate frame rotation
            frame.rotation.z = Math.sin(time + index) * 0.1;
            
            // Render the scene
            renderer.render(scene, camera);
        }
    });
}

function animateContactScene(time) {
    contactScene.children.forEach(child => {
        if (child.userData) {
            child.position.y = child.userData.originalY + 
                Math.sin(time * 2 + child.userData.delay) * 0.3;
            
            // Change opacity based on wave
            child.material.opacity = 0.2 + Math.sin(time * 3 + child.userData.delay) * 0.3;
        }
    });
    
    // Rotate entire contact scene slightly
    contactCamera.position.x = Math.sin(time * 0.5) * 2;
    contactCamera.lookAt(contactScene.position);
}

// ===========================
// Responsive Handling
// ===========================

function onWindowResize() {
    params.windowHalfX = window.innerWidth / 2;
    params.windowHalfY = window.innerHeight / 2;
    
    // Resize hero
    if (heroCamera && heroRenderer) {
        heroCamera.aspect = window.innerWidth / window.innerHeight;
        heroCamera.updateProjectionMatrix();
        heroRenderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    // Resize portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        if (item.userData && item.userData.renderer) {
            item.userData.renderer.setSize(350, 250);
        }
    });
    
    // Resize contact form
    if (contactRenderer) {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            const rect = contactForm.getBoundingClientRect();
            contactRenderer.setSize(rect.width || 400, rect.height || 500);
        }
    }
}

// ===========================
// Loading and Error Handling
// ===========================

// Check if Three.js is loaded
function checkThreeJS() {
    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded. 3D elements will not be displayed.');
        return false;
    }
    return true;
}

// Initialize with error handling
document.addEventListener('DOMContentLoaded', function() {
    if (!checkThreeJS()) {
        return;
    }
    
    try {
        // Small delay to ensure DOM is fully ready
        setTimeout(() => {
            initHero3D();
            initPortfolio3D();
            initContact3D();
            initMouseInteraction();
            startAnimation();
        }, 100);
        
        window.addEventListener('resize', onWindowResize);
        
        console.log('🌟 Three.js 3D elements initialized successfully');
    } catch (error) {
        console.error('Error initializing 3D elements:', error);
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    
    // Dispose of geometries and materials
    if (heroScene) {
        heroScene.children.forEach(child => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) child.material.dispose();
        });
    }
});

// Performance monitoring
let lastFrameTime = 0;
let frameCount = 0;

function monitorPerformance() {
    const now = performance.now();
    frameCount++;
    
    if (now - lastFrameTime >= 1000) {
        const fps = frameCount;
        frameCount = 0;
        lastFrameTime = now;
        
        // Reduce quality if FPS is too low
        if (fps < 30 && heroRenderer) {
            heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
        }
    }
}

// Add performance monitoring to animation loop
const originalAnimate = animate;
animate = function() {
    monitorPerformance();
    originalAnimate();
};

