
import "@/styles/globals.css";
import HomePage from "@/components/HomePage";
import data from "@/data/data.json";

export default function App() {
  return <HomePage data={data.ntru_project} />;
}
