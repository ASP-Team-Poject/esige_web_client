import { requestMessages } from "@/util/constants";
import { AnnuaireType } from "@/util/types";

const API_BASE_URL = "http://157.230.112.193:8081/api";

export async function getAnnuaire(AnnuaireRequestData: {
  selectedYear: string;
  selectedProvince: string;
  selectedProved: string;
  selectedSousProved: string;
}): Promise<AnnuaireType> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/annuaire-esige/filtreAnnuaire?anneeId=${AnnuaireRequestData.selectedYear}&sousProvedId=${AnnuaireRequestData.selectedSousProved}&provinceId=${AnnuaireRequestData.selectedProvince}&provedId=${AnnuaireRequestData.selectedProved}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const annuaire: AnnuaireType = await response.json();

      return annuaire;
    } else {
      console.log("Server error => ", response);
      throw new Error(requestMessages.SERVER_ERROR);
    }
  } catch (error) {
    console.log("Get school error => ", error);
    throw new Error(requestMessages.SERVER_UNREACHABLE);
  }
}
