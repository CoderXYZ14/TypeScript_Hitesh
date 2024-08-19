interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  length: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.length ** 2;
    case "rectangle":
      return shape.length * shape.breadth;
    default:
      const _exhaustedCheck: never = shape;
      return _exhaustedCheck; //shows error as marked as never so if a shape is defined in type but not in switch so shows error
  }
}
