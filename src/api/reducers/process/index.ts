import { PROCEED_LANDING } from "../../actions/process";

type TProcess = 'landing' | 'main' | undefined;

export default (state: TProcess, { type }: { type: string }) => {
    if (type === PROCEED_LANDING) return 'main';
    return 'landing';
};
