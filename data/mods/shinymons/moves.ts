export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
	corrosivejab: {
		num: -1001,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Corrosive Jab",
		pp: 20,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		ignoreImmunity: { 'Poison': true },
		onEffectiveness(typeMod, target, type, move) {
			if (type === 'Steel') return -1;
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Tough",
	},
};
