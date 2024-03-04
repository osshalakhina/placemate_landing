import {useSelector} from "react-redux";
import {ApplicationState} from "@/store/reducers";

export function useStore<TSelected = unknown>(
  selector: (state: ApplicationState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
) {
  return useSelector(selector, equalityFn)
}
