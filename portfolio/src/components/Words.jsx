import { Text, TrackballControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Word({ children, ...props }) {
	const color = new THREE.Color();
	const fontProps = {
		font: "VT323", // Font family,
		fontSize: 7,
		letterSpacing: -0.005,
		lineHeight: 2,
		"material-toneMapped": false,
	};
	const ref = useRef();
	const [hovered, setHovered] = useState(false);
	const over = (e) => (e.stopPropagation(), setHovered(true));
	const out = () => setHovered(false);

	// Change the mouse cursor on hover
	useEffect(() => {
		if (hovered) document.body.style.cursor = "pointer";
		return () => (document.body.style.cursor = "auto");
	}, [hovered]);

	// Tie component to the render-loop
	useFrame(({ camera }) => {
		// Make text face the camera
		ref.current.quaternion.copy(camera.quaternion);
		// Animate font color
		ref.current.material.color.lerp(
			color.set(hovered ? "#ED3192" : "white"),
			0.1
		);
	});

	return (
		<Text
			ref={ref}
			onPointerOver={over}
			onPointerOut={out}
			onClick={() => console.log("clicked")}
			{...props}
			{...fontProps}
			children={children}
		/>
	);
}

function Cloud({ count = 4, radius = 20, wordsArray }) {
	const words = useMemo(() => {
		const temp = [];
		const spherical = new THREE.Spherical();
		const phiSpan = Math.PI / (count + 1);
		const thetaSpan = (Math.PI * 2) / count;

		for (let i = 1; i < count + 1; i++) {
			for (let j = 0; j < count; j++) {
				const wordIndex = i * j + j;
				const word = wordsArray[wordIndex % wordsArray.length];
				temp.push([
					new THREE.Vector3().setFromSpherical(
						spherical.set(radius, phiSpan * i, thetaSpan * j)
					),
					word,
				]);
			}
		}
		return temp;
	}, [count, radius, wordsArray]);

	return words.map(([pos, word], index) => (
		<Word key={index} position={pos} children={word} />
	));
}

export default function App() {
	const wordsArray = [
		"design",
		"web",
		"magic",
		"art",
		"create",
		"develop",
		"software",
		"solutions",
		"e-commerce",
		"streaming",
		"digital",
		"modular",
		"javascript",
		"html",
		"css",
		"interactive",
		"innovative",
		"creative",
		"branding",
		"graphics",
		"logos",
		"frontend",
		"backend",
		"coding",
		"programming",
		"development",
		"design",
		"web",
		"magic",
		"art",
		"create",
		"develop",
		"software",
		"solutions",
		"e-commerce",
	];
	const [active, setActive] = useState(null);
	return (
		<Canvas
			onClick={() => setActive((active) => (active ? null : 0))}
			width='100px'
			height='100px'
			dpr={[1, 2]}
			camera={{ position: [0, 0, 35], fov: 90 }}>
			<fog attach='fog' args={["#202025", 0, 80]} />
			<Cloud count={12} radius={30} wordsArray={wordsArray} />
			<TrackballControls onPointerLeave={stop} />
		</Canvas>
	);
}
