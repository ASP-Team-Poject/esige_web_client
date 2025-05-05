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
                <tr>
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
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    KONGO-CENTRAL
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    Matadi
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    21
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    446
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    12
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2.69%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2945
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    813
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    27.00%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1817
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    968
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    53.27%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    5208
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1793
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    27.86%
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    3
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    KWANGO
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    Kenge
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    29
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    277
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    50
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    18.05%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2652
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    304
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    11.00%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1597
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    871
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    54.54%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    4526
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1225
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    28.02%
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    4
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    KWILU
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    Bandundu
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    40
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1245
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    418
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    33.57%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    4345
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1825
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    42.00%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    3472
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2041
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    58.78%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    9062
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    4284
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    44.79%
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    5
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    MAÏ-NDOMBE
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    Inongo
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    26
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    385
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    110
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    28.57%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2115
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1262
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    59.00%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1265
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    684
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    54.07%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    3765
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2056
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    47.44%
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    6
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    EQUATEUR
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    Mbandaka
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    38
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    338
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    104
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    30.77%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2797
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    718
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    25.00%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1154
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    666
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    57.71%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    4289
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1488
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    38.05%
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    7
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    TSHUAPA
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    Boende
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    39
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    233
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    3
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1.29%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1922
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    627
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    32.00%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    873
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    389
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    44.56%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    3028
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1019
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    26.16%
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    8
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    MONGALA
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    Lisala
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    12
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    107
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1.87%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1639
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    545
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    33.00%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    973
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    481
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    49.43%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2719
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1028
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    28.19%
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    9
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                    NORD-UBANGI
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    Ghadolite
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    28
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    188
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    0
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    0.00%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    1198
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    613
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    51.00%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    830
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    225
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    27.11%
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    2216
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    838
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                    26.09%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </PageContentWrapper>
    </div>
  );
};

export default Reporting;
