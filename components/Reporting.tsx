"use client";

import React, { useEffect, useState } from "react";
import Select from "./basic/Select";
import Button from "./basic/Button";
import { Download, Search } from "lucide-react";
import PageContentWrapper from "./layout/PageContentWrapper";
import { SchoolYearType } from "@/util/types";
import { getYearsId } from "@/services/SchoolServise";

const Reporting = () => {
  const [schoolYears, setSchoolYears] = useState<SchoolYearType[] | null>(null);
  useEffect(() => {
    const loadSchoolYears = async () => {
      const years = await getYearsId();
      setSchoolYears(years);
    };
    loadSchoolYears();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <PageContentWrapper pageTitle={"Générer Annuaire"}>
        <form className="flex gap-4">
          <Select
            label="Année"
            options={
              schoolYears?.map((year) => {
                return { id: `${year.id}`, value: year.libAnneeScolaire };
              }) || []
            }
          />
          <Select
            label="Type de tableau"
            options={[
              {
                id: "Taux de couverture selon les provinces",
                value: "Taux de couverture selon les provinces",
              },
              {
                id: "Taux de couverture selon les provinces",
                value:
                  "Nbr Ecole de préscolaire par regime de gestion selon/province",
              },
            ]}
          />
          <Select
            label="Type d'enseignement"
            options={[
              { id: "ST1(Prescolaire)", value: "ST1(Prescolaire)" },
              { id: "ST2(Primaire)", value: "ST2(Primaire)" },
              { id: "ST3(Secondaire)", value: "ST3(Secondaire)" },
            ]}
          />
          <Button
            className="h-fit self-end"
            type="submit"
            title="Rechercher"
            icon={<Search />}
          />
        </form>
      </PageContentWrapper>
      <PageContentWrapper
        pageTitle={
          "Taux de couverture par niveau d'enseignement selon la province pour 2023-2024"
        }
      >
        <div className="max-w-[990px] flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              title="Exporter en Excel"
              type="button"
              icon={<Download />}
              className="w-fit bg-green-500"
            />
            <Button
              title="Exporter en Pdf"
              type="button"
              icon={<Download />}
              className="w-fit bg-red-500"
            />
          </div>

          <div className=" overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    colSpan={3}
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PROVINCE
                  </th>
                  <th
                    colSpan={13}
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SYNTHÈSE DE LA PROVINCE ADMINISTRATIVE
                  </th>
                </tr>
                <tr>
                  <th
                    rowSpan={2}
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    N°
                  </th>
                  <th
                    rowSpan={2}
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PROVINCE ADMIN.
                  </th>
                  <th
                    rowSpan={2}
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    CHEF-LIEU
                  </th>
                  <th
                    rowSpan={2}
                    className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    NBRE 5/DIV
                  </th>
                  <th
                    colSpan={3}
                    className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PRÉ-PRIMAIRE=ST1
                  </th>
                  <th
                    colSpan={3}
                    className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PRIMAIRE=ST2
                  </th>
                  <th
                    colSpan={3}
                    className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SECONDAIRE=ST3
                  </th>
                  <th
                    colSpan={3}
                    className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TOTAL GÉNÉRAL
                  </th>
                </tr>
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EXISTANT
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    RÉPONDU
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TX
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EXISTANT
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    RÉPONDU
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TX
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EXISTANT
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    RÉPONDU
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TX
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    EXISTANT
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    RÉPONDU
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TX
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[1, 2, 3, 5].map((e) => (
                  <tr key={e}>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      1
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                      KINSHASA
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      Kinshasa
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      54
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      2459
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      1154
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      46.93%
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      4610
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      2364
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      51.00%
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      2772
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      1600
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      57.72%
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      9841
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      5118
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                      51.98%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </PageContentWrapper>
    </div>
  );
};

export default Reporting;
