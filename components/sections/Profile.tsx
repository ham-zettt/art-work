import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function Profile() {
	return (
		<section id="profile" className="section">
			<div className="container-x sm: grid gap-12 md:grid-cols-12 md:gap-16">
				<Reveal className="order-first md:order-last md:col-span-5">
					<div className="group relative h-[400px] w-[300px] overflow-hidden border border-line bg-surface md:max-w-none">
						<Image
							src={site.profile.image}
							alt={`Portrait of ${site.name}`}
							fill
							sizes="(min-width: 768px) 40vw, 80vw"
							className="object-cover transition-[filter,transform,translate,scale,rotate] duration-500 ease-expo group-hover:scale-[1.02]"
						/>
					</div>
				</Reveal>

				<div className="md:order-first md:col-span-7">
					<p className="eyebrow text-muted">Profile</p>
					<h2 className="h2 mt-4 max-w-[13ch]">
						{site.profile.title}
					</h2>

					<div className="mt-8 max-w-xl space-y-5">
						{site.profile.paragraphs.map((paragraph) => (
							<p key={paragraph} className="lead text-muted">
								{paragraph}
							</p>
						))}
					</div>

					<dl className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
						{site.stats.map((stat) => (
							<div key={stat.label} className="bg-bg p-6 pr-10">
								<dt className="eyebrow text-muted">
									{stat.label}
								</dt>
								<dd className="h3 mt-3">{stat.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
