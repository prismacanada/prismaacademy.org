<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
	title="Donate – Support Prisma Academy"
	description="Support our mission to empower youth by donating to Prisma Academy. Every contribution helps."
	keywords="donate to Prisma Academy, youth support, charity, non-profit donations"
	url="https://prismaacademy.org/donate"
/>

<div class="section">
	<div class="base-container w-container">
		<div class="contacts-wrapper-2">
			<div class="half-width-container">
				<img src="images/donation-hero.jpg" class="padded-image" alt="" />
			</div>
			<div class="contacts-content-wrapper-2 padded-div">
				<div data-w-id="bb78cb9c-4786-e83f-44fa-48a0098c31cf" class="title-text">
					<span class="left">/</span>Support Our Mission<span class="right">/</span>
				</div>
				<div class="contacts-title-2">
					<h2 data-w-id="a3e8a7d9-8226-8c66-bfe7-e20268b0023a" class="margin-top---30px">
						Donate and Make a Difference
					</h2>
				</div>
				<p class="align-left">
					Your contribution helps Prisma Academy Foundation continue empowering individuals through
					education, mentorship, and community programs. Every donation fuels innovation, growth,
					and opportunities for those who need it most.
				</p>

				<div class="contacts-detail-wrapper-2">
					<div data-w-id="a3e8a7d9-8226-8c66-bfe7-e20268b0023f" class="contacts-detail-2">
						<h4>How to Donate</h4>
						<p>You can make a donation easily via <strong>Interac e-Transfer</strong> to:</p>
						<div>
							<a href="mailto:donations@prismaacademy.org" class="link-3"
								>donations@prismaacademy.org</a
							>
						</div>
						<p style="margin-top: 10px; font-style: italic;">
							No security question needed. Auto-deposit is enabled.
						</p>
					</div>
				</div>

				<div
					data-w-id="a3e8a7d9-8226-8c66-bfe7-e20268b0024e"
					class="links-contact"
					style="margin-top: 20px;"
				>
					<div class="content-text-contact" style="margin-bottom: 15px;">Other Ways to Support</div>
					<div class="social-icons-wrapper">
						<a
							href="https://www.instagram.com/prisma_academy_foundation/"
							target="_blank"
							class="footer-social-icon"
							aria-label="Visit our Instagram page"
						>
							<i class="fab fa-instagram" aria-hidden="true"></i>
						</a>
						<a
							href="https://www.youtube.com/@Prisma"
							target="_blank"
							class="footer-social-icon"
							aria-label="Visit our YouTube channel"
						>
							<i class="fab fa-youtube" aria-hidden="true"></i>
						</a>
						<a
							href="https://x.com/PrismaAcademy"
							target="_blank"
							class="footer-social-icon"
							aria-label="Visit our X (formerly Twitter) profile"
						>
							<i class="fab fa-x-twitter" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<section class="section without-top-spacing">
	<div class="w-layout-blockcontainer base-container w-container"></div>
</section>

<style>
	.section {
		margin-top: 70px;
	}
	.social-icons-wrapper {
		display: flex;
		gap: 15px;
		background-color: #07232f;
		padding: 12px;
		border-radius: 12px;
		justify-content: center;
		align-items: center;
	}

	.links-contact {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.footer-social-icon {
		color: white; /* Icon color */
		font-size: 24px; /* Adjust icon size */
		text-decoration: none;
	}

	.footer-social-icon:hover {
		color: #1da1f2; /* Optional: hover color */
	}

	.align-left {
		text-align: left;
	}

	.half-width-container {
		margin-top: 45px;
		width: 50%;
	}

	.padded-image {
		padding-left: 20px;
		width: 100%; /* Makes sure the image fits the container */
		height: auto; /* Keep the image proportions */
	}

	.padded-div {
		padding-right: 10px;
	}
</style>
