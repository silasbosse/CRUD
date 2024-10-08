<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';
    import { GLTFModel } from '@tresjs/cientos';
    import { OrbitControls } from '@tresjs/cientos'
</script>

<template>
    <TresCanvas clear-color="black">
        <TresPerspectiveCamera :position="[1,2,6]"/>
        <OrbitControls />
        <Suspense>
      <GLTFModel path="/models/main.glb" draco />
    </Suspense>
    <TresDirectionalLight :position="[4, 8, 4]" :intensity="2.5" />
    </TresCanvas>

</template>
