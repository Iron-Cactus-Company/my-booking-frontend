import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { ValidationLoginSchema } from './LoginValidation';
import {useDispatch} from "react-redux";
import {getJwtExpTimeStamp} from "@/shared/lib/getJwtExpTimeStamp";
import {useLoginMutation} from "@/auth/entities/authApi";
import {authUserActions} from "@/auth/entities/authUserSlice";

type Props = {
    onSuccessLogin?: () => void;
}

export const useLoginForm = ({onSuccessLogin}: Props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(ValidationLoginSchema),
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


    const router = useRouter();

    const handleSuccessLogin = () => {
        onSuccessLogin && onSuccessLogin();
    };


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
            toast.success('Welcome!');
            handleSuccessLogin();
            router.push('/desired-page');
            return;
        }

        if (error) {
            // @ts-ignore
            toast.error(error?.data?.message);
            return;
        }

    }, [data, isLoading, error, dispatch, onSuccessLogin]);

    return {
        register,
        handleSubmit,
        onFormSubmit,
        errors,
    };
};
