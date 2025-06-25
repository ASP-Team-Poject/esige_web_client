"use client";

import SchoolYears from "@/components/schools/SchoolYears";
import { localStorageKeys } from "@/util/constants";
import { useEffect } from "react";

export default function SchoolYearsPage() {
  useEffect(() => {
    localStorage.removeItem(localStorageKeys.CURRENT_SCHOOL_ST);
  }, []);
  return <SchoolYears path="/encodings" />;
}
