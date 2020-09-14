import * as THREE from 'three'
import * as dat from 'dat.gui'
import SceneLoader from './SceneLoader'
import PanoScene from './PanoScene'

window.obj = {
  camerax: 1000,
  cameray: 1000,
  cameraz: 50
}
// DAT.GUI
const gui = new dat.GUI()
gui.add(window.obj, 'camerax').min(-1000).max(1000).name('摄像机X坐标')
gui.add(window.obj, 'cameray').min(-1000).max(1000).name('摄像机Y坐标')
gui.add(window.obj, 'cameraz').min(-1000).max(1000).name('摄像机Z坐标')

const textureImg = '//img30.360buyimg.com/ling/jfs/t1/131926/6/3346/613364/5efafa02Ebba03cb6/4d69dda5786390eb.jpg'

// 贴图加载
new THREE.TextureLoader().load(textureImg, texture => {
  // 场景对象
  const loader = SceneLoader()

  // 球体对象
  const pano = PanoScene({ texture })
  loader.scene.add(pano.sphere)
})
