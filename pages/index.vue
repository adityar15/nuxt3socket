<template>

  <Head>
    <Title>Nuxt 3 Websocket</Title>
  </Head>


  <div class="h-screen w-screen grid place-items-center bg-black">
    <span class="flex flex-col items-centers space-y-4">
      <span class="text-gray-100">{{ message }}</span>
      <button @click="sendMessage" class="bg-purple-500 text-gray-50 font-semibold px-5 py-2 rounded-lg">Click me to send random message</button>
    </span>
  </div>
</template>

<script setup lang="ts">
const message = ref<string>("")

const { $socket } = useNuxtApp()

onMounted(() => {
  
  console.log("socket", $socket)

  $socket.onopen = () => {
    console.log("connected")
  }

  $socket.onmessage = ({data} : any) => {
    console.log("data", data)
    message.value = data
  }
  $socket.onclose = function () {
    console.log("disconnected")
  }
})

const sendMessage = () => {
  $socket.send(Math.random()+"")
}
</script>
