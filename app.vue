<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { _yellow } from '#tailwind-config/theme/colors'

const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false,
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: _yellow[500] },
  ],
  link: [
    { rel: 'icon', href: '/favicon.svg' },
  ],
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
    class: 'scroll-smooth',
  },
})

useSeoMeta({
  ogType: 'website',
  ogSiteName: seo.siteName,
  twitterCard: 'summary_large_image',
  twitterSite: '@unjsio',
})

provide('navigation', navigation)
</script>

<template>
  <Body>
    <NuxtLoadingIndicator :color="_yellow[500]" />

    <Header />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <Footer />

    <ClientOnly>
      <LazyUDocsSearch v-if="navigation" :files="files" :navigation="navigation" />
    </ClientOnly>

    <UNotifications />
  </Body>
</template>
