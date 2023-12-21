import React from "react";
import Link from "next/link";
import { RoutePaths } from "@/shared/const/RoutePaths";
import {useRegisterForm} from "@/auth/features/Register/useRegisterForm";

export default function RegistrationForm() {
    const {
        register,
        handleSubmit,
        onFormSubmit,
        errors
    } = useRegisterForm({});

    return (
        <>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register for an account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit(onFormSubmit)}>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    {...register('email')}
                                    className={`block w-full rounded-md border-1 py-1.5
                                     text-gray-900 shadow-sm ring-1
                                      ring-inset ring-gray-300 
                                      placeholder:text-gray-400 
                                      focus:ring-2 focus:ring-inset 
                                      focus:ring-indigo-600 sm:text-sm 
                                      sm:leading-6 ${errors?.email ? 'border-red-500' : ''}`}
                                />
                                {errors?.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>
                                )}
                            </div>
                        </div>


                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    {...register('name')}
                                    className={`block w-full rounded-md border-1 py-1.5 
                                    text-gray-900 shadow-sm ring-1 ring-inset
                                     ring-gray-300 placeholder:text-gray-400 focus:ring-2
                                      focus:ring-inset focus:ring-indigo-600 
                                      sm:text-sm sm:leading-6 ${errors?.name ? 'border-red-500' : ''}`}
                                />
                                {errors?.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.name?.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                    {...register('phone')}
                                    className={`block w-full rounded-md border-1 py-1.5
                                     text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                                     placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                                     focus:ring-indigo-600 sm:text-sm
                                     sm:leading-6 ${errors?.phone ? 'border-red-500' : ''}`}
                                />
                                {errors?.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.phone?.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    {...register('password')}
                                    className={`w-full rounded-md border-1 py-1.5 text-gray-900 
                                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                                    focus:ring-inset focus:ring-indigo-600 sm:text-sm 
                                    sm:leading-6 ${errors?.password ? 'border-red-500' : ''}`}
                                />
                                {errors?.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.password?.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="repeatPassword"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                Repeat Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="repeatPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    {...register('repeatPassword')}
                                    className={`w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1
                                     ring-inset ring-gray-300 placeholder:text-gray-400 
                                    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 
                                    ${errors?.repeatPassword ? 'border-red-500' : ''}`}
                                />
                                {errors?.repeatPassword && (
                                    <p className="text-red-500 text-sm mt-1">{errors?.repeatPassword?.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm
                                font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
                                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <Link
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            href={RoutePaths.AUTH_LOGIN}
                        >
                            Log in
                        </Link>
                    </p>
                </div>
        </>
    );
}
