"use client";
import { db, firebaseAuth } from "@/firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Request from "../components/request";

export interface RequestType {
  id: string;
  businessName: string;
  company: string;
  createdAt: Timestamp;
  estimatedBudget: string;
  eventTargeting: boolean;
  firstName: string;
  lastName: string;
  industry: string;
  informationRequested: [];
  jobTitle: string;
  marketingContent: boolean;
  phoneNumber: string;
  serviceType: [];
}

const Admin = () => {
  const [requests, setRequests] = useState<RequestType[]>([]);

  const fetchRequests = async () => {
    const snapshot = await getDocs(collection(db, "ooh_requests"));
    const requests: RequestType[] = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as RequestType)
    );

    setRequests(requests);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (firebaseAuth.currentUser) {
    return (
      <div className='relative bg-white pt-[120px] dark:bg-dark lg:pt-[150px]'>
        <div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl md:text-center'>
            <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'>Amcy OOH Dashboard</h2>

            <div className='flex flex-col'>
              <Request requests={requests} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='relative pt-[120px] lg:pt-[150px] bg-white dark:bg-dark mx-auto flex-1'>
        <div className='container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 items-center justify-center'>
          <h2 className='font-display text-2xl tracking-tight text-red-600 sm:text-3xl'>Authentication Required!</h2>
        </div>
      </div>
    );
  }
};

export default Admin;
