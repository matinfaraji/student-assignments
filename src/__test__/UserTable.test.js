

// UserTable.test.jsx

import { render, screen, waitFor } from '@testing-library/react';
import UserTable from '../components/6-UserTable/UserTable';
import fetchMock from 'jest-fetch-mock';

// Enable fetch mocking
fetchMock.enableMocks();

describe('UserTable', () => {
  beforeEach(() => {
    // Clear any previous mock calls
    fetch.resetMocks();
  });

  it('fetches and renders a table of users', async () => {
    // Arrange: Set up mock data
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
    ];

    // Mock the fetch request to return the mock data
    fetch.mockResponseOnce(JSON.stringify(mockUsers));

    // Act: Render the UserTable component
    render(<UserTable />);

    // Assert: Wait for the table rows to appear
    await waitFor(() => {
      const userRows = screen.getAllByTestId('user-row');
      expect(userRows).toHaveLength(mockUsers.length); // Check if the number of rows matches the mock data

      // Verify that each user is rendered correctly
      mockUsers.forEach((user, index) => {
        expect(userRows[index]).toHaveTextContent(user.id.toString());
        expect(userRows[index]).toHaveTextContent(user.name);
        expect(userRows[index]).toHaveTextContent(user.email);
        expect(userRows[index]).toHaveTextContent(user.phone);
      });
    });
  });
});














// // src/UserTable.test.js (or any other appropriate test file)


// import { render, screen } from "@testing-library/react";
// import UserTable from "../components/6-UserTable/UserTable";

// describe("UserTable component", () => {
//   beforeEach(() => {
//     // Mock the fetch request
//     fetch.mockResponseOnce(JSON.stringify([{ id: 1, name: "John", email: "john@example.com", phone: "123-456-7890" }]));
//   });

//   it("fetches and renders a table of users", async () => {
//     render(<UserTable />);

//     // Wait for the data to be fetched and rendered
//     const userRow = await screen.findByTestId("user-row");
//     expect(userRow).toBeInTheDocument();
//   });

//   it("renders rows for each user fetched from the API", async () => {
//     render(<UserTable />);

//     // Wait for the data to be fetched and rendered
//     const userRows = await screen.findAllByTestId("user-row");
//     expect(userRows).toHaveLength(1); // Adjust this based on the actual number of users fetched
//   });
// });
