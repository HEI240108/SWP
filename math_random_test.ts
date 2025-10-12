import { assertEquals } from "@std/assert";
import { Bruch } from "./bruch.ts";

function kürzen(ganz: number, zähler: number, nenner: number) {

  if (zähler >= nenner) {
      ganz += Math.floor(zähler / nenner);
      zähler %= nenner;
  }

  for (let i = nenner; i > 0; i--) {
      if (zähler % i === 0 && nenner % i === 0) {
          zähler /= i;
          nenner /= i;
      }
  }

  if (zähler === 0 || nenner === 0) {
      zähler = NaN;
      nenner = NaN;
  }

  return { ganz, zähler, nenner };
}


Deno.test(function () {

  for (let i = 0; i < 15; i++) {

      let ergebnisganz   = Math.ceil(Math.random() * 100);
      let ergebniszähler = Math.ceil(Math.random() * 100);
      let ergebnisnenner = Math.ceil(Math.random() * 100);

      let erweitern1 = Math.ceil(Math.random() * 10);
      let ganz1      = Math.ceil(Math.random() * (ergebnisganz - 1));
      let zähler1    = Math.ceil(Math.random() * (ergebniszähler - 1));
      let nenner1    = ergebnisnenner;

      let erweitern2 = Math.ceil(Math.random() * 10);
      let ganz2      = ergebnisganz - ganz1;
      let zähler2    = ergebniszähler - zähler1;
      let nenner2    = ergebnisnenner;

      let ergebnis = kürzen(ergebnisganz, ergebniszähler, ergebnisnenner);

      ergebnisganz   = ergebnis.ganz;
      ergebniszähler = ergebnis.zähler;
      ergebnisnenner = ergebnis.nenner;

      let bruch1 = Bruch.fromString(
          `${ganz1} ${zähler1 * erweitern1}/${nenner1 * erweitern1}`
      );
      let bruch2 = Bruch.fromString(
          `${ganz2} ${zähler2 * erweitern2}/${nenner2 * erweitern2}`
      );

      if (Number.isNaN(ergebniszähler)) {
          assertEquals(bruch1.addiere(bruch2).toString(), `${ergebnisganz}`);
      } else {
          assertEquals(
              bruch1.addiere(bruch2).toString(),
              `${ergebnisganz} ${ergebniszähler}/${ergebnisnenner}`
          );
      }

  }

});
