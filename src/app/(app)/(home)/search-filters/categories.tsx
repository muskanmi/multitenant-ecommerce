import { CategoryDropdown } from "./category-dropdown";
import { CustomCategory } from "../types";
import { useRef } from "react";

interface CategoriesProps {
  data: CustomCategory[];
}

export const Categories = ({ data }: CategoriesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center">
        {data.map((category) => (
          <div key={category.id}>
            <CategoryDropdown
              category={category}
              isActive={false}
              isNavigationHovered={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
