<template>
  <HorizontalLine class="mb-4" />
  <footer
    class="flex flex-col-reverse lg:flex-row justify-between text-indigo-950 text-base font-semibold font-sans mb-6"
  >
    <p>Built by Will, designed by Shruti © 2023</p>
    <div class="flex flex-row gap-8 justify-between">
      <p>
        <NuxtLink
          to="https://www.linkedin.com/in/willem-dehaes/?locale=en_US"
          target="_blank"
          >LinkedIn</NuxtLink
        >
      </p>
      <p>
        <NuxtLink to="/pdf/Resume '23 Willem Dehaes.pdf" target="_blank"
          >Resume</NuxtLink
        >
      </p>
      <p><a href="https://github.com/wdehaes">GitHub</a></p>
    </div>
  </footer>
</template>
