import Navbar from "@/components/navbar";
import MainPage from "@/components/main-page";
import { Layout } from "antd";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <MainPage />
    </Layout>
  );
}
