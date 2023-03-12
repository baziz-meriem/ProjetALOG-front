import DashboardLayout from "@/components/layout/DashboardLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}
