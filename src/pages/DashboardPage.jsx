import { useLogOutRedirect } from '../hooks';

export const DashboardPage = () => {
  useLogOutRedirect();
  return <div>Dashboard Page</div>;
};
