<script setup lang="ts">
const props = defineProps<{
  project: any;
  forceWidth?: number;
}>();

const widthClass = computed(() => {
  switch (props.forceWidth || props.project.width) {
    case 1:
      return "col-span-full lg:col-span-3";
    case 2:
      return "col-span-full lg:col-span-6";
    default:
      return "";
  }
});

const imageName = computed(() => {
  if (
    [
      "educating-tenants",
      "shanghai",
      "the-white-knight",
      "spars-and-ropes",
    ].includes(props.project.id)
  ) {
    return "thumbnail.jpeg";
  }
  return "thumbnail";
});
</script>

<template>
  <div class="flex flex-col mb-4 lg:mb-10" :class="widthClass">
    <NuxtLink :to="`/${project.id}`">
      <ImgC :name="imageName" :project="project.id" bottom-margin="mb-4" />
      <p
        class="text-indigo-950 text-2xl font-extrabold-wide font-sans leading-7 mb-2"
      >
        {{ project.title }}
      </p>
      <p class="text-zinc-700 text-[21px] font-normal font-sans leading-7 mb-2">
        {{ project.description }}
      </p>
      <p class="text-neutral-500 text-base font-light font-sans tracking-wide">
        {{ project.tag.toUpperCase() }}
      </p>
    </NuxtLink>
  </div>
</template>
