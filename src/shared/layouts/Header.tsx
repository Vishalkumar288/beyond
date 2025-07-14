import { Link, useLocation } from "react-router-dom";
import AppLogo from "../../assets/icons/Kraken.svg";
import { Settings, User, ShoppingBag, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "marketplace", name: "Marketplace", to: "/marketplace" },
  { id: "myWebsites", name: "My websites", to: "/my-websites" },
  { id: "myOrders", name: "My Orders", to: "/my-orders" },
  { id: "myProjects", name: "My projects", to: "/my-projects" },
  { id: "recievedOrders", name: "Recieved orders", to: "/recieved-orders" }
];

const Header = () => {
  const location = useLocation();
  const isInLocation = location.pathname;

  return (
    <header className="z-[9999] fixed w-full bg-[#FEFEFF] shadow-none border-b border-[#EAEAEA] min-h-[58px] px-[24px]">
      <nav className="container flex h-[58px] items-center justify-between ">
        {/* Left Logo */}
        <div className="flex items-center gap-[8px]">
          <img src={AppLogo} alt="Kraken" className="h-9 w-7" />
          <span className="text-[22px] font-[600] leading-[24.29px] text-[#0F0C1B]">
            Kraken
          </span>
        </div>

        {/* Nav Items */}
        <div className="flex gap-[8px]">
          {navItems.map((item) => {
            const active = isInLocation.includes(item.to);
            return (
              <Button
                key={item.id}
                asChild
                variant="ghost"
                className={`rounded-none h-[58px] font-[500] text-[16px] leading-[24px] border-b-2 px-2 py-[6px] transition-colors duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  active
                    ? "border-[#613FDD] text-[#613FDD] bg-[#613FDD12]"
                    : "border-transparent text-[#0F0C1B]"
                }`}
              >
                <Link to={item.to}>{item.name}</Link>
              </Button>
            );
          })}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <Wallet color="#B3B3B3" />
          <ShoppingBag color="#B3B3B3" />
          <User color="#B3B3B3" />
          <Settings color="#B3B3B3" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
