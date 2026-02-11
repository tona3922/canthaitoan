import { Metadata } from "next";
import Page from "./page"; // import your Demo's page

export const metadata: Metadata = {
  title: "Cân Thái Toàn | Liên hệ",
  description: "Your Description",
};
export default function PageLayout() {
  return <Page />;
}
