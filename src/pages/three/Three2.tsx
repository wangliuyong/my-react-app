// import "./App.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function App() {
  // 创建场景
  const scene = new THREE.Scene();
  // 创建照相机
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // 设置摄像机位置
  camera.position.set(-30, 40, 30);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 光源
  function point() {
    const point = new THREE.DirectionalLight(0xffffff);
    point.position.set(80, 100, 80);
    scene.add(point);
  }

  // 立方体
  function cube() {
    // 添加几何体
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(2, 2, 2);
    scene.add(cube);
  }

  cube();
  point();

  // 环境光
  const light = new THREE.AmbientLight(0xffffff, 0.1);
  light.position.set(0, 0, 0);
  scene.add(light);

  // 添加坐标系
  const axes = new THREE.AxesHelper(20);
  scene.add(axes);

  const render = () => {
    renderer.render(scene, camera);
  };
  const controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
  controls.addEventListener("change", render);

  document.body.appendChild(renderer.domElement);
  render();

  return <></>;
}

export default App;
