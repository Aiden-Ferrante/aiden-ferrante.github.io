// The public learning map.
//
// Titles mirror node names in the shipyard chart's "AI Technical Skills" branch so
// the two stay legible against each other. Only that branch is published, and only
// the node NAMES — waypoints, falsifiers and soundings stay in the chart.
//
// A node with no post yet renders as plain text. Writing a post with a matching
// `topic:` slug is what lights it up.

export interface TopicNode {
	slug: string;
	title: string;
	blurb?: string;
	children?: TopicNode[];
}

export const LEARNING_MAP: TopicNode[] = [
	{
		slug: 'foundations',
		title: 'Foundations',
		blurb:
			'The mathematics and tooling everything else is built on. Worked as artifacts — code that produces a number — rather than as reading.',
		children: [
			{
				slug: 'linear-algebra-and-calculus',
				title: 'Linear Algebra and Calculus',
				children: [
					{
						slug: 'linear-algebra-for-ml',
						title: 'Linear Algebra for Machine Learning',
						blurb:
							'Six NumPy-only projects, ordered so the last one is a neural network built from nothing but the five before it.',
						children: [
							{ slug: 'rank-and-the-four-subspaces', title: 'Rank and the Four Subspaces' },
							{ slug: 'the-matrix-as-a-representation', title: 'The Matrix as a Representation' },
							{ slug: 'projection-and-least-squares', title: 'Projection and Least Squares' },
							{ slug: 'spectra-and-curvature', title: 'Spectra and Curvature' },
							{ slug: 'svd-and-low-rank-structure', title: 'The SVD and Low-Rank Structure' },
							{ slug: 'backpropagation-as-the-adjoint', title: 'Backpropagation as the Adjoint' },
						],
					},
				],
			},
			{ slug: 'probability-and-statistics', title: 'Probability & Statistics' },
			{ slug: 'python-and-sql', title: 'Python and SQL' },
			{ slug: 'system-taxonomy', title: 'System Taxonomy' },
		],
	},
	{
		slug: 'data-engineering',
		title: 'Data Engineering',
		blurb: 'Getting data from where it lives to where a model can use it, without lying about it on the way.',
		children: [
			{ slug: 'data-ingestion-and-collection', title: 'Data Ingestion and Collection' },
			{ slug: 'storage-architecture', title: 'Storage Architecture' },
			{ slug: 'data-cleaning-and-transformation', title: 'Data Cleaning & Transformation' },
			{ slug: 'feature-engineering', title: 'Feature Engineering' },
			{ slug: 'vector-data-and-embeddings', title: 'Vector Data and Embeddings' },
		],
	},
	{
		slug: 'classic-ml',
		title: 'Classic ML',
		blurb:
			'The methods that predate deep learning and still win on most real problems — and, more importantly, how to know whether a result is real.',
		children: [
			{ slug: 'supervised-regression', title: 'Supervised Learning — Regression' },
			{ slug: 'supervised-classification', title: 'Supervised Learning — Classification' },
			{ slug: 'unsupervised-learning', title: 'Unsupervised Learning' },
			{ slug: 'estimating-performance', title: 'Estimating Performance' },
			{ slug: 'choosing-a-metric', title: 'Choosing a Metric' },
			{ slug: 'the-generalization-problem', title: 'The Generalization Problem' },
		],
	},
	{
		slug: 'deep-learning',
		title: 'Deep Learning',
		blurb: 'From a scalar autograd engine written by hand up to transformers and what is going on inside them.',
		children: [
			{ slug: 'foundations-and-computational-graphs', title: 'Foundations and Computational Graphs' },
			{ slug: 'activation-and-loss-functions', title: 'Activation and Loss Functions' },
			{ slug: 'optimization-algorithms', title: 'Optimization Algorithms' },
			{ slug: 'network-regularization', title: 'Network Regularization' },
			{ slug: 'architectural-families', title: 'Architectural Families' },
			{ slug: 'transformers-and-llms', title: 'Transformer Deep Dive & LLMs' },
			{
				slug: 'nn-zero-to-hero',
				title: 'Neural Networks: Zero to Hero',
				blurb: 'Everything typed from scratch, plus a comparison suite of architectures I designed myself.',
				children: [
					{
						slug: 'training-loop-from-scratch',
						title: 'NN and Training Loop from Scratch',
						children: [
							{ slug: 'scalar-autograd', title: 'Scalar autograd and the computational graph' },
							{ slug: 'vectorized-backward', title: 'Hand-derived vectorized backward' },
							{ slug: 'initialization-and-activation-health', title: 'Initialization and activation health' },
							{ slug: 'optimizer-and-training-loop', title: 'The optimizer and the training loop' },
							{ slug: 'train-val-gap', title: 'Generalization and the train/val gap' },
						],
					},
					{
						slug: 'ml-libraries',
						title: 'Popular ML Libraries',
						children: [
							{ slug: 'numpy-array-thinking', title: 'NumPy and array thinking' },
							{ slug: 'pytorch-tensors-and-autograd', title: 'PyTorch tensors and autograd' },
							{ slug: 'nn-module-optim-dataloader', title: 'nn.Module, optim, and DataLoader' },
							{ slug: 'the-training-harness', title: 'The training harness' },
							{ slug: 'pretrained-models', title: 'Pretrained models via HuggingFace' },
						],
					},
					{
						slug: 'set-of-architectures',
						title: 'A Set of Architectures',
						blurb:
							'An architecture is a hypothesis about the structure of the data. Each one states its assumption first, then gets tested against the same control.',
						children: [
							{ slug: 'dense-baseline', title: 'Dense baseline — the control' },
							{ slug: 'convolutional-networks', title: 'Convolutional networks' },
							{ slug: 'recurrent-networks-and-lstm', title: 'Recurrent networks and LSTM' },
							{ slug: 'transformers', title: 'Transformers' },
							{ slug: 'autoencoders-and-vaes', title: 'Autoencoders and VAEs' },
							{ slug: 'diffusion-models', title: 'Diffusion models' },
							{ slug: 'graph-neural-networks', title: 'Graph neural networks' },
							{ slug: 'mixture-of-experts', title: 'Mixture of experts' },
							{ slug: 'state-space-models', title: 'State space models and Mamba' },
						],
					},
					{
						slug: 'interpretability',
						title: 'Interpretability',
						blurb: 'Looking inside a model I trained myself, rather than taking its output on trust.',
						children: [
							{ slug: 'linear-probing', title: 'Linear probing for features' },
							{ slug: 'the-logit-lens', title: 'The logit lens' },
							{ slug: 'activation-patching', title: 'Activation patching' },
							{ slug: 'sparse-autoencoders', title: 'Sparse autoencoders' },
						],
					},
				],
			},
		],
	},
	{
		slug: 'agentic-ai',
		title: 'Agentic AI',
		blurb:
			'Systems that use tools and act in a loop. The area I have spent the most build time in, and the one where the published claims hold up worst.',
		children: [
			{ slug: 'reasoning-frameworks', title: 'Reasoning Frameworks' },
			{ slug: 'tool-execution', title: 'Tool Execution & Function Calling' },
			{ slug: 'memory-architectures', title: 'Memory Architectures' },
			{ slug: 'multi-agent-orchestration', title: 'Multi-Agent Orchestration' },
			{ slug: 'evaluation-and-observability', title: 'Evaluation & Observability' },
		],
	},
];

export function flattenTopics(nodes: TopicNode[] = LEARNING_MAP): TopicNode[] {
	return nodes.flatMap((node) => [node, ...flattenTopics(node.children ?? [])]);
}

export const TOPIC_SLUGS: string[] = flattenTopics().map((node) => node.slug);

// A duplicate slug would silently attach one node's posts to another, so fail the build.
const duplicates = TOPIC_SLUGS.filter((slug, i) => TOPIC_SLUGS.indexOf(slug) !== i);
if (duplicates.length > 0) {
	throw new Error(`Duplicate topic slug(s) in the learning map: ${[...new Set(duplicates)].join(', ')}`);
}

const titles = new Map(flattenTopics().map((node) => [node.slug, node.title]));

export function topicTitle(slug: string): string | undefined {
	return titles.get(slug);
}
