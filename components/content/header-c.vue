<template>
  <header class="flex flex-row justify-center">
    <div class="flex flex-col basis-8/12 grow lg:grow-0">
      <slot name="image" />
      <HorizontalLine class="mb-3" />
      <h1
        class="text-indigo-950 text-2xl font-extrabold font-sans leading-7 mb-3"
      >
        <slot name="title" />
      </h1>
      <div
        class="text-zinc-700 text-[21px] font-normal font-sans leading-7 mb-3"
      >
        <slot name="description" />
      </div>
      <div class="text-neutral-500 text-base font-light font-sans mb-12">
        <slot name="tag" />
      </div>
    </div>
  </header>
</template>
