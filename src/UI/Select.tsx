import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ReactComponent as RuFlag } from "../components/Header/img/Ru_flag.svg";
import { ReactComponent as UkFlag } from "../components/Header/img/Fr_flag.svg";
import { ReactComponent as FrFlag } from "../components/Header/img/English_flag.svg";

type FlagIcon = {
  [key: string]: JSX.Element;
};

export default function SelectAutoWidth() {
  const [language, setLanguage] = React.useState("RU");

  const flagIcons: FlagIcon = {
    RU: <RuFlag width="20px" height="16px" />,
    EN: <UkFlag width="20px" height="16px" />,
    FR: <FrFlag width="20px" height="16px" />,
  };

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          onChange={handleChange}
          autoWidth
          renderValue={(selected: string) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "8px",
              }}
              className="mui_select"
            >
              {flagIcons[selected as keyof FlagIcon]}
              {selected}
            </div>
          )}
        >
          {Object.keys(flagIcons).map((key) => (
            <MenuItem key={key} value={key} className="select__menu-item">
              {flagIcons[key as keyof FlagIcon]}
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
