"use client";

import React, { useEffect } from "react";
import { visiterService } from "@/services";

const Tracker = () => {
  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      // if user not saved, create user and save it for tracking
      if (localStorage.getItem("mccarlcapital.user") === null) {
        // add user to to db and save user id
        visiterService.add().then((user) => {
          localStorage.setItem("mccarlcapital.user", JSON.stringify(user));
        });
      }
    }
  }, []);

  return <></>;
};

export default Tracker;
