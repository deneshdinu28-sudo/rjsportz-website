import { createContext, useContext, useState, ReactNode } from "react";

interface BookingModalContextValue {
  isOpen: boolean;
  source: string;
  openModal: (source: string) => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | undefined>(undefined);

export const BookingModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState("Contact Form");

  const openModal = (nextSource: string) => {
    setSource(nextSource);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ isOpen, source, openModal, closeModal }}>
      {children}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = () => {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
};
