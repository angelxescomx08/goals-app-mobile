import { Navigate, Outlet } from "react-router";
import { authClient } from "@/lib/auth";

export function PrivateRoute() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <p>Cargando...</p>;

  if (!session) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}
