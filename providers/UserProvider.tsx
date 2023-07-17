"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { FC, PropsWithChildren } from "react";

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
