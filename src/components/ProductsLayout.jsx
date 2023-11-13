import { Filter } from "../Pages/filter";
import { Header } from "./Header";

export const ProductsLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />

      {children}
    </div>
  );
};
