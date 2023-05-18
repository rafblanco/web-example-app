import { useDispatch } from "react-redux";

import { TypedDispatch } from "../store/rootStore";

export const useAppDispatch = () => useDispatch<TypedDispatch>();
