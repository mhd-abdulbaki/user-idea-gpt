import { RootState } from "../../../../lib/store/store";

export const selecteIsOpen = (state: RootState) => state.content.isOpen;
