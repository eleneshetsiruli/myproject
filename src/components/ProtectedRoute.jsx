import { Navigate, Outlet } from "react-router-dom";
import { ProductsLayout } from "./ProductsLayout";
import useAuth from "../hooks/Use.Auth";

const ProtectedRoute = () => {
  const {
    auth: { isAuthed },
  } = useAuth();

  if (!isAuthed) {
    return <Navigate to={"/login"} />;
  }

  return (
    <ProductsLayout>
      <Outlet />
    </ProductsLayout>
  );
};
export default ProtectedRoute;
