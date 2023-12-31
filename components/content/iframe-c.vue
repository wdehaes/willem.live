<script setup lang="ts">
const props = defineProps<{
  src: string;
}>();
</script>

<template>
  <iframe :src="src" width="100%" height="400px"></iframe>
</template>
