import React from 'react'
import { useTexture } from '@react-three/drei'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Canvas, useThree, extend } from '@react-three/fiber'
import '../utils/colorMaterial'
// import { Text } from '@react-three/drei'

extend({ OrbitControls })

const OvouCard = () => {
  // const canvasRef = useRef(null)
  // const textureRef = useRef()

  // React.useEffect(() => {
  //   // setup the canvas
  //   const canvas = canvasRef.current
  //   canvas.width = 600
  //   canvas.height = 800
  //   // setup the context for the canvas
  //   const context = canvas.getContext('2d')
  //   // setup the style of the pen
  //   context.lineCap = 'round'
  //   context.strokeStyle = 'black'
  //   context.lineWidth = 5
  //   // store context to contextRef
  //   textureRef.current = context
  // }, [])

  function Cube({ position, args, rotation }) {
    // const front = <Text color="#000">show logo on the front</Text>
    // const back = <Text color="#000">show QRcode on the back</Text>

    const textures = useTexture([
      '/img/logo.png',
      '/img/logo.png',
      '/img/logo.png',
      '/img/logo.png',
      '/img/logo.png',
      '/img/logo.png',
    ])

    return (
      <mesh rotation={rotation} position={position}>
        <boxBufferGeometry attach="geometry" args={args} />
        <meshStandardMaterial attach="material-4" map={textures[0]} transparent />
        <meshStandardMaterial attach="material-1" color="gold" />
        <meshStandardMaterial attach="material-2" color="gold" />
        <meshStandardMaterial attach="material-3" color="gold" />
        <meshStandardMaterial attach="material-0" color="gold" />
        {/* <meshBasicMaterial attach="material-5" color="0xffffff" /> */}
        <meshStandardMaterial attach="material-5" color="black" />
      </mesh>
    )
  }

  function Scene() {
    const {
      camera,
      gl: { domElement },
    } = useThree()
    return (
      <>
        {/* <PerspectiveCamera makeDefault position={[0, 0.3, 5]} /> */}
        <ambientLight />
        <pointLight intensity={0.5} position={[-5, -4, 1]} />

        <Cube position={[0, 0, 0]} args={[3, 1.5, 0.08]} rotation={[0, -0.8, 0]} />
        <Cube position={[0, 1.7, 0]} args={[3, 1.5, 0.08]} />
        <Cube position={[0, -1.7, 0]} args={[3, 1.5, 0.08]} rotation={[0, -Math.PI, 0]} />

        <orbitControls args={[camera, domElement]} />
      </>
    )
  }
  return (
    <>
      <Canvas style={{ border: '1px solid red', height: '100%' }}>
        <Scene />
      </Canvas>
    </>
  )
}

export default OvouCard
