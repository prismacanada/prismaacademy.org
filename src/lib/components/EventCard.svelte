<script lang="ts">
  export let date: string;
  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let imageAlt: string = '';
  export let learnMoreUrl: string;
</script>

<li class="list-item">
  <div class="w-layout-blockcontainer container-5 w-container">
    <img
      src={imageUrl}
      alt={imageAlt}
      loading="lazy"
      width="Auto"
      height="300"
    />
  </div>
  <div class="w-layout-blockcontainer container-4 w-container">
    <h5>{@html date}</h5>
    <h3>{@html title}</h3>
    <p class="paragraph-8">
      {@html description}
    </p>
    <a href={learnMoreUrl} class="event-learn-more-button">Learn More</a>
  </div>
</li>
