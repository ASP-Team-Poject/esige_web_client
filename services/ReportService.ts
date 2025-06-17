"use server";

import { requestMessages } from "@/util/constants";
import {
  returnDataOrThrowServerError,
  throwRequestError,
} from "@/util/functions";
import { AnnuaireType } from "@/util/types";

const API_BASE_URL = "http://157.230.112.193:8081/api";

export async function getAnnuaire(AnnuaireRequestData: {
  selectedYear: string;
  selectedProvince: string;
  selectedProved: string;
  selectedSousProved: string;
}): Promise<AnnuaireType | undefined> {
  try {
    console.log("AnnuaireRequestData", AnnuaireRequestData);
    const url = `${API_BASE_URL}/annuaire-esige/filtreAnnuaire?anneeId=${AnnuaireRequestData.selectedYear}&sousProvedId=${AnnuaireRequestData.selectedSousProved}&provinceId=${AnnuaireRequestData.selectedProvince}&provedId=${AnnuaireRequestData.selectedProved}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response 1", response);
    return returnDataOrThrowServerError(response);
  } catch (error: any) {
    console.log("Get Users error => ", error);
    throwRequestError(error);
  }
}
