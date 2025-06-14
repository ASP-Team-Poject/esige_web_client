"use server";

import { requestMessages } from "@/util/constants";
import {
  SchoolRegion,
  SchoolStType,
  SchoolType,
  SchoolYearType,
} from "@/util/types";

const API_BASE_URL = "http://157.230.112.193:8081/api";

type SchoolsResponse = {
  size: number;
  totalPages: number;
  page: number;
  content: SchoolType[];
  totalElements: number;
};

type SchoolStsResponse = {
  size: number;
  totalPages: number;
  page: number;
  content: SchoolStType[];
  totalElements: number;
};

export async function getSchools(
  page: number = 0,
  size: number = 10
): Promise<any> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/etablissements?page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const schools: SchoolsResponse = await response.json();

      return schools;
    } else {
      console.log("Server error => ", response);
      throw new Error(requestMessages.SERVER_ERROR);
    }
  } catch (error) {
    console.log("Get school error => ", error);
    throw new Error(requestMessages.SERVER_UNREACHABLE);
  }
}

export async function getSTs(
  anneeId: string,
  page: number = 0,
  size: number = 10
): Promise<SchoolStsResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/form?anneeId=${anneeId}&page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const schoolSts = await response.json();

      return schoolSts;
    } else {
      console.log("Server error => ", response);
      throw new Error(requestMessages.SERVER_ERROR);
    }
  } catch (error) {
    console.log("Get STs error => ", error);
    throw new Error(requestMessages.SERVER_UNREACHABLE);
  }
}

export async function getSchoolYears(): Promise<SchoolYearType[]> {
  try {
    console.log("GET School Years...");
    const response = await fetch(`${API_BASE_URL}/annees-scolaires`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const years = await response.json();

      return years;
    } else {
      console.log("Server error => ", response);
      throw new Error(requestMessages.SERVER_ERROR);
    }
  } catch (error) {
    console.log("Get STs error => ", error);
    throw new Error(requestMessages.SERVER_UNREACHABLE);
  }
}

export async function getSchoolRegions(): Promise<SchoolRegion[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/regions/full-hierarchy`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const regions = await response.json();

      return regions;
    } else {
      console.log("Server error => ", response);
      throw new Error(requestMessages.SERVER_ERROR);
    }
  } catch (error) {
    console.log("Get STs error => ", error);
    throw new Error(requestMessages.SERVER_UNREACHABLE);
  }
}
