"use server";

import { requestMessages } from "@/util/constants";
import { LoginCredentials, UserType } from "@/util/types";

const API_BASE_URL = "http://45.8.132.145:8080/users";

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
): Promise<UsersResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}?page=${page}&size=${size}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const users: UsersResponse = await response.json();
      return users;
    } else {
      console.log("Server error => ", response);
      throw new Error(requestMessages.SERVER_ERROR);
    }
  } catch (error) {
    console.log("Get users error => ", error);
    throw new Error(requestMessages.SERVER_UNREACHABLE);
  }
}

export async function login({
  username,
  password,
}: LoginCredentials): Promise<UserType> {
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

    if (response.ok) {
      const data: any = await response.json();

      return data;
    } else {
      console.log("Login Failed => ", response);
      throw new Error("Login failed: bad request.");
    }
  } catch (error) {
    console.log("Error => ", error);
    throw new Error(requestMessages.SERVER_UNREACHABLE);
  }
}
