<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import EventCard from '$lib/components/EventCard.svelte';
	import { events } from '$lib/data/events';
</script>

<SEO
	title="Events – Prisma Academy"
	description="Join our upcoming events and programs aimed at youth empowerment and community engagement."
	keywords="Prisma Academy events, youth events, workshops, community programs"
	url="https://prismaacademy.org/events"
/>

<div class="section event-3-banner">
	<div class="base-container w-container">
		<div class="banner-event-wrapper">
			<h1 class="light-text">Upcoming and Past Events</h1>
			<p class="paragraph-large banner-event-3-paragraph">
				Stay connected with our community through inspiring events that foster learning, mentorship,
				and collaboration. From career panels and skill workshops to social gatherings, explore
				opportunities to grow, engage, and make an impact.
			</p>
		</div>
	</div>
</div>

<section class="section">
	<div class="w-layout-blockcontainer base-container w-container">
		<ul role="list" class="list">
			{#each events as event}
				<EventCard
					date={event.date}
					title={event.title}
					description={event.description}
					imageUrl={event.imageUrl}
					imageAlt={event.imageAlt}
					learnMoreUrl={event.learnMoreUrl}
				/>
			{/each}
		</ul>
	</div>

	<section>
		<div class="w-layout-blockcontainer base-container w-container">
			<img
				src="images/2nd-gathering.jpg"
				loading="lazy"
				sizes="(max-width: 1439px) 100vw, 1330px"
				srcset="
			images/2nd-gathering-p-500.jpg 500w,
			images/2nd-gathering-p-800.jpg 800w,
			images/2nd-gathering-p-1080.jpg 1080w,
			images/2nd-gathering.jpg 1600w
		  "
				alt="Second Gathering"
			/>
		</div>
	</section>
</section>
