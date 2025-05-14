"use server";

const API_BASE_URL = "http://45.8.132.145:8080";

export async function getSchools(page: number = 0, size: number = 10) {
  try {
    console.log("GET SCHOOLS...");
    const response = await fetch(
      `${API_BASE_URL}/etablissements?page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const schools: {
      size: number;
      totalPages: number;
      page: number;
      content: any[];
      totalElements: number;
    } = await response.json();
    //  console.log("Schools => ", schools);

    return schools.content;
  } catch (error) {
    console.log("Get school error => ", error);
    return [];
  }
}

export async function getSTs(page: number = 0, size: number = 10) {
  try {
    console.log("GET STs...");
    const response = await fetch(
      `${API_BASE_URL}/form?anneeId=16&page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const schoolSts = await response.json();
    //  console.log("schoolSts Ok => ", schoolSts);

    return schoolSts;
  } catch (error) {
    console.log("Get STs error => ", error);
    return [];
  }
}

export async function getYearsId() {
  try {
    console.log("GET School Years...");
    const response = await fetch(`${API_BASE_URL}/annees-scolaires`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const years = await response.json();
    console.log("years => ", years);

    return years;
  } catch (error) {
    console.log("Get STs error => ", error);
    return [];
  }
}
