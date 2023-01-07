<template>
    <div class="h-screen w-screen grid place-items-center bg-black">
        <button @click="sendMessage" class="bg-purple-500 text-gray-50 font-semibold px-5 py-2 rounded-lg">Click me to send random message</button>
    </div>
</template>

<script setup lang="ts">

const {$io} = useNuxtApp()

onMounted(()=>{
    $io.on('message', (data) => {
        console.log(data)
    })
    $io.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });
})


const sendMessage = () => {
    $io.emit('message', Math.random())
}

</script>

