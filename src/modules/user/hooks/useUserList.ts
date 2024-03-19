import { getUserList } from "@/redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

export const useUserList = () => {
    const list = useAppSelector((state) => state.userReducer.list);
    const isFetch = useAppSelector((state) => state.userReducer.isFetch);
    const isLoading = useAppSelector((state) => state.userReducer.isLoading);
    const error = useAppSelector((state) => state.userReducer.error);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!isFetch) {
            refetch()
        }
    }, [])

    const refetch = () => {
        dispatch(getUserList())
    }
    return {
        list,
        isFetch,
        isLoading,
        error,
        refetch,
    }
}