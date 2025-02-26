// undefined VS null

function display(value: string) {
  if (typeof value === "string") {
    console.log("User provided value");
    console.log(value);
  } else if (typeof value === "undefined") {
    console.log("User forgot to give value may be");
  } else if (value === null) {
    console.log("User don't want to display anything");
  }
}

let value: any;
value = null;
display(value);
