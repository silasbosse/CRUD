<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';
    import { GLTFModel } from '@tresjs/cientos';
    import { OrbitControls } from '@tresjs/cientos'
</script>

<template>

    <TresCanvas class=" bg-primary !fixed -z-40">
        <TresPerspectiveCamera :position="[2.7,1.5,6]"/>
            <OrbitControls />
                <TresMesh :position-y="-1">
                <Suspense>
                    <GLTFModel path="/models/main.glb" draco />
                </Suspense>
                </TresMesh>
    <TresDirectionalLight :position="[4, 8, 4]" :intensity="2.5" />
    </TresCanvas>
    <div class="grid grid-cols-6 grid-rows-6">
        <div class="text-white  tracking-wide font-sans text-7xl col-start-2 row-start-3 select-none">
            <h1>
                <span>Hello</span>
            </h1>
        </div>
    </div>

</template>
