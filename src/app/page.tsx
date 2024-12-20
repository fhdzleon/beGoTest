import NavBar from "@/components/navBar/NavBar";
import SearchBar from "@/components/searchBar/SearchBar";
import Tabs from "@/components/tabs/Tabs";
import OrderCard from "@/components/orderCard/OrderCard";

export default function Home() {
  return (
    <div className=" flex flex-col px-12 py-12 justify-center">
      <NavBar />
      <Tabs />
      <SearchBar />
      <OrderCard />
    </div>
  );
}
