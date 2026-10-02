import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skills, tools } from "@/data/skills";
import type { Skill } from "@/types";

function SkillGroup({
	title,
	items,
	showIcons = false,
}: {
	title: string;
	items: Skill[];
	showIcons?: boolean;
}) {
	return (
		<div className="grid gap-6 md:grid-cols-12 md:gap-10">
			<h3 className="h3 md:col-span-3">{title}</h3>
			<ul className="grid gap-px border border-line bg-line sm:grid-cols-2 md:col-span-9 lg:grid-cols-3">
				{items.map((item) => (
					<li
						key={item.name}
						className="caption flex items-center gap-3 bg-bg p-5 transition-colors duration-200 hover:bg-invert-bg hover:text-invert-fg md:p-6"
					>
						{showIcons && item.icon ? (
							<Image
								src={item.icon}
								alt={`${item.name} icon`}
								width={150}
								height={150}
								className="w-8 shrink-0 rounded-[4px] object-contain"
							/>
						) : null}
						<span>{item.name}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export function Skills() {
	return (
		<section id="skills" className="section">
			<div className="container-x">
				<Reveal>
					<SectionHeading
						eyebrow="Capabilities"
						title="Skills"
						description="The tools I use daily and the disciplines I bring to every brand project."
					/>
				</Reveal>

				<Reveal className="mt-16 space-y-12">
					<SkillGroup title="Tools" items={tools} showIcons />
					<SkillGroup title="Design Skills" items={skills} />
				</Reveal>
			</div>
		</section>
	);
}
