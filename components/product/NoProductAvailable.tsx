import { ShoppingBag } from "lucide-react";

interface NoProductAvailableProps {
  className?: string;
  selectedTab?: string;
}

const NoProductAvailable = ({ className = "", selectedTab }: NoProductAvailableProps) => {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <ShoppingBag className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No Products Found
      </h3>
      <p className="text-gray-600 max-w-md">
        {selectedTab 
          ? `We couldn't find any products in the ${selectedTab} category. Try adjusting your filters or search terms.`
          : "We couldn't find any products matching your criteria. Try adjusting your filters or search terms."
        }
      </p>
    </div>
  );
};

export default NoProductAvailable;