import Main from "./(without-auth)/Main";
import { UserStoreProvider } from "../providers/UserProvider";

export default function Home() {
  return (
    <UserStoreProvider>
      <Main />
    </UserStoreProvider>
  );
}
