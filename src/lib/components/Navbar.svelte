<script>
	let menuOpen = false;
</script>

<nav class="navbar dark-header w-nav" role="banner">
	<div class="nav-container w-container">
		<div class="nav-menu-wrapper light-bottom">
			<a href="/" class="brand-logo w-nav-brand">
				<img
					src="images/prisma-academy-logo-2.png"
					alt="Prisma Academy Logo"
					class="logo-header"
					height="30"
				/>
			</a>

			<nav role="navigation" class="nav-menu w-nav-menu" class:open={menuOpen}>
				<div class="tablet-menu">
					<a href="/" class="brand-tablet w-nav-brand">
						<img
							src="images/prisma-academy-logo-2.png"
							alt="Logo Dark Text"
							height="30"
							class="logo-header"
						/>
					</a>
					<button class="close-menu-button w-nav-button" on:click={() => (menuOpen = false)}>
						<img src="images/close-btn.svg" alt="Close" class="nav-close-icon" />
					</button>
				</div>

				<div class="menu-wrap">
					<a href="/" class="nav-link white-nav-link w-nav-link">Home</a>
					<a href="/events" class="nav-link white-nav-link w-nav-link">Events</a>
					<a href="/about-us" class="nav-link white-nav-link w-nav-link">About Us</a>
					<div class="search-shop-con desctop-hidden">
						<a href="/contact-us" class="primary-button"
							>Donate<span class="button-arrow"></span></a
						>
					</div>
				</div>
			</nav>

			<div class="search-shop-con">
				<a href="https://linktr.ee/prismaacademy" class="primary-button" target="_blank"
					>Connect with Mentors</a
				>
			</div>

			<button class="menu-button w-nav-button" on:click={() => (menuOpen = !menuOpen)}>
				<img src="images/menu-btn.svg" alt="Menu" height="16" class="image-burger white-burger" />
			</button>
		</div>
	</div>
</nav>
