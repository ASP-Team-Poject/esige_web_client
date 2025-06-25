"use server";

import {
  returnDataOrThrowServerError,
  throwRequestError,
} from "@/util/functions";
import { LoginCredentials, UserType } from "@/util/types";

const API_BASE_URL = "http://157.230.112.193:8081/api/users";

type UsersResponse = {
  size: number;
  totalPages: number;
  page: number;
  content: UserType[];
  totalElements: number;
};

export async function getUsers(
  page: number = 0,
  size: number = 10
): Promise<UsersResponse | undefined> {
  console.log("REQUEST ", { page, size });
  try {
    const response = await fetch(`${API_BASE_URL}?page=${page}&size=${size}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return returnDataOrThrowServerError(response);
  } catch (error: any) {
    console.log("Get Users error => ", error);
    throwRequestError(error);
  }
}

export async function login({
  username,
  password,
}: LoginCredentials): Promise<UserType | undefined> {
  try {
    const url = `${API_BASE_URL}/login`;

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    return returnDataOrThrowServerError(response);
  } catch (error: any) {
    console.log("Login error => ", error);
    throwRequestError(error);
  }
}

export async function editUser(user: Partial<UserType>) {
  const OPERATION = user.id ? "UPDATE" : "CREATION";
  try {
    const URL = `${API_BASE_URL}${user.id ? "/" + user.id : ""}`;
    const METHOD = user.id ? "PUT" : "POST";

    let response = await fetch(URL, {
      method: METHOD,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return returnDataOrThrowServerError(response);
  } catch (error: any) {
    console.log(`User ${OPERATION} error =>`, error);
    throwRequestError(error);
  }
}
