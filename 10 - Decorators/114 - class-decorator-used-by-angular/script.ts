// Class Decorator in Angular Way - Example

function Component(htmlCode: string, selector: string) {
  return function (constructor: any) {
    let htmlEl = document.getElementById(selector);
    let data = new constructor();

    htmlCode = htmlCode.replace("{{numberOfOrder}}", data.numberOfOrder);
    htmlCode = htmlCode.replace("{{nextOrder}}", data.nextOrder);

    htmlEl!.innerHTML = htmlCode;
  };
}

@Component(
  `
    <h1>Orders ={{numberOfOrder}}  </h1>
    <p> next order #{{nextOrder}} </p>
    `,
  "orderDiv"
)
class Order {
  numberOfOrder: number = 684;
  nextOrder: number = 685;
}
