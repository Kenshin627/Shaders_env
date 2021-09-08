import "../styles/main.css";
import { menuBuilder } from "./buildMenu";
import modules from "./modules/index";

window.onload = function () {
  menuBuilder();
  modules.cityRelation();
};
