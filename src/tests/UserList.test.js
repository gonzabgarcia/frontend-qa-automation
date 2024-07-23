import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import UserList from '../components/UserList';
import { expect } from 'chai';
import faker from 'faker';

const mock = new MockAdapter(axios);

describe('UserList Component', () => {
  it('renders users', async () => {
    const fakeUsers = [
      { id: 1, name: faker.name.findName() },
      { id: 2, name: faker.name.findName() }
    ];

    mock.onGet('/api/users').reply(200, fakeUsers);

    render(<UserList />);
    
    const items = await screen.findAllByRole('listitem');
    
    expect(items).to.have.lengthOf(fakeUsers.length);
  });
});