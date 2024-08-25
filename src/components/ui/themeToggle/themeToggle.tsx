import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import type { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme } from "@/redux/reducers/appSlice";

const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.app.theme);
  const dispatch = useDispatch();

  const setIsDarkMode = (isDarkMode: boolean) => {
    console.log("theme changing", isDarkMode);
    const theme = isDarkMode ? "dark" : "light";
    dispatch(updateTheme(theme));
    localStorage.setItem("appTheme", theme);
  };

  return (
    <DarkModeToggle
      className=""
      onChange={setIsDarkMode}
      checked={theme === "dark" ? true : false}
      size={"50%"}
    />
  );
};

export default ThemeToggle;