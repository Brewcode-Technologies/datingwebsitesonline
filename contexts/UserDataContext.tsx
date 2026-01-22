'use client'

import { createContext, useContext, ReactNode } from 'react'

interface UserDataContextType {
  isSignedIn: boolean
}

const UserDataContext = createContext<UserDataContextType>({
  isSignedIn: false
})

export function UserDataProvider({ children }: { children: ReactNode }) {
  return (
    <UserDataContext.Provider value={{ isSignedIn: false }}>
      {children}
    </UserDataContext.Provider>
  )
}

export function useUserData() {
  return useContext(UserDataContext)
}