<script setup lang="ts">
    import { TresCanvas } from '@tresjs/core';
    import { GLTFModel } from '@tresjs/cientos';

</script>

<template>
    <TresCanvas class="!fixed">
        <TresPerspectiveCamera :position="[0,1.3,6]"/>

                <TresMesh :position-y="0">
                <Suspense>
                    <GLTFModel path="/models/main.glb" draco />
                </Suspense>
                </TresMesh>
    <TresDirectionalLight :position="[4, 8, 4]" :intensity="2.5" />
    </TresCanvas>
    <div class="grid grid-rows-3 grid-cols-3  ">
        <div class="text-white  tracking-wide font-sans text-7xl col-start-2 row-start-3 select-none">
            <h1>
                <span>Hello</span>
            </h1>
        </div>
    </div>
    <div class="fixed bottom-16 w-full">
        <div class="flex justify-center">
        <div>
            <span class="border-r-4 border-b-4 border-solid rotate-45 w-6 h-6 block">
            </span>
            <span class="border-r-4 border-b-4 border-solid rotate-45 w-6 h-6 block">
            </span>
        </div>
        </div>
    </div>


</template>
