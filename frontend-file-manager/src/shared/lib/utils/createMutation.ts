import {combine, Effect, restore} from "effector";
import {Equal, useUnit} from "effector-react";

export interface IStoreStatus<Res> {
    isLoading: boolean;
    error: Error | null;
    data: Res | null;
}

export const createMutation = <Req, Res>(effect: Effect<Req, Res>,
                                                                    // $store?: Store<Res>
): [Equal<Req, void> extends true ? () => Promise<Res> : (payload: Req) => Promise<Res>, IStoreStatus<Res>] => {

    const $storeStatus = combine({
        isLoading: effect.pending,
        error: restore<Error>(effect.failData, null),
        data: restore<Res>(effect.doneData, null),
    })

    return useUnit([effect, $storeStatus]);
}

