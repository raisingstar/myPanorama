import * as THREE from 'three'

// 视野值
const FOV = 70

const setupScene = () => {
  return new THREE.Scene()
}

// 初始化摄像机
const setupCamera = () => {
  const aspectRatio = window.innerWidth / window.innerHeight
  const camera = new THREE.PerspectiveCamera(FOV, aspectRatio, 0.0001, 10000)
  camera.position.set(window.obj.camerax, window.obj.cameray, window.obj.cameraz)

  return camera
}

// 初始化渲染器
const setupRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  return renderer
}

export default function SceneLoader () {
  const scene = setupScene()
  const camera = setupCamera()
  const renderer = setupRenderer()

  const handleResize = () => {
    const {innerWidth, innerHeight} = window

    // 更新渲染器尺寸
    renderer.setSize(innerWidth, innerHeight)

    camera.aspect = innerWidth / innerHeight
    // 更新摄像头参数
    camera.updateProjectionMatrix()
  }

  // 动态渲染
  const loop = () => {
    camera.position.set(window.obj.camerax, window.obj.cameray, window.obj.cameraz)
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
  }

  // 辅助线们
  const axesHelper = new THREE.AxesHelper(1000)
  const cameraHelper = new THREE.CameraHelper(camera)
  const gridHelper = new THREE.GridHelper(1000, 10)

  // 布置场景
  scene.add(axesHelper)
  scene.add(cameraHelper)
  scene.add(gridHelper)

  loop()

  window.addEventListener('resize', handleResize)

  return {
    scene,
    camera,
    renderer,
  }
}
