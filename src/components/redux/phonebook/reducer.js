import { combineReducers } from 'redux';
// import { addcontact, deletecontact, setStatusFilter } from './actions';

const contactsInitialState = [
  { id: 0, name: 'Learn', tel: '390553750' },
  { id: 1, name: 'Get', tel: '390553750' },
  { id: 2, name: 'Master', tel: '8508385' },
  { id: 3, name: 'Discover', tel: '8508385' },
  { id: 4, name: 'Buildapps', tel: '8508385' },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addcontact':
      return [...state, action.payload];
    case 'contacts/deletecontact':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filtersInitialState = '';

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

////////////////
