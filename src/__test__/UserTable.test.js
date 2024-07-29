



import { render, screen, waitFor } from '@testing-library/react';
import UserTable from '../components/6-UserTable/UserTable';
import fetchMock from 'jest-fetch-mock';


fetchMock.enableMocks();

describe('UserTable', () => {
  beforeEach(() => {
   
    fetch.resetMocks();
  });

  it('fetches and renders a table of users', async () => {
   
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
    ];

   
    fetch.mockResponseOnce(JSON.stringify(mockUsers));

    
    render(<UserTable />);

   
    await waitFor(() => {
      const userRows = screen.getAllByTestId('user-row');
      expect(userRows).toHaveLength(mockUsers.length); 

      
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
