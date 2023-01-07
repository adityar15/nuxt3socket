<template>
    <div class="h-screen w-screen grid place-items-center bg-black">
        <span class="flex flex-col items-centers space-y-4">
            <span class="text-gray-100">{{message}}</span>
            <button @click="sendMessage" class="bg-purple-500 text-gray-50 font-semibold px-5 py-2 rounded-lg">Click me to send random message</button>
        </span>
    </div>
</template>

<script setup lang="ts">

const message = ref<string>('')

const {$io} = useNuxtApp()

onMounted(()=>{
    $io.on('message', (data) => {
        message.value = data
        console.log(data)
    })
    $io.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
    });

  
    $io.on("connect_timeout", (timeout) => {
        $io.connect()
        console.log(`connect_timeout due to ${timeout}ms`);
    });
    $io.on("conenct_failed", (err) => {
        console.log(`conenct_failed due to ${err.message}`);
    });
})


const sendMessage = () => {
    $io.emit('message', Math.random())
}

</script>

