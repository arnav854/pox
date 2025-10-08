import Beams from "../components/Beams"

export default function LandingPage() {
    return (
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
        />
        </div>
    )
}