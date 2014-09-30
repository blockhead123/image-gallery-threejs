// forked from djankey's "WebGL Carousel  - Three.js" http://jsdo.it/djankey/carousel_webgl
// GLOBALS
var scene, camera, renderer, projector, stats, positions, group, planes, slides, len;
var select = 0;
var tweenTime = 0.8;
var planeSize = 500;
var dx = 300;
var dz = 300;
var show = 2;
var deltaRotation = 45;
var half = 0;
var tweening = false;

function init() {
    // SCENE
    scene = new THREE.Scene();

    // CAMERA
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 20000);
    camera.position.set( 0, 100, 1000 );
    scene.add(camera);

    // RENDERER
    if ( Detector.webgl) {
        renderer = new THREE.WebGLRenderer( {antialias:true} );
    } else {
        renderer = new THREE.CanvasRenderer();
    }

    // CONTAINER
    var container = document.createElement('div');
    document.body.appendChild(container);
    container.appendChild(renderer.domElement);

    // POINT LIGHT
    var light = new THREE.PointLight(0xff0000);
    light.position.set(500, 500, 0);
    scene.add(light);

    // AMBIEND LIGHT
    var ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // AUTHOR
    var info = document.createElement( 'div' );
    info.style.position = 'absolute';
    info.style.top = '5px';
    info.style.width = '100%';
    info.style.textAlign = 'center';
    info.innerHTML = '<a href="https://github.com/blockhead123" target="_blank">blockhead123</a>';
    container.appendChild(info);  
    
     // TOGGLE FULLSCREEN
    var toggle = document.createElement( 'divtoggle' );
    toggle.style.position = 'absolute';
    toggle.style.top = '25px';
    toggle.style.width = '100%';
    toggle.style.textAlign = 'center';
    console.log("window.innerWidth: ", window.innerWidth);
    if(window.innerWidth===465) toggle.innerHTML = '<a href="http://jsdo.it/blockhead123/wPKa/fullscreen" target="_blank">TOGGLE FULLSCREEN</a>';
    else toggle.innerHTML = '<a href="http://jsdo.it/blockhead123/wPKa/fullscreen">TOGGLE FULLSCREEN</a>';
    container.appendChild(toggle);  


    // CAROUSEL GROUP
    group = new THREE.Object3D();
    group.position.y = planeSize/2;
    scene.add(group);

    // PRELOADER
    var preloader = new THREE.Object3D();
    preloader.position.set(0, 100, 0);
    scene.add(preloader);

    var preloaderBg = new THREE.Mesh(new THREE.PlaneGeometry(500, 30, 1, 1), new THREE.MeshBasicMaterial( { color: 0x0f0f2e, transparent:true } ) );
    preloader.add(preloaderBg);

    var preloaderLine = new THREE.Mesh(new THREE.PlaneGeometry(494, 24, 1, 1), new THREE.MeshBasicMaterial( { color: 0x00e5e5, transparent:true } ) );
    preloaderLine.position.set(0, 0, 1);
    preloaderLine.scale.x = 0;
    preloader.add(preloaderLine);


    // IMAGE PRELOADER    
    var manifest = [
        {src:"image1.jpg", id:"image1"},
        {src:"image2.jpg", id:"image2"},
        {src:"image3.jpg", id:"image3"},
        {src:"image4.jpg", id:"image4"},
        {src:"image5.jpg", id:"image5"},
        {src:"image6.jpg", id:"image6"},
        {src:"image7.jpg", id:"image7"},
    ];

    var queue = new createjs.LoadQueue(false, "http://localhost/image-gallery-threejs/src/images/");
    queue.addEventListener("progress", handleImageLoadProgress);
    queue.addEventListener("complete", handleImageLoadComplete);
    queue.addEventListener("fileload", handleImageLoad);
    queue.loadManifest(manifest);

    function handleImageLoadProgress(event) {
        //console.log("progress: "+event.progress);
        TweenMax.to(preloaderLine.scale, 0.5, { x:event.progress});
    }

    function handleImageLoadComplete(event) {
        // all images loaded
        TweenMax.to(preloaderBg.material, 0.5, { opacity:0, delay:0.5});
        TweenMax.to(preloaderLine.material, 0.5, { opacity:0, delay:0.5, onComplete:removePreloader});
        setTimeout(createPlanes, 1000);
    }

    function removePreloader() {
        scene.remove(preloader);
    }

    function handleImageLoad(event) {
         // image loaded
    }

    function createPlanes() {
        len = manifest.length;
        planes = [];
        slides = [];

        half = Math.floor((len - 1) / 2);
        positions = [];
        var i, id = 0, n =  0;
        for (i = select; i < select + len; i++) {
            id = i;
            if (i >= len) id -= len;
            positions[id] = n;
            n++;
        }

        for(i=0;i<len;i++) {
            // texture, material
            slides[i] = {side:1, dif:0, rotation:0};
            var img_texture = new THREE.Texture(queue.getResult(manifest[i].id));
            img_texture.needsUpdate = true;
            var img_material = new THREE.MeshBasicMaterial( { map: img_texture, depthWrite:true, depthTest: true, transparent:true } );

            // mesh / plane
            var plane = new THREE.Mesh(new THREE.PlaneGeometry(planeSize, planeSize), img_material);
            plane.overdraw = true;
            plane.position.x = i * dx;
            group.add(plane);

            planes[i] = plane;
        }

        // MOUSE
        if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);   /** DOMMouseScroll is for mozilla. */
        window.onmousewheel = document.onmousewheel = wheel;                                    /** IE/Opera. */

        document.addEventListener('mousedown', onDocumentMouseDown, false);

        updatePlanes(true);
    }

    function wheel(event) {
        mouseWheel(event);
        event.preventDefault();
    }

    // PROJECTOR
    projector = new THREE.Projector();

    // STATS
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';    
    stats.domElement.style.top = '0px';                //stats.domElement.style.bottom = '0px';
    stats.domElement.style.zIndex = 100;
    container.appendChild( stats.domElement );

    // RESIZE
    window.addEventListener('resize', resizeHandler, false);
    resizeHandler();

    // ANIMATE
    animate();
}

