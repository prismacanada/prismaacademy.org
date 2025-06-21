<script lang="ts">
  const base = "https://prismaacademy.org";
  export let title: string;
  export let description: string;
  export let keywords: string;
  export let url: string;
  export let image: string = `${base}/images/prisma-og-default.png`;
  export let canonical: string = url;
  
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={image} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />

  <!-- Canonical -->
  <link rel="canonical" href={canonical} />
</svelte:head>
