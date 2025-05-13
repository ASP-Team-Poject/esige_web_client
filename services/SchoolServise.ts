"use server";

const API_BASE_URL = "http://45.8.132.145:8080";

export async function getSchools() {
  try {
    console.log("GET SCHOOLS...");
    const response = await fetch(
      `${API_BASE_URL}/etablissements/proved/congocentral`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const schools = await response.json();
    console.log("Schools => ", schools.length);

    return schools;
  } catch (error) {
    console.log("Get school error => ", error);
    return [];
  }
}

export async function getSTs() {
  try {
    console.log("GET STs...");
    const response = await fetch(`${API_BASE_URL}/form/allprovince`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const schools = await response.json();
    console.log("schools.length => ", schools.length);

    return schools;
  } catch (error) {
    console.log("Get STs error => ", error);
    return [];
  }
}
