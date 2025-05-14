// import "./App.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function App() {
  // 创建一个场景
  const scene = new THREE.Scene();
  // 创建摄像机 (透视相机)
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // 创建渲染器
  const renderer = new THREE.WebGLRenderer();
  // 设置渲染器的大小
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 立方体几何体及材质
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
  });

  // 正二十面体几何体及材质
  const geometry2 = new THREE.IcosahedronGeometry(1);
  const material2 = new THREE.MeshLambertMaterial({
    color: 0x0000ff,
    // specular: 0x4488ee,
    // shininess: 12,
  });

  // 创建网格，并将几何体和材质传递给它
  const cube = new THREE.Mesh(geometry, material);
  const cube2 = new THREE.Mesh(geometry2, material2);

  // 设置正二十面体几何体网格的位置
  cube2.position.x = 1;
  cube2.position.y = 1;

  // 将网格添加到场景中
  scene.add(cube);
  scene.add(cube2);

  // 设置摄像机位置
  camera.position.z = 3;
  camera.position.x = -3;
  camera.position.y = 4;

  //环境光    环境光颜色与网格模型的颜色进行RGB进行乘法运算
  const ambient = new THREE.AmbientLight(0xffffff, 0.1);
  scene.add(ambient);

  //点光源
  const point = new THREE.PointLight(0xffffff);
  point.position.set(3, 3, 3); //点光源位置
  // 通过add方法插入场景中，不插入的话，渲染的时候不会获取光源的信息进行光照计算
  scene.add(point); //点光源添加到场景中

  const sphereSize = 0.5;
  const pointLightHelper = new THREE.PointLightHelper(point, sphereSize);
  scene.add(pointLightHelper);

  // const loader = new GLTFLoader();
  // loader.load("model.glb", (gltf) => {
  //   scene.add(gltf.scene);
  // });

  // 添加坐标轴辅助器
  const axesHelper = new THREE.AxesHelper(20);
  scene.add(axesHelper);

  // 定义一个animate函数，用于动画
  function animate() {
    requestAnimationFrame(animate);
    // 渲染创景和摄像机
    renderer.render(scene, camera);
  }

  // 创建一个鼠标拖拽控制器来控制摄像机视角
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", animate);

  animate();

  return <></>;
}

export default App;
