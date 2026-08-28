// The work map. Deliberately plain: what it is, what state it's in, and a link only
// where there is genuinely something to open.
//
// Every entry here was checked against the repo before being written. Keep it that way —
// a project list that overstates is worse than no project list, because it is the one
// page a reader can trivially fact-check.
//
// `repo` is a GitHub URL for public work, or omitted for private work (say so in `note`
// rather than linking somewhere the reader will hit a 404).

export interface Project {
	name: string;
	blurb: string;
	status: 'active' | 'shipped' | 'paused' | 'planned';
	repo?: string;
	note?: string;
	tags: string[];
}

export const PROJECTS: Project[] = [
	{
		name: 'crossfolio',
		blurb:
			'A neural portfolio allocator where the network outputs an allocation directly and alpha is the loss rather than a prediction target. Pre-registered experiments, purged and embargoed splits, transaction costs, and a single-use holdout — built to find out whether there is an edge, not to demonstrate one.',
		status: 'active',
		repo: 'https://github.com/Aiden-Ferrante/crossfolio',
		tags: ['ml', 'finance', 'evaluation'],
	},
	{
		name: 'manalab',
		blurb:
			'A deckbuilding search over Magic: The Gathering, and a rules engine faithful enough to trust the search results. Notable mostly for what went wrong: three separate retractions, one for variance and two for correctness, all kept in the repo rather than quietly restated.',
		status: 'active',
		note: 'Private for now.',
		tags: ['search', 'simulation', 'evaluation'],
	},
	{
		name: 'stocklake',
		blurb:
			'A keyless financial data lake — Parquet and DuckDB, feeds on a timer — so that a question about markets can be answered by running a query rather than by remembering an article. Feeds crossfolio its price panel.',
		status: 'active',
		note: 'Private for now.',
		tags: ['data-engineering', 'finance'],
	},
	{
		name: 'feedwall',
		blurb:
			'A frontier-awareness instrument: 150 feeds across papers and benchmarks, summarised locally each morning. Built on the premise that awareness which revises nothing is just consumption with extra steps, so the thing it has to produce is a changed position, not a digest.',
		status: 'active',
		note: 'Private for now.',
		tags: ['data-engineering', 'local-llm'],
	},
	{
		name: 'glm-harness',
		blurb:
			'An agent loop written from scratch against a local open-weight model — no framework, standard library only — to find out which parts of an agent framework are essential and which are decoration. Its most useful output so far is a comparison where one model answered fluently and wrongly, and a pass/fail suite would have scored it green.',
		status: 'active',
		note: 'Private for now.',
		tags: ['agents', 'local-llm', 'evaluation'],
	},
	{
		name: 'shipyard',
		blurb:
			'One front end over the tools that already hold the truth, plus a chart of what I am actually trying to do — problems with an observable that says whether each is moving, and a stated condition that would prove it is not.',
		status: 'active',
		note: 'Private for now.',
		tags: ['tooling', 'infrastructure'],
	},
	{
		name: 'Rainbow-Vision',
		blurb:
			'A computer-vision system that watches recorded Rainbow Six Siege footage and turns it into structured game state. Detection is mature; the interpretation layers on top of it are not.',
		status: 'active',
		note: 'Private for now.',
		tags: ['computer-vision'],
	},
	{
		name: 'Benjamin',
		blurb:
			'A Reachy Mini robot tethered to a local workstation, running speech, vision and motion entirely offline with no cloud API in the loop. The reason I have opinions about robotics that are not derived from demo videos.',
		status: 'active',
		note: 'Private for now.',
		tags: ['robotics', 'local-llm'],
	},
	{
		name: 'AI 101',
		blurb:
			'A textbook I am writing in my own words: each section names a canonical text, selects what is worth reading, and the notes are a response to it rather than a summary. Mathematics and programming are drafted; the later sections are still outlines.',
		status: 'active',
		note: 'Private while drafting.',
		tags: ['writing', 'ml'],
	},
	{
		name: 'la4ml',
		blurb:
			'Six NumPy-only linear algebra projects ordered so the last one is a neural network built from nothing but the five before it. Scaffolded, not yet worked.',
		status: 'planned',
		note: 'Private for now.',
		tags: ['math', 'ml'],
	},
];

export const STATUS_LABEL: Record<Project['status'], string> = {
	active: 'active',
	shipped: 'shipped',
	paused: 'paused',
	planned: 'planned',
};
