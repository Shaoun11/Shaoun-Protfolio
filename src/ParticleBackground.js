import React from "react";
import Particles from "particles.js"
import ParticleConfig from "./config/particle-config"

export default function ParticleBackground() {
    return (
        <Particles params={ParticleConfig}></Particles>
    );
}

