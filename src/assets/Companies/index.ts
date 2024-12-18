import Amazon from "./Amazon.png";
import Airbnb from "./Airbnb.png";
import Google from "./Google.png";
import Microsoft from "./Microsoft.png";
import Slack from "./Slack.png";

interface ICompanies {
  Airbnb: string;
  Amazon: string;
  Google: string;
  Microsoft: string;
  Slack: string;
}

const Companies: ICompanies = {
  Amazon: Amazon,
  Airbnb: Airbnb,
  Google: Google,
  Microsoft: Microsoft,
  Slack: Slack,
};

export default Companies;
