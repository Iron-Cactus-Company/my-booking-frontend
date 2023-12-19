import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import {ValidationRegisterSchema} from './RegisterValidation';
import {useDispatch} from "react-redux";
import {getJwtExpTimeStamp} from "@/shared/lib/getJwtExpTimeStamp";
import {useLoginMutation} from "@/auth/entities/authApi";
import {authUserActions} from "@/auth/entities/authUserSlice";

type Props = {
    onSuccessRegister?: () => void;
}

export const useRegisterForm = ({onSuccessRegister}: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(ValidationRegisterSchema),
    });

    const dispatch = useDispatch();


    const [login,
        {
            data,
            isLoading,
            isError,
            error
        }
    ] = useLoginMutation();

    async function onFormSubmit(fieldValues: FieldValues) {
        await login(fieldValues as IUserLoginDto);
    }

    useEffect(() => {
        if (data) {
            dispatch(authUserActions.setAccessTokenInfo({
                    accessToken: data.accessToken,
                    accessTokenExpiresAt: getJwtExpTimeStamp(data.accessToken)
                }
            ));
            toast.success('Successfully registered!');
            onSuccessRegister && onSuccessRegister();
            return;
        }

        if (error) {
            // @ts-ignore
            toast.error(error?.data?.message);
            return;
        }


    }, [data, isLoading, error, dispatch, onSuccessRegister]);

    return {
        register,
        handleSubmit,
        onFormSubmit,
        errors,
    };
};
