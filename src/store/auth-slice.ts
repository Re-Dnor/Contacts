import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IContacts {
  contactID: string,
  contact: string
}

export interface AuthState {
  authStatus: boolean,
  currentUserId: number | null,
  contacts: IContacts[],
}

interface IUser {
  id: number,
  username: string,
  password: string,
  contacts: IContacts[],
}

interface IPayloadToLogin {
  allUsers: IUser[],
  inputData: {
    username: string,
    password: string,
  }
}

interface IAction {
  payload: IPayloadToLogin
}

interface IActionAddContact {
  payload: IContacts,
}

const initialState: AuthState = {
  authStatus: !!localStorage.getItem('status'),
  currentUserId: null,
  contacts: JSON.parse(localStorage.getItem('contacts') || '{}'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toLogIn: (state, action: IAction) => {
      const { allUsers, inputData } = action.payload;
      const { username, password } = inputData;
      allUsers.forEach((user) => {
        if (user.username === username && user.password === password) {
          state.contacts = user.contacts;
          state.currentUserId = user.id;
          state.authStatus = true;

          localStorage.setItem('status', 'true');
          localStorage.setItem('username', username);
          localStorage.setItem('contacts', JSON.stringify(user.contacts));
        }
      });
    },
    toLogOut: (state) => {
      state.authStatus = false;
      localStorage.removeItem('status');
      localStorage.removeItem('username');
      localStorage.removeItem('contacts');
    },
    addContact: (state, action: IActionAddContact) => {
      if (action.payload.contact.trim()) {
        const newContacts = [...state.contacts, action.payload];
        state.contacts = newContacts;
        localStorage.setItem('contacts', JSON.stringify(newContacts));
      }
    },
    removeContact: (state, action: PayloadAction<string>) => {
      const newContacts = state.contacts.filter((item) => item.contactID !== action.payload);
      state.contacts = newContacts;
      localStorage.setItem('contacts', JSON.stringify(newContacts));
    },
  },
});

export const {
  toLogIn, toLogOut, addContact, removeContact,
} = authSlice.actions;

export default authSlice.reducer;
