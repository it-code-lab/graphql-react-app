import { useQuery, gql } from "@apollo/client";

const GET_BOOK_BY_ID  = gql`
query GetBookById($id: ID) {
  bookById(id: $id) {
    id
    name
    author {
      id
      firstName
      lastName
    }
  }
}
`;

function DisplayBook() {
  const { loading, error, data } = useQuery(GET_BOOK_BY_ID, {
    variables: { id: "1" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const book = data.bookById;

  return (
    <div>
      <h2>Book Details</h2>
      <p>Title: {book.name}</p>
      <p>Author: {book.author.firstName} {book.author.lastName}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <br />
      <DisplayBook />
    </div>
  );
}
