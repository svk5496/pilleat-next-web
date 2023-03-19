import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const TOKEN = "authorization";

// export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));

// export const logUserIn = (token: any) => {
//   localStorage.setItem(TOKEN, token);
//   isLoggedInVar(true);
// };
// export const logUserOut = () => {
//   localStorage.removeItem(TOKEN);
//   isLoggedInVar(false);
//   window.location.reload();
// };

export const darkModeVar = makeVar(false);

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://pilleat-backend.herokuapp.com/graphql"
      : "http://localhost:4000/graphql",
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem(TOKEN),
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