/**
 * Mouse Wheel
 * @param event
 */
function mouseWheel(event) {
    var delta = 0;
    if (!event) event = window.event;   /* IE  */
    if (event.wheelDelta) {             /* IE, Opera. */
        delta = event.wheelDelta/120;
    } else if (event.detail) {          /* Mozilla */
        delta = -event.detail;
    }

    if(delta && tweening===false) gotoDir(delta/Math.abs(delta));
}

/**
 * Go to Direction
 * @param direction
 */
function gotoDir(direction)
{
    select ++;
    if (select >= len) select = 0;

    var id = 0;
    for (var i = 0; i < len; i++) {
        id = positions[i];
        id += direction;

        if (id < 0) id = len - 1;
        else if (id >= len) id -= len;

        positions[i] = id;
    }

    updatePlanes(false);
}

/**
 * Update Planes
 * @param fast
 */
function updatePlanes(fast)
{
    var plane_x, plane_z;
    var tween = true;
    var sAlpha = 1;
    var showDetails;
    var tweenRatio = 1;
    var rot = 0;
    var id = 0;
    var time = tweenTime;

    if (fast===true) time = 0;
    var delayScale = 0;
    if (fast === false) delayScale = 0;

    for (var i = 0; i < len; i++) {
        id = positions[i];
        showDetails = false;

        if (id === 0) {				// selected
            plane_x = id * dx;
            tween = true;
            sAlpha = 1;
            showDetails = true;
            rot = 0;
            slides[i].side = 0;
            slides[i].dif = 0;
        } else if (id <= half) {	// right side
            plane_x = id * dx;

            if (id <= show) sAlpha = 1;
            else sAlpha = 0;

            if (id > show + 3) tween = false;
            else tween = true;

            rot = - id * deltaRotation;

            slides[i].side = 1;
            slides[i].dif = id;
        } else {					// left side
            id = -(id - len);
            plane_x = -id * dx;

            if (id <= show) sAlpha = 1;
            else sAlpha = 0;

            if (id > show + 3) tween = false;
            else tween = true;

            rot = id * deltaRotation;

            slides[i].side = 2;
            slides[i].dif = id;
        }

        if(time!==0) {
            if (tween===true) tweenRatio = 1;
            else tweenRatio = 0;
        }

        plane_z = id * dz;
        planes[i].visible = tween;
        
        TweenMax.to(planes[i].position, time * tweenRatio, { x:plane_x, z:-plane_z, delay:delayScale * id *tweenTime/3});
        TweenMax.to(planes[i].rotation, time * tweenRatio, { y:rot*Math.PI/180, delay:delayScale * id *tweenTime/3});
        TweenMax.to(planes[i].material, time * tweenRatio, { opacity:sAlpha, delay:delayScale * id *tweenTime/3});

        tweening = true;
        setTimeout(resetTween, time*75);
    }
}

function resetTween() {
    tweening = false;
}

function gotoImage(id)
{
    select = id;
    var i, dir;

    if (slides[id].side === 0) {
        console.log("click action");
    } else {
        if (slides[id].side === 1) {
            dir = -1;
        } else {
            dir = 1;
        }

        for (i = 0; i < slides[id].dif; i++) {
            setTimeout(gotoDir, i * 100, dir);
        }
    }
}


function resizeHandler() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function animate() {
    requestAnimationFrame(animate);
    stats.update();
    render();
}

function render() {
    renderer.render( scene, camera );
}

function onDocumentMouseDown(event) {
    event.preventDefault();

    var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );
    projector.unprojectVector( vector, camera );
    var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );
    var intersects = raycaster.intersectObjects( group.children );

    if ( intersects.length > 0 ) {
        for(var i=0;i<len;i++) {
            if(planes[i] === intersects[ 0 ].object) {
                break;
            }
        }

        //select = i;
        if(slides[i].dif<=show) {
            gotoImage(i);
        }
    }
}

// Init
window.addEventListener('load', init, false);
