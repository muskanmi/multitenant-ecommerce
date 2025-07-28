import { Category } from "@/payload-types";

interface SubCategoryMenuProps {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
}
