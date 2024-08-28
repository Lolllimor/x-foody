'use client';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  LoadingOverlay,
  Button,
} from '@mantine/core';
import React, { useState } from 'react';
import LoginBtn from './login-btn';
import Image from 'next/image';
import Btn from './common/button';
import { useRouter } from 'next/navigation';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { cookieStorage } from '@ibnlanre/portal';

export default function Login() {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      setLoading(true);
      try {
        const res = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        cookieStorage.setItem(
          'userData',
          JSON.stringify({
            name: res.data.name,
            email: res.data.email,
            picture: res.data.picture,
          })
        );

        push('/dashboard');
      } catch (error) {
        console.error('Login failed:', error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className=" w-full gap-[50px] justify-center items-center flex flex-1 overflow-auto bg-[url('/images/login.jpg')] bg-cover bg-no-repeat">
      <div className="flex justify-center items-center overflow-auto filter backdrop-filter backdrop-blur-[5px] h-full w-full ">
        <div className="relative flex flex-col items-center gap-[12%] overflow-auto justify-center min-h-[400px] p-[30px] max-h-[90vh] h-[650px] bg-white rounded-2xl max-w-[80vw] min-w-[445px]">
          <LoadingOverlay visible={loading} />
          <div className="flex gap-2 items-center w-[445px] justify-center">
            <Image
              src="/images/logo.svg"
              height={48}
              width={50}
              alt="X-Foody Logo"
            />
            <p className="text-[20px] logo leading-5 text-[#000]">X-Foody</p>
          </div>
          <div className="flex flex-col gap-[30px] overflow-auto">
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col w-[445px] gap-[30px]">
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[#201A18] text-[30px] font-[800] leading-[45px] family">
                    Welcome👋
                  </p>
                  <p className="text-[#A7A19E] font-normal text-normal family">
                    Please login here
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <TextInput
                    placeholder="Enter email address"
                    label="Email Address"
                    styles={{
                      input: {
                        '&::placeholder': {
                          color: '#000',
                        },
                      },
                    }}
                    classNames={{
                      root: 'border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-[56px] gap-[2px]',
                      input:
                        '!border-0 !p-0 custom-placeholder !min-h-[20px] !h-[20px] !m-0 ',
                      label:
                        '!text-[11px] leading-[16.5px] !text-[#E1261C] !font-[400]',
                    }}
                  />
                  <PasswordInput
                    placeholder="Password"
                    label="Enter password"
                    styles={{
                      input: {
                        '::placeholder': {
                          color: '#000',
                        },
                        '&:data-disabled': {
                          backgroundColor: 'white',
                        },
                      },
                    }}
                    classNames={{
                      root: 'border border-[#A7A19E33] rounded-[10px] px-[16px] py-[5px] flex flex-col h-[56px] gap-[2px]',
                      input:
                        '!border-0 !p-0 custom-placeholder !min-h-[20px] !h-[20px] !m-0 ',
                      label:
                        '!text-[11px] leading-[16.5px] !text-[#E1261C] !font-[400]',
                      innerInput: '!p-0 !h-[20px] flex',
                      section: '!h-[20px]',
                    }}
                  />
                </div>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-[10px] items-center">
                  <Checkbox color="#E1261C" />
                  <p className="leading-6 text-[#201A18] family">Remember Me</p>
                </div>
                <p className="leading-[21px] text-[#E1261C] family text-[14px]">
                  Forgot Password?
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[5px]">
              <Btn
                disabled={loading}
                classnames="bg-[#dc2626] text-[#fff] w-full"
                onClick={() => console.log('Login button clicked')}
                text="Login"
              />

              <div className="w-full justify-center items-center gap-[8px] flex">
                <hr className="w-full" />
                <p className="text-[14px] font-[600] text-[#201A18AD]">or</p>
                <hr className="w-full" />
              </div>
              <Button
                styles={{
                  label: {
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center', width:"100%"
                  },
                }}
                onClick={() => login()}
                className="px-[66px] w-full !gap-[5px] font-[500] flex justify-center border !bg-transparent h-[50px] !border-[#DAD9DA] items-center rounded-[10px] text-[#2B2930] "
                disabled={loading} // Disable the button while loading
              >
                Continue with{' '}
                <Image
                  className="!h-[25px] !w-[80px] mt-[5px]"
                  src="/images/g-logo.png"
                  alt="google-logo"
                  height={25}
                  width={80}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
