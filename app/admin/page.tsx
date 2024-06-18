"use client";
import { db } from "@/firebase";
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

  console.log(requests);

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
};

export default Admin;
