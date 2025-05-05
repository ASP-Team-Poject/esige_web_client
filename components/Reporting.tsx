import React from "react";
import Select from "./basic/Select";
import Button from "./basic/Button";
import { Download, Search } from "lucide-react";
import PageContentWrapper from "./layout/PageContentWrapper";

const Reporting = () => {
  return (
    <div className="flex flex-col gap-8">
      <PageContentWrapper pageTitle={"Générer Annuaire"}>
        <form className="flex gap-4">
          <Select
            label="Annee"
            options={[
              "2025-2026",
              "2024-2025",
              "2023-2024",
              "2022-2023",
              "2021-2022",
              "2020-2021",
            ]}
          />
          <Select
            label="Type de tableau"
            options={[
              "Tableau 5",
              "Tableau 4",
              "Tableau 3",
              "Tableau 2",
              "Tableau 1",
            ]}
          />
          <Select
            label="Type d'enseignement"
            options={["ST1(Prescolaire)", "ST2(Primaire)", "ST3(Secondaire)"]}
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
          <Button
            title="Exporter en Excel"
            type="button"
            icon={<Download />}
            className="w-fit"
          />
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
