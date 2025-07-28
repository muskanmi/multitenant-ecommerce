import { Category } from "@/payload-types";

interface SubCategoryMenuProps {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
}

export const SubCategoryMenu = ({
  category,
  isOpen,
  position,
}: SubCategoryMenuProps) => {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }
};
