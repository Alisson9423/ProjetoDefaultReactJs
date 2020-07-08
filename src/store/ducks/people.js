/**
 * Types
 */
export const Types = {
	FILTRO: "FILTRO",
	REQUEST_PEOPLE_LIST: "REQUEST_PEOPLE_LIST",
	SUCCESS_PEOPLE_LIST: "SUCCESS_PEOPLE_LIST",
	FAILUIRE_PEOPLE_LIST: "FAILUIRE_PEOPLE_LIST"
};

/**
 * Reducers
 */
const INTIAL_STATE = {
	data: [],
	loading: false,
	error: false,
	filtro: ""
};

export default function people(state = INTIAL_STATE, action) {
	switch (action.type) {
		case Types.REQUEST_PEOPLE_LIST:
			return { ...state, loading: true };

		case Types.SUCCESS_PEOPLE_LIST:
			return { data: action.data, loading: false, error: false };

		case Types.FAILUIRE_PEOPLE_LIST:
			return { data: [], loading: false, error: true };

		case Types.FILTRO:
			return Object.assign({}, state, { filtro: action.value });
		default:
			return state;
	}
}

/**
 * Actions
 */
export const Creators = {
	filterPeople: value => {
		return {
			type: Types.FILTRO,
			value
		};
	},

	requestPeopeList: () => {
		return {
			type: Types.REQUEST_PEOPLE_LIST
		};
	}
};
