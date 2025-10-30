// context/AppProviders.jsx
import { OrderProvider } from "./OrderContext";
import { WishlistProvider } from "./WishlistContext";
import { AuthProvider } from "./AuthContext";

export const AppProviders = ({ children }) => (
  <OrderProvider>
    <WishlistProvider>
      <AuthProvider>{children}</AuthProvider>
    </WishlistProvider>
  </OrderProvider>
);
