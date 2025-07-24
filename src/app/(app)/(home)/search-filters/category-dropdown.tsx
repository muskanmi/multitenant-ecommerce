import { Button } from "@/components/ui/button";
import { Category } from "@/payload-types";

interface Props {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: Props) => {
  return <Button>{category.name}</Button>;
};
