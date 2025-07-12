import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  major: string;
  year: string;
  gpa: number;
  creditsCompleted: number;
  totalCreditsRequired: number;
}

interface UserContextType {
  user: User | null;
  updateUser: (userData: Partial<User>) => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@purdue.edu',
    major: 'Computer Science',
    year: 'Junior',
    gpa: 3.72,
    creditsCompleted: 89,
    totalCreditsRequired: 120,
  });
  const [isLoading, setIsLoading] = useState(false);

  const updateUser = (userData: Partial<User>) => {
    setUser(prevUser => 
      prevUser ? { ...prevUser, ...userData } : null
    );
  };

  const value = {
    user,
    updateUser,
    isLoading,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};