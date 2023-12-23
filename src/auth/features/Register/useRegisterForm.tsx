'use client'
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import {ValidationRegisterSchema} from './RegisterValidation';
import {useRegisterMutation,authUserActions} from "@/auth";

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


    const [login,
        {
            data,
            isLoading,
            isError,
            error
        }
    ] = useRegisterMutation();

    async function onFormSubmit(fieldValues: FieldValues) {
        await login(fieldValues as IUserRegisterDto);
    }

    useEffect(() => {
        if (data) {
            toast.success('Successfully registered!');
            onSuccessRegister && onSuccessRegister();
            return;
        }

        if (error) {
            // @ts-ignore
            toast.error(error?.data?.message);
            return;
        }


    }, [data, isLoading, error, onSuccessRegister]);

    return {
        register,
        handleSubmit,
        onFormSubmit,
        errors,
    };
};
