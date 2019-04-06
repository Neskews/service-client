import React, { ReactElement } from "react";
import Button from "../Abstract/Button";
import { Card } from "../index";
import "./style.scss";

export default ({ proceed }: { proceed: () => void }): ReactElement => {
  return (
    <div className={"landing"}>
      <Card>
        <h1>Warum diese App?</h1>
        <p>
          Du brauchst einen guten Maler oder einen Elektriker und möchtest ihn
          entsprechend seiner Fähigkeiten bezahlen? Das erreichst du mit dieser
          App! Suche einfach nach einem benötigten Service. Wie gut der
          Handerker ist, zeigt sich in seiner Bewertung.
        </p>
        <Button label={"weiter"} onClick={proceed} />
      </Card>
    </div>
  );
};
