<template>
  <div class="h-screen w-screen grid place-items-center bg-black">
    <span class="flex flex-col items-centers space-y-4">
      <span class="text-gray-100">{{ message }}</span>
      <button @click="sendMessage" class="bg-purple-500 text-gray-50 font-semibold px-5 py-2 rounded-lg">Click me to send random message</button>
    </span>
  </div>
</template>

<script setup lang="ts">
const message = ref<string>("")

const { $ws } = useNuxtApp()

onMounted(() => {
  $ws.onopen = () => {
    console.log("connected")
  }

  $ws.onmessage = ({data} : any) => {
    console.log("data", data)
    message.value = data
  }
  $ws.onclose = function () {
    console.log("disconnected")
  }
})

const sendMessage = () => {
  $ws.send(Math.random()+"")
}
</script>
