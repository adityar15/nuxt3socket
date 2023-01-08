<template>
  <Head>
    <Title>Nuxt 3 Websocket</Title>
  </Head>

  <div class="h-screen w-screen grid place-items-center bg-black">
    <span class="flex flex-col items-centers space-y-4">
      <span class="text-gray-100">{{ message }}</span>
      <button @click="sendMessage" class="bg-purple-500 text-gray-50 font-semibold px-5 py-2 rounded-lg">Click me to send random number</button>
    </span>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from "uuid"
const message = ref<string>("")

const { $socket } = useNuxtApp()
 const uid = uuid()

onMounted(() => {
   $socket.onopen = () => {
    localStorage.setItem(`connection-${uid}`, uid)
    $socket.send(uid)
  }

  $socket.onmessage = ({ data }: any) => {
    console.log("data", data)
    message.value = data
  }
  $socket.onclose = function () {
    console.log("disconnected")
  }
})

const sendMessage = () => {
    fetch("/api/sendmessage", {
      method: "POST",
      body: JSON.stringify({ message: Math.random(), sender: localStorage.getItem(`connection-${uid}`) }),
    }).then(res => res.json()).then(data =>{
        console.log("sent")
    })
}
</script>
