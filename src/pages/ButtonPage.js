import Button from "../components/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <Button primary>
        <GoBell />
        qualquer coisa
      </Button>
    </div>
  );
}

export default ButtonPage;
