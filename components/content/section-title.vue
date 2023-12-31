<script setup lang="ts">
const props = defineProps<{
  n?: number;
}>();
</script>

<template>
  <h2 class="text-indigo-950 text-xl font-semibold font-sans my-2">
    <template v-if="n">{{ n }}. </template
    ><ContentSlot :use="$slots.default" unwrap="p" />
  </h2>
</template>
