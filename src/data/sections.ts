// The four commentary verticals. Each is a standing beat, not a tag.
//
// A section's `thesis` is the editorial angle — the reason my take on this beat is
// worth more than a summary of the news. Each one names the instrument or first-hand
// position behind it, because commentary with nothing under it reads as commentary
// with nothing under it.
//
// Posts attach with `section:` frontmatter, validated against these slugs.

export interface Section {
	slug: string;
	title: string;
	tagline: string;
	thesis: string[];
}

export const SECTIONS: Section[] = [
	{
		slug: 'intelligence-economy',
		title: 'The Intelligence Economy',
		tagline: 'Compute, capital, energy, and the physical logistics behind the abstraction.',
		thesis: [
			'Most writing about AI treats it as software. It is closer to heavy industry: fabs, substations, water rights, multi-year power contracts, and capital commitments made years before the revenue that justifies them. The interesting questions are about the balance sheet and the grid, not the model card.',
			'What I bring to it is that I can query rather than recall. I run my own financial data lake, so claims about capex, concentration, and who is actually paying for this get checked against data I hold rather than against a headline I remember.',
		],
	},
	{
		slug: 'robotics-and-labor',
		title: 'Robotics and Human Labor',
		tagline: 'What automation can actually reach, and what that does to work.',
		thesis: [
			'Predictions about robots displacing labor are usually made by people who have never had one on their desk failing at something simple. The gap between a demo video and a machine that works unattended in an unstructured room is the whole story, and it is where most forecasts quietly assume the hard part away.',
			'I keep a small robot running locally — voice, vision, motion, entirely on my own hardware. That is not industrial robotics, but it is first-hand contact with the failure modes, which is more than most commentary on this beat has.',
		],
	},
	{
		slug: 'capability-and-the-frontier',
		title: 'Capability and the Frontier',
		tagline: 'What these systems can do, how we would know, and what the benchmarks are hiding.',
		thesis: [
			'Every claim about AGI, ASI, or a model "solving" a domain is downstream of a measurement, and the measurements are in worse shape than the discourse assumes. An audit of ten agentic benchmarks found task-setup or reward-design flaws in all ten, distorting results by up to 100% in both directions. A do-nothing agent passes a large share of one popular benchmark. Labels in the most-cited coding benchmark are unreliable two independent ways.',
			'So this beat reads capability claims the way you would read a study: what was measured, under what scaffold and budget, against what baseline. That discipline is the contribution — not another opinion about how close AGI is.',
		],
	},
	{
		slug: 'the-race',
		title: 'The Race',
		tagline: 'Frontier labs, open versus closed weights, and the regulation arriving around them.',
		thesis: [
			'The open-versus-closed argument is mostly conducted by people with no working relationship to either. I build almost everything against local, open-weight models on my own hardware, by choice, which gives me a concrete stake: when a capable model ships with open weights, my tooling gets better that week, and when one does not, I feel the absence directly.',
			'That is a narrow vantage point and I would rather write from a narrow real one than a wide imagined one. The beat covers what the labs ship, what they claim, and what the rules forming around them would actually bind.',
		],
	},
];

export const SECTION_SLUGS: string[] = SECTIONS.map((s) => s.slug);

const duplicates = SECTION_SLUGS.filter((slug, i) => SECTION_SLUGS.indexOf(slug) !== i);
if (duplicates.length > 0) {
	throw new Error(`Duplicate section slug(s): ${[...new Set(duplicates)].join(', ')}`);
}

const bySlug = new Map(SECTIONS.map((s) => [s.slug, s]));

export function section(slug: string): Section | undefined {
	return bySlug.get(slug);
}
