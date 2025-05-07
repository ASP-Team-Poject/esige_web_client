"use client";

import React, { useState } from "react";
import Link from "next/link";
import { users } from "@/util/constants";
import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";
import Input from "../basic/Input";
import { getFormatedDate } from "@/util/functions";

const Users = () => {
  const [noHasAscendingOrder, setNoHasAscendingOrder] = useState<boolean>(true);
  const [nameHasAscendingOrder, setNameHasAscendingOrder] =
    useState<boolean>(true);
  return (
    <div className="flex flex-col p-4 gap-4 rounded-lg shadow-xl">
      <div className="flex justify-between items-center w-full">
        <label className="flex justify-center items-center gap-2">
          Show{" "}
          <Input
            type="number"
            defaultValue="10"
            className="w-20 h-fit"
            minValue="1"
          />{" "}
          entries
        </label>
        <label className="flex justify-center items-center gap-2">
          Search <Input type="text" placeholder="search" />
        </label>
      </div>
      <div className="overflow-x-scroll w-full">
        <table className="w-full">
          <thead>
            <tr className="bg-[rgb(248,248,248)]">
              <th>
                <label className="flex justify-between">
                  <span>No</span>
                  <span className="flex">
                    <ArrowBigUpIcon
                      className={`h-5 w-5 cursor-pointer ${
                        noHasAscendingOrder ? "text-primary_color" : ""
                      }`}
                      onClick={() => setNoHasAscendingOrder(true)}
                    />
                    <ArrowBigDownIcon
                      className={`h-5 w-5 cursor-pointer ${
                        !noHasAscendingOrder ? "text-primary_color" : ""
                      }`}
                      onClick={() => setNoHasAscendingOrder(false)}
                    />
                  </span>
                </label>
              </th>
              <th>
                <label className="flex justify-between">
                  <span>{"Nom complet"}</span>
                  <span className="flex">
                    <ArrowBigUpIcon
                      className={`h-5 w-5 cursor-pointer ${
                        nameHasAscendingOrder ? "text-primary_color" : ""
                      }`}
                      onClick={() => setNameHasAscendingOrder(true)}
                    />
                    <ArrowBigDownIcon
                      className={`h-5 w-5 cursor-pointer ${
                        !nameHasAscendingOrder ? "text-primary_color" : ""
                      }`}
                      onClick={() => setNameHasAscendingOrder(false)}
                    />
                  </span>
                </label>
              </th>
              <th>{"Téléphone"}</th>
              <th>Province</th>
              <th>Proved</th>
              <th>Sous Proved</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td className="text-primary_color font-bold">
                  <Link href={`/encodings/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.phone}</td>
                <td>{user.province}</td>
                <td>{user.proved}</td>
                <td>{user.sous_proved}</td>
                <td>{getFormatedDate(user.createdAt)}</td>
                <td>...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
