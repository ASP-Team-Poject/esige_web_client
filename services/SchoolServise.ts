"use server";

import { requestMessages } from "@/util/constants";
import {
  getUserPath,
  returnDataOrThrowServerError,
  throwRequestError,
} from "@/util/functions";
import {
  SchoolRegion,
  SchoolStType,
  SchoolType,
  SchoolYearType,
  UserType,
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
  size: number = 10,
  search: string,
  user: Partial<UserType>,
  regions: SchoolRegion[]
): Promise<SchoolsResponse | undefined> {
  try {
    const userPath = getUserPath(user, regions);

    let url = `${API_BASE_URL}/etablissements/${userPath}?page=${page}&size=${size}&search=${search}`;
    console.log("url => ", url);
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return returnDataOrThrowServerError(response);
  } catch (error: any) {
    console.log("Get Schools error => ", error);
    throwRequestError(error);
  }
}

export async function getSTs(
  anneeId: string,
  page: number = 0,
  size: number = 10,
  search: string,
  user: Partial<UserType>,
  regions: SchoolRegion[]
): Promise<SchoolStsResponse | undefined> {
  try {
    const userPath = getUserPath(user, regions);

    let url = `${API_BASE_URL}/form/${userPath}?anneeId=${anneeId}&page=${page}&size=${size}&search=${search}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return returnDataOrThrowServerError(response);
  } catch (error: any) {
    console.log("Get Schools STs error => ", error);
    throwRequestError(error);
  }
}

export async function getSchoolYears(): Promise<SchoolYearType[] | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/annees-scolaires`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return returnDataOrThrowServerError(response);
  } catch (error: any) {
    console.log("Get Schools Years error => ", error);
    throwRequestError(error);
  }
}

export async function getSchoolRegions(): Promise<SchoolRegion[] | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/regions/full-hierarchy`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return returnDataOrThrowServerError(response);
  } catch (error: any) {
    console.log("Get Schools Regions error => ", error);
    throwRequestError(error);
  }
}

export async function editSchool(school: Partial<SchoolType>) {
  const OPERATION = school.id ? "UPDATE" : "CREATION";
  try {
    const URL = `${API_BASE_URL}/etablissements${
      school.id ? "/" + school.id : ""
    }`;
    const METHOD = school.id ? "PUT" : "POST";

    let response = await fetch(URL, {
      method: METHOD,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(school),
    });

    return returnDataOrThrowServerError(response);
  } catch (error: any) {
    console.log(`School ${OPERATION} error =>`, error);
    throwRequestError(error);
  }
}
