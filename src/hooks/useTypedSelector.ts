import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "../state/reducers";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
