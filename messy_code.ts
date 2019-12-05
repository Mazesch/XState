import { Machine, State, actions, assign, send, sendParent, interpret, spawn} from 'xstate';

const example1Machine = Machine(
{
	id: 'mainRegion',
	initial: 'green',
	states: {
		green: {
			type: 'atomic',
			id: 'greenState',
			on: {
				TIMER: { target: 'yellow'}
			},
		},
		red: {
			type: 'atomic',
			id: 'redState',
			on: {
				TIMER: { target: 'green'}
			},
		},
		yellow: {
			type: 'atomic',
			id: 'yellowState',
			on: {
				TIMER: { target: 'red'}
			},
		}
	}
});
