// LOADER

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1200);

});



// THREE JS

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(

75,

window.innerWidth/window.innerHeight,

0.1,

1000

);

const renderer=new THREE.WebGLRenderer({

alpha:true

});

renderer.setSize(window.innerWidth,window.innerHeight);

document.getElementById("three-bg").appendChild(renderer.domElement);

const geometry=new THREE.TorusKnotGeometry(8,2,120,16);

const material=new THREE.MeshNormalMaterial({

wireframe:true

});

const knot=new THREE.Mesh(geometry,material);

scene.add(knot);

camera.position.z=25;

function animate(){

requestAnimationFrame(animate);

knot.rotation.x+=0.003;

knot.rotation.y+=0.004;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});