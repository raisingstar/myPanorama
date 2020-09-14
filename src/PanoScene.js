import * as THREE from 'three'

export default function PanoScene ({texture, radius = 500}) {
  if (!texture) return

  // 初始化经纬球体
  const sphereGeo = new THREE.SphereGeometry(radius, 60, 40)
  // 初始化贴图
  const sphereMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  })
  // 初始化网格体
  const sphere = new THREE.Mesh(sphereGeo, sphereMaterial)
  // 镜像反转网格体
  sphere.scale.x = -1

  return {
    sphere,
    sphereGeo,
    sphereMaterial,
  }
}
