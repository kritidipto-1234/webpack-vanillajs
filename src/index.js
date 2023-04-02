import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/Component.service";
import { run } from "./app/app";
import "./main.scss";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);