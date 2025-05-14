"use server";

import { LoginCredentials, UserType } from "@/util/types";

const API_BASE_URL = "http://45.8.132.145:8080/users";

export async function getUsers() {
  try {
    console.log("GET Users...");
    const response = await fetch(`${API_BASE_URL}?page=0&size=5`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const users = await response.json();
    console.log("users.length => ", users.totalElements);

    return users;
  } catch (error) {
    console.log("Get users error => ", error);
    return [];
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
    throw new Error("Login failed: server error.");
  }
}
